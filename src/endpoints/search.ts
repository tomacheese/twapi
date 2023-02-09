import { BaseRouter } from '@/lib/base-router'
import { Logger } from '@/lib/logger'
import { RestResponse } from '@/lib/rest-response'
import { Utils } from '@/lib/utils'
import { GetListTweetsResponse } from '@/models/endpoints/lists'
import { CustomRestSearchAdaptiveTweet } from '@/models/response/custom/custom-rest-search-adaptive-tweet'
import { CustomRestSearchAdaptiveUser } from '@/models/response/custom/custom-rest-search-adaptive-user'
import { RestSearchAdaptiveResponse } from '@/models/response/restapi/search-adaptive'
import { FastifyReply, FastifyRequest } from 'fastify'
import { Status } from 'twitter-d'

export class SearchRouter extends BaseRouter {
  private logger = Logger.configure('SearchRouter')

  init(): void {
    this.fastify.register(
      (fastify, _, done) => {
        fastify.get('/:q', this.routeGetSearch.bind(this))
        done()
      },
      { prefix: '/search' }
    )
  }

  async routeGetSearch(
    request: FastifyRequest<{
      Params: { q: string }
      Querystring: {
        limit: number
      }
    }>,
    reply: FastifyReply
  ): Promise<void> {
    const q = request.params.q
    const limit = request.query.limit || 20

    const page = await this.wrapper.newPage()

    const restResponse = new RestResponse(page, 'SearchAdaptive')
    const url = `https://twitter.com/search?q=${encodeURIComponent(q)}&f=live`
    await page.goto(url, { waitUntil: 'networkidle2' })

    const scrollInterval = setInterval(async () => {
      await Utils.pageScroll(page)
    }, 1000)

    const tweets = []
    while (tweets.length < limit) {
      try {
        tweets.push(...(await this.waitTweet(restResponse)))
      } catch (error) {
        this.logger.error('⚠️ Failed wait tweet', error as Error)
        break
      }
    }

    clearInterval(scrollInterval)
    await page.close()

    Utils.send<GetListTweetsResponse>(reply, tweets)
  }

  waitTweet(
    graphqlResponse: RestResponse<'SearchAdaptive'>
  ): Promise<Status[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('TIMEOUT'))
      }, 10_000)
      const interval = setInterval(async () => {
        const response = graphqlResponse.shiftResponse()
        if (!response) {
          return
        }

        const tweets = this.getTweet(response)
        if (tweets.length > 0) {
          clearInterval(interval)
          resolve(tweets)
        }
      }, 1000)
    })
  }

  getTweet(response: RestSearchAdaptiveResponse): Status[] {
    const result = Object.values(response.globalObjects.tweets)
    const users = Object.values(response.globalObjects.users)
    return result.map((tweet) => {
      return this.createStatusObject(users, tweet)
    })
  }

  createStatusObject(
    users: CustomRestSearchAdaptiveUser[],
    tweet: CustomRestSearchAdaptiveTweet
  ): Status {
    const user = users.find((user) => user.id_str === tweet.user_id_str)
    if (!user) {
      throw new Error('User not found')
    }
    return {
      ...tweet,
      user: {
        ...user,
        // @ts-ignore
        following: undefined,
        followed_by: undefined,
        follow_request_sent: undefined,
        muting: undefined,
        blocking: undefined,
        blocked_by: undefined,
      },
      // @ts-ignore
      contributors: tweet.contributors,
      display_text_range: tweet.display_text_range
        ? [tweet.display_text_range[0], tweet.display_text_range[1]]
        : null,
    }
  }
}
