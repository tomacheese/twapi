import { generateTypeInterfaces } from './lib/generate-type-interface'
import { Logger } from '@book000/node-utils'
import { buildApp } from './server'

async function main() {
  const logger = Logger.configure('main')

  if (process.env.GENERATE_TYPE_INTERFACE) {
    logger.info('✨ Starting generate type interface')
    const genPromise = generateTypeInterfaces().then(() => {
      logger.info('✅ Finished generate type interface')
    })
    if (process.env.WAIT_FOR_GENERATE_TYPE_INTERFACE) {
      await genPromise
    }
  }

  logger.info('✨ Starting server')
  const app = await buildApp()
  const host = process.env.API_HOST || '0.0.0.0'
  const port = process.env.API_PORT
    ? Number.parseInt(process.env.API_PORT, 10)
    : 80
  app.listen({ host, port }, (error, address) => {
    if (error) {
      logger.error('❌ Listen error', error)
      // eslint-disable-next-line unicorn/no-process-exit
      process.exit(1)
    }
    logger.info(`✅ Server listening at ${address}`)
  })
}

;(async () => {
  await main()
})()
