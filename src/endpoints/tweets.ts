import { BaseRouter } from '@/lib/base-router'
import { GraphQLResponse } from '@/lib/graphql-response'
import { Utils } from '@/lib/utils'
import { GetTweetResponse } from '@/models/endpoints/tweets'
import { CustomGraphQLTweetDetail } from '@/models/response/custom/custom-graphql-tweet-detail'
import { GraphQLTweetDetailResponse } from '@/models/response/graphql/tweet-detail'
import { FastifyReply, FastifyRequest } from 'fastify'
import { Status } from 'twitter-d'

export class TweetsRouter extends BaseRouter {
  // private logger = Logger.configure('TweetsRouter')

  init(): void {
    this.fastify.register(
      (fastify, _, done) => {
        fastify.get('/:tweet_id', this.routeGetTweet.bind(this))
        // fastify.post('/:tweet_id/retweet', this.routePostRetweet.bind(this))
        // fastify.post('/:tweet_id/like', this.routePostLike.bind(this))
        done()
      },
      { prefix: '/tweets' }
    )
  }

  async routeGetTweet(
    request: FastifyRequest<{ Params: { tweet_id: string } }>,
    reply: FastifyReply
  ): Promise<void> {
    const tweetId = request.params.tweet_id

    const page = await this.wrapper.newPage()
    const url = `https://twitter.com/i/status/${tweetId}`

    const graphqlResponse = new GraphQLResponse(page, 'TweetDetail')
    await page.goto(url)
    const response = await graphqlResponse.getSingleResponse(5000)

    await page.close()
    if (!response) {
      throw new Error('Failed to get tweet response')
    }

    const tweetDetail = this.getTweetDetail(response)

    const result: Status = this.createStatusObject(tweetDetail)
    Utils.send<GetTweetResponse>(reply, result)
  }

  getTweetDetail(
    response: GraphQLTweetDetailResponse
  ): CustomGraphQLTweetDetail {
    const entries =
      response.data.threaded_conversation_with_injections_v2.instructions[0]
        .entries
    if (!entries) {
      throw new Error('Failed to get tweet entries')
    }

    const tweet = entries.find((entry) => entry.entryId.startsWith('tweet-'))
    if (!tweet) {
      throw new Error('Failed to get tweet')
    }

    const tweetDetail = tweet.content.itemContent?.tweet_results?.result
    if (!tweetDetail) {
      throw new Error('Failed to get tweet detail')
    }

    return tweetDetail
  }

  createStatusObject(tweet: CustomGraphQLTweetDetail): Status {
    const legacy = tweet.legacy
    if (!legacy) {
      throw new Error('Failed to get legacy')
    }
    return {
      id: Number(legacy.id_str),
      source: tweet.source ?? 'NULL',
      truncated: false,
      user: {
        id: Number(tweet.core?.user_results.result.id),
        id_str: tweet.core?.user_results.result.id ?? 'NULL',
        ...tweet.core?.user_results.result.legacy,
      },
      ...legacy,
      display_text_range: legacy.display_text_range
        ? [legacy.display_text_range[0], legacy.display_text_range[1]]
        : undefined,
      entities: {
        // @ts-ignore
        urls: legacy.entities.urls,
        // @ts-ignore
        hashtags: legacy.entities.hashtags,
        // @ts-ignore
        symbols: legacy.entities.symbols,
        // @ts-ignore
        user_mentions: legacy.entities.user_mentions,
      },
    }
  }
}
