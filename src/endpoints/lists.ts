import { BaseRouter } from '@/lib/base-router'
import { GraphQLResponse } from '@/lib/graphql-response'
import { Logger } from '@/lib/logger'
import { Utils } from '@/lib/utils'
import { GetListTweetsResponse } from '@/models/endpoints/lists'
import { CustomGraphQLListTweet } from '@/models/response/custom/custom-graphql-list-tweets'
import { GraphQLListLatestTweetsTimelineResponse } from '@/models/response/graphql/list-latest-tweets-timeline'
import { FastifyReply, FastifyRequest } from 'fastify'
import { Status } from 'twitter-d'

export class ListsRouter extends BaseRouter {
  private logger = Logger.configure('ListsRouter')

  init(): void {
    this.fastify.register(
      (fastify, _, done) => {
        fastify.get('/:list_id/tweets', this.routeGetTweet.bind(this))
        done()
      },
      { prefix: '/lists' }
    )
  }

  async routeGetTweet(
    request: FastifyRequest<{
      Params: { list_id: string }
      Querystring: {
        limit: number
      }
    }>,
    reply: FastifyReply
  ): Promise<void> {
    const listId = request.params.list_id
    const limit = request.query.limit || 20

    const page = await this.wrapper.newPage()

    const graphqlResponse = new GraphQLResponse(
      page,
      'ListLatestTweetsTimeline'
    )
    const url = `https://twitter.com/i/lists/${listId}`
    await page.goto(url, { waitUntil: 'networkidle2' })

    const scrollInterval = setInterval(async () => {
      await Utils.pageScroll(page)
    }, 1000)

    const tweets = []
    while (tweets.length < limit) {
      try {
        tweets.push(...(await this.waitTweet(graphqlResponse)))
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
    graphqlResponse: GraphQLResponse<'ListLatestTweetsTimeline'>
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

  getTweet(response: GraphQLListLatestTweetsTimelineResponse): Status[] {
    const result = response.data.list.tweets_timeline.timeline.instructions
    return (
      Utils.filterUndefined(
        Utils.filterUndefined(
          result
            .filter((instruction) => instruction.type === 'TimelineAddEntries')
            .flatMap((instruction) => instruction.entries)
        )
          .filter((entry) => entry.entryId.startsWith('tweet-'))
          .flatMap((entry) => entry.content.itemContent?.tweet_results.result)
      ) as CustomGraphQLListTweet[]
    ).map((tweet) => {
      return this.createStatusObject(tweet)
    })
  }

  createStatusObject(tweet: CustomGraphQLListTweet): Status {
    const legacy = tweet.legacy ?? tweet.tweet?.legacy ?? undefined
    if (!legacy) {
      throw new Error('Failed to get legacy')
    }
    return {
      id: Number(legacy.id_str),
      source: tweet.source ?? 'NULL',
      truncated: false,
      user: {
        id: Number(tweet.core?.user_results.result.rest_id),
        id_str: tweet.core?.user_results.result.rest_id ?? 'NULL',
        ...tweet.core?.user_results.result.legacy,
      },
      ...legacy,
      display_text_range: legacy.display_text_range
        ? [legacy.display_text_range[0], legacy.display_text_range[1]]
        : undefined,
      // @ts-ignore
      entities: legacy.entities,
    }
  }
}
