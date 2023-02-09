import { generateTypeInterfaces } from './lib/generate-type-interface'
import { Logger } from './lib/logger'
import { buildApp } from './server'

async function main() {
  const logger = Logger.configure('main')

  logger.info('✨ Starting generate type interface')
  generateTypeInterfaces().then(() => {
    logger.info('✅ Finished generate type interface')
  })

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
