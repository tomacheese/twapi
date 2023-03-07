import { BaseRouter } from '@/lib/base-router'
import { generateTypeInterfaces } from '@/lib/generate-type-interface'
import { GraphQLResponse } from '@/lib/graphql-response'
import { Logger } from '@book000/node-utils'
import { RestResponse } from '@/lib/rest-response'

export class DebugRouter extends BaseRouter {
  private logger = Logger.configure('DebugRouter')

  init(): void {
    this.fastify.register(
      (fastify, _, done) => {
        fastify.get('', this.routeGetRoot.bind(this))
        done()
      },
      { prefix: '/debug' }
    )
  }

  async routeGetRoot(): Promise<void> {
    const page = await this.wrapper.newPage()
    // eslint-disable-next-line no-new
    new GraphQLResponse(page)
    // eslint-disable-next-line no-new
    new RestResponse(page)

    await page.goto(`https://twitter.com`)
    await new Promise((resolve) => setTimeout(resolve, 300_000)) // 5 minutes
    await page.close()

    this.logger.info('✨ Starting generate type interface')
    generateTypeInterfaces().then(() => {
      this.logger.info('✅ Finished generate type interface')
    })
  }
}
