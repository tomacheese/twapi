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
    new DebugRouter(app, config, wrapper),
  ]

  for (const router of routers) {
    logger.info(`🚦 Initializing route: ${router.constructor.name}`)
    router.init()
  }

  return app
}
