import fs from 'node:fs'
import puppeteer, { Browser, Page } from 'puppeteer-core'
import { authenticator } from 'otplib'
import { Logger } from '@book000/node-utils'
import { ChildProcess, execSync, spawn } from 'node:child_process'

export interface AuthConfig {
  password?: string
  authCodeSecret?: string
}

export interface ProxyOptions {
  server: string
  username?: string
  password?: string
}

export interface PuppeteerWrapperOptions {
  headless: boolean
  user: string
  auth?: AuthConfig
  proxy?: ProxyOptions
}

export class PuppeteerWrapper {
  private static logger = Logger.configure('PuppeteerWrapper')
  private browser: Browser
  private options: PuppeteerWrapperOptions
  private xvfbProcess: ChildProcess | undefined
  private restarting = false
  private closed = false
  public readonly screen: number
  public readonly createdAt = new Date()

  private constructor(
    browser: Browser,
    options: PuppeteerWrapperOptions,
    screen: number,
    xvfbProcess: ChildProcess | undefined
  ) {
    this.browser = browser
    this.options = options
    this.screen = screen
    this.xvfbProcess = xvfbProcess

    const restartBrowser = () => {
      if (this.closed) {
        return
      }
      if (this.restarting) {
        return
      }
      PuppeteerWrapper.logger.info(
        '🔌 Browser disconnected (disconnect event). Restarting...'
      )
      this.restarting = true
      PuppeteerWrapper.startXvfbProcess(screen).then((xvfbProcess) => {
        if (xvfbProcess) {
          this.xvfbProcess = xvfbProcess
        }
        PuppeteerWrapper.getBrowser(
          `/data/userdata/${options.user}`,
          options
        ).then((browser) => {
          this.browser = browser

          PuppeteerWrapper.logger.info('🔌 Browser restarted.')
        })
      })
    }

    this.browser.on('disconnected', () => {
      restartBrowser()
    })
    if (this.xvfbProcess) {
      this.xvfbProcess?.on('close', () => {
        restartBrowser()
      })
    }
    setInterval(() => {
      const isConnected = this.browser.isConnected()

      if (isConnected) {
        return
      }

      restartBrowser()
    }, 10_000)

    // screen 0 がクローズしたら必ず立て直す
    if (screen === 0) {
      setInterval(async () => {
        if (!this.browser || this.browser.isConnected()) {
          return
        }
        restartBrowser()
      }, 10_000)
    }
  }

  public async newPage() {
    return PuppeteerWrapper.newPage(this.browser, this.options.proxy)
  }

  public async close() {
    this.closed = true
    await this.browser.close()
    if (this.xvfbProcess) {
      // 停止させて、3秒しても終了しなければ強制終了
      const promise = new Promise<void>((resolve) => {
        const timeout = setTimeout(() => {
          if (!this.xvfbProcess || this.xvfbProcess.killed) {
            resolve()
            return
          }
          this.xvfbProcess.kill('SIGKILL')
          resolve()
        }, 3000)
        if (this.xvfbProcess) {
          this.xvfbProcess.on('close', () => {
            clearTimeout(timeout)
            resolve()
          })
        }
      })
      this.xvfbProcess.kill('SIGTERM')
      await promise
    }
  }

  public isClosed() {
    return this.closed
  }

  private static async newPage(browser: Browser, proxy?: ProxyOptions) {
    const page = await browser.newPage()
    page.setDefaultNavigationTimeout(120 * 1000)

    await page.evaluateOnNewDocument(() => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      Object.defineProperty(navigator, 'webdriver', () => {})
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line no-proto
      delete navigator.__proto__.webdriver
    })

    // プロキシ設定がある場合は適用
    if (proxy && proxy.username && proxy.password) {
      this.logger.info('🔒 Login proxy')
      await page.authenticate({
        username: proxy.username,
        password: proxy.password,
      })
      this.logger.info('🔒 Login proxy... done')
    }
    return page
  }

  public static async init(screen: number, options: PuppeteerWrapperOptions) {
    const userDataDirectory = `/data/userdata/${options.user}`

    const puppeteerArguments = [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--disable-gpu',
      '--lang=ja',
      '--window-size=600,800',
    ]

    if (options.proxy && options.proxy.server) {
      puppeteerArguments.push('--proxy-server=' + options.proxy.server)
    }

    const xvfbProcess = await PuppeteerWrapper.startXvfbProcess(screen, true)
    if (!xvfbProcess) {
      throw new Error('Xvfb process is not running.')
    }

    const display = `:${screen}`
    process.env.DISPLAY = display

    const browser = await PuppeteerWrapper.getBrowser(
      userDataDirectory,
      options
    )

    return new PuppeteerWrapper(browser, options, screen, xvfbProcess)
  }

  private static async startXvfbProcess(
    screen: number,
    force = false
  ): Promise<ChildProcess | null> {
    const logger = Logger.configure(`Xvfb:${screen}`)

    const pid = await PuppeteerWrapper.getRunningXvfbProcessPid(screen)
    logger.info(`pid: ${pid}`)
    if (pid) {
      logger.info(
        `🖥️ Xvfb process is already running on screen ${screen} (Pid: ${pid}).`
      )

      if (!force) {
        return null
      }

      logger.info(`🖥️ Stopping Xvfb process...`)
      await PuppeteerWrapper.stopXvfbProcess(screen)
    }
    logger.info(`🖥️ Start Xvfb process on screen ${screen}`)
    // rm /tmp/.X*-lock
    if (fs.existsSync(`/tmp/.X${screen}-lock`)) {
      fs.unlinkSync(`/tmp/.X${screen}-lock`)
    }

    const xvfbProcess = spawn(
      `Xvfb`,
      [`:${screen}`, '-ac', '-screen', '0', '600x800x16', '-listen', 'tcp'],
      {
        stdio: 'pipe',
      }
    )
    xvfbProcess.stdout?.on('data', (data) => {
      logger.info(data.toString())
    })
    xvfbProcess.stderr?.on('data', (data) => {
      logger.error(data.toString())
    })
    xvfbProcess.on('close', (code) => {
      logger.info(`Xvfb process exited with code ${code}`)
    })
    return xvfbProcess
  }

  private static async stopXvfbProcess(screen: number) {
    const logger = Logger.configure(`Xvfb:${screen}`)
    logger.info(`🖥️ Stop Xvfb process on screen ${screen}`)

    const pid = await PuppeteerWrapper.getRunningXvfbProcessPid(screen)
    try {
      const promise = new Promise<void>((resolve) => {
        setTimeout(() => {
          // 3秒しても終了しなければ強制終了
          if (!pid) {
            resolve()
            return
          }
          try {
            execSync(`kill -9 ${pid}`) // SIGKILL
          } catch {}
          resolve()
        }, 3000)
      })
      if (pid) {
        execSync(`kill ${pid}`) // SIGTERM
      }
      await promise
    } catch (error) {
      logger.error('Failed to stop Xvfb process', error as Error)
    }

    if (fs.existsSync(`/tmp/.X${screen}-lock`)) {
      fs.unlinkSync(`/tmp/.X${screen}-lock`)
    }
  }

  private static async getRunningXvfbProcessPid(screen: number) {
    const process = spawn(
      `ps -ef | grep Xvfb | grep :${screen} | grep -v grep`,
      {
        shell: true,
      }
    )
    return new Promise<number | null>((resolve) => {
      process.stdout?.on('data', (data) => {
        // "   10 root      0:02 Xvfb :0 -ac -screen 0 600x800x16 -listen tcp"
        const pid = data.toString().trim().split(' ')[0]
        resolve(Number.parseInt(pid, 10))
      })
      process.on('close', (code) => {
        if (code !== 0) {
          setTimeout(() => {
            resolve(null)
          }, 500)
        }
      })
    })
  }

  private static async getBrowser(
    userDataDirectory: string,
    options: PuppeteerWrapperOptions
  ) {
    if (!fs.existsSync(userDataDirectory)) {
      fs.mkdirSync(userDataDirectory, { recursive: true })
    }

    const puppeteerArguments = [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--disable-gpu',
      '--lang=ja',
      '--window-size=600,800',
    ]

    if (options.proxy && options.proxy.server) {
      puppeteerArguments.push('--proxy-server=' + options.proxy.server)
    }

    const browser = await puppeteer.launch({
      headless: options.headless,
      executablePath: '/usr/bin/chromium-browser',
      args: puppeteerArguments,
      defaultViewport: {
        width: 600,
        height: 800,
      },
      userDataDir: userDataDirectory,
    })

    process.on('SIGINT', async () => {
      await browser.close()
      process.exit(0)
    })

    const loginPage = await this.newPage(browser, options.proxy)
    await this.login(loginPage, options)
    await loginPage.close()

    return browser
  }

  private static async login(
    page: Page,
    options: Omit<PuppeteerWrapperOptions, 'headless' | 'proxy'>
  ) {
    const logger = Logger.configure('PuppeteerWrapper.login')
    logger.info(`✨ Login to twitter as ${options.user}`)
    await page.goto('https://twitter.com', {
      waitUntil: ['load', 'networkidle2'],
    })
    await new Promise<void>((resolve) => setTimeout(resolve, 3000))

    const href = await page.evaluate(() => {
      return document.location.href
    })
    if (href !== 'https://twitter.com/home') {
      logger.warn('❗ You need to login again.')

      await page.goto('https://twitter.com/i/flow/login', {
        waitUntil: ['load', 'networkidle2'],
      })

      await page
        .waitForSelector('input[autocomplete="username"]')
        .then((element) => element?.type(options.user, { delay: 100 }))

      // next button
      await page
        .waitForSelector('div[role="button"]:not([data-testid])')
        .then((element) => element?.click())

      if (options.auth && options.auth.password) {
        const password = options.auth.password
        // password
        await page
          .waitForSelector('input[autocomplete="current-password"]')
          .then((element) => element?.type(password, { delay: 100 }))

        // login button
        await page
          .waitForSelector(
            'div[role="button"][data-testid="LoginForm_Login_Button"]'
          )
          .then((element) => element?.click())
      }

      // need auth code ?
      try {
        const authCodeInput = await page.waitForSelector(
          'input[data-testid="ocfEnterTextTextInput"]',
          { timeout: 3000 }
        )
        if (authCodeInput) {
          logger.info('🔒 Need OTP.')
          const authCode = this.getOneTimePassword(options)
          await authCodeInput.type(authCode, { delay: 100 })
          await page
            .waitForSelector(
              'div[role="button"][data-testid="ocfEnterTextNextButton"]'
            )
            .then((element) => element?.click())
        }
      } catch {}

      await new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          reject(new Error('Login timeout.'))
        }, 10_000)
        const interval = setInterval(() => {
          if (page.url() === 'https://twitter.com/home') {
            clearInterval(interval)
            resolve()
          }
        }, 500)
      })
    }
    logger.info(`✅ You have successfully logged in as ${options.user}`)
  }

  private static getOneTimePassword(
    options: Pick<PuppeteerWrapperOptions, 'auth'>
  ) {
    if (!options.auth || !options.auth.authCodeSecret) {
      throw new Error('authCodeSecret is not set.')
    }
    return authenticator.generate(options.auth.authCodeSecret)
  }
}

export class PuppeteerWrapperManager {
  private wrappers: {
    [key: string]: PuppeteerWrapper
  } = {}

  constructor() {
    setInterval(() => {
      const logger = Logger.configure('WrapperAutoCloser')
      for (const key of Object.keys(this.wrappers)) {
        const wrapper = this.wrappers[key]
        if (wrapper.isClosed()) {
          logger.info(`🗑 Delete closed wrapper for screen ${wrapper.screen}`)
          delete this.wrappers[key]
        }
        // screen != 0 で、 3時間経過したら自動クローズ
        if (
          wrapper.screen !== 0 &&
          wrapper.createdAt.getTime() < Date.now() - 3 * 1000 * 60 * 60
        ) {
          logger.info(`🗑 Delete wrapper for screen ${wrapper.screen}`)
          wrapper.close()
          delete this.wrappers[key]
        }
      }
    }, 1000)
  }

  public async getWrapper(options: PuppeteerWrapperOptions) {
    const logger = Logger.configure('getWrapper')
    logger.info(
      `✨ Get wrapper for ${options.user}. Known wrappers: ${Object.keys(
        this.wrappers
      ).join(', ')}`
    )
    if (
      this.wrappers[options.user] &&
      !this.wrappers[options.user].isClosed()
    ) {
      logger.info(`📕 Use existing wrapper for ${options.user}`)
      return this.wrappers[options.user]
    }
    const screen = this.getNextScreen()
    const screens = Object.values(this.wrappers)
      .map((wrapper) => wrapper.screen)
      .join(', ')
    logger.info(`🔢 Next screen is ${screen} (Screens: ${screens})`)
    const wrapper = await PuppeteerWrapper.init(screen, options)
    this.wrappers[options.user] = wrapper
    return wrapper
  }

  public getWrappers() {
    return this.wrappers
  }

  private getNextScreen() {
    const screens = Object.values(this.wrappers).map(
      (wrapper) => wrapper.screen
    )
    // 0 はデフォルトのディスプレイ
    if (screens.length === 0) return 0
    return Math.max(...screens) + 1
  }
}
