import fastify, { FastifyInstance } from 'fastify'
import { loadConfig } from './config'
import { BaseRouter } from './lib/base-router'
import cors from '@fastify/cors'
import { UsersRouter } from './endpoints/users'
import { PuppeteerWrapper } from './lib/puppeteer-wrapper.class'
import { Logger } from './lib/logger'
import swagger from '@fastify/swagger'
import swaggerUI from '@fastify/swagger-ui'
import fs from 'node:fs'
import { DebugRouter } from './endpoints/debug'
import { TweetsRouter } from './endpoints/tweets'
import basicAuth from '@fastify/basic-auth'

/**
 * Fastify アプリケーションを構築する
 *
 * @returns Fastify アプリケーション
 */
export async function buildApp(): Promise<FastifyInstance> {
  const logger = Logger.configure('buildApp')
  const config = loadConfig()
  const wrapper = await PuppeteerWrapper.init({
    headless: false,
    user: config.twitter.username,
    auth: {
      password: config.twitter.password,
      authCodeSecret: config.twitter.authCodeSecret,
    },
  })

  const app = fastify()
  app.register(cors, {
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  })

  // basic auth
  app.register(basicAuth, {
    validate: (username, password, request, _reply, done) => {
      if (
        config.twitter.basicUsername === username &&
        config.twitter.basicPassword === password
      ) {
        done()
        return
      }
      const accounts = config.accounts
      if (!accounts) {
        done(new Error('Invalid username or password'))
        return
      }
      const account = accounts.find(
        (account) =>
          account.basicUsername === username &&
          account.basicPassword === password
      )
      if (!account) {
        done(new Error('Invalid username or password'))
        return
      }
      request.account = account
      done()
    },
    authenticate: true,
  })
  app.after(() => {
    app.addHook('onRequest', app.basicAuth)
  })

  const versionFile = fs.existsSync('/app/version')
    ? fs.readFileSync('/app/version', 'utf8').trim()
    : undefined
  const version = process.env.npm_package_version || versionFile || '0.0.0'

  app.register(swagger, {
    swagger: {
      info: {
        title: 'Twitter Unofficial API',
        description: 'Twitter Unofficial API',
        version,
      },
    },
  })

  app.register(swaggerUI, {
    routePrefix: '/docs',
    staticCSP: true,
  })

  // routers
  const routers: BaseRouter[] = [
    new UsersRouter(app, config, wrapper),
    new TweetsRouter(app, config, wrapper),
    new DebugRouter(app, config, wrapper),
  ]

  for (const router of routers) {
    logger.info(`🚦 Initializing route: ${router.constructor.name}`)
    router.init()
  }

  return app
}
