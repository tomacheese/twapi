import fs from 'node:fs'
import puppeteer, { Browser, Page } from 'puppeteer-core'
import { authenticator } from 'otplib'
import { Logger } from './logger'

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
  private proxy: ProxyOptions | undefined

  private constructor(browser: Browser, proxy: ProxyOptions | undefined) {
    this.browser = browser
    this.proxy = proxy
  }

  public async newPage() {
    return PuppeteerWrapper.newPage(this.browser, this.proxy)
  }

  public async close() {
    await this.browser.close()
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

  public static async init(options: PuppeteerWrapperOptions) {
    const userDataDirectory = `/data/userdata/${options.user}`
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

    return new PuppeteerWrapper(browser, options.proxy)
  }

  private static async login(page: Page, options: PuppeteerWrapperOptions) {
    const logger = Logger.configure('PuppeteerWrapper.login')
    logger.info('✨ Login to twitter')
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
          'input[data-testid="ocfEnterTextTextInput"]'
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

      await new Promise<void>((resolve) => {
        const interval = setInterval(() => {
          if (page.url() === 'https://twitter.com/home') {
            clearInterval(interval)
            resolve()
          }
        }, 500)
      })
    }
    logger.info('✅ You have successfully logged in.')
    await new Promise<void>((resolve) => setTimeout(resolve, 3000))
  }

  private static getOneTimePassword(options: PuppeteerWrapperOptions) {
    if (!options.auth || !options.auth.authCodeSecret) {
      throw new Error('authCodeSecret is not set.')
    }
    return authenticator.generate(options.auth.authCodeSecret)
  }
}
