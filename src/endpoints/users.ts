import { BaseRouter } from '@/lib/base-router'
import { GraphQLResponse } from '@/lib/graphql-response'
import { Logger } from '@/lib/logger'
import { Utils } from '@/lib/utils'
import {
  GetUserLikesResponse,
  GetUserTweetsResponse,
  GetUserWithUserIdResponse,
} from '@/models/endpoints/users'
import { CustomGraphQLUserTweet } from '@/models/response/custom/custom-graphql-user-tweet'
import { GraphQLLikesResponse } from '@/models/response/graphql/likes'
import { GraphQLUserTweetsResponse } from '@/models/response/graphql/user-tweets'
import { FastifyRequest, FastifyReply } from 'fastify'
import { Status } from 'twitter-d'

export class UsersRouter extends BaseRouter {
  private logger = Logger.configure('UsersRouter')

  init(): void {
    this.fastify.register(
      (fastify, _, done) => {
        fastify.get('', this.routeGetUser.bind(this))
        fastify.get('/tweets', this.routeGetUserTweets.bind(this))
        fastify.get(
          '/with_replies',
          this.routeGetUserTweetWithReplies.bind(this)
        )
        fastify.get('/likes', this.routeGetUserLikes.bind(this))
        done()
      },
      { prefix: '/users' }
    )
  }

  async routeGetUser(
    request: FastifyRequest<{
      Querystring: {
        screen_name?: string
        user_id?: string
      }
    }>,
    reply: FastifyReply
  ): Promise<void> {
    const screenName = request.query.screen_name
    const userId = request.query.user_id

    if (!screenName && !userId) {
      throw new Error('Should provide query:screenName or query:userId')
    }
    if (screenName && userId) {
      throw new Error(
        'Should provide only one of query:screenName or query:userId'
      )
    }

    const url = screenName
      ? `https://twitter.com/${screenName}`
      : `https://twitter.com/i/user/${userId}`

    const page = await this.wrapper.newPage()

    const graphqlResponse = new GraphQLResponse(page, 'UserByScreenName')
    await page.goto(url)
    const response = await graphqlResponse.getSingleResponse(5000)

    await page.close()

    if (!response) {
      throw new Error('Failed to get user response')
    }

    if (!response.data.user) {
      throw new Error('Failed to get user data (404?)')
    }

    const resultUserId = response.data.user.result.rest_id
    const result: GetUserWithUserIdResponse = {
      id: Number(resultUserId),
      id_str: resultUserId,
      ...response.data.user.result.legacy,
    }

    Utils.send<GetUserWithUserIdResponse>(reply, result)
  }

  async routeGetUserTweets(
    request: FastifyRequest<{
      Querystring: {
        screen_name?: string
        user_id?: string
        limit: number
      }
    }>,
    reply: FastifyReply
  ): Promise<void> {
    const screenName = request.query.screen_name
    const userId = request.query.user_id
    const limit = request.query.limit || 20

    if (!screenName && !userId) {
      throw new Error('Should provide query:screenName or query:userId')
    }
    if (screenName && userId) {
      throw new Error(
        'Should provide only one of query:screenName or query:userId'
      )
    }

    const url = screenName
      ? `https://twitter.com/${screenName}`
      : `https://twitter.com/i/user/${userId}`

    const page = await this.wrapper.newPage()

    const graphqlResponse = new GraphQLResponse(page, 'UserTweets')
    await page.goto(url, {
      waitUntil: 'networkidle2',
    })

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

    Utils.send<GetUserTweetsResponse>(reply, tweets)
  }

  async routeGetUserTweetWithReplies(
    request: FastifyRequest<{
      Querystring: {
        screen_name?: string
        user_id?: string
        limit: number
      }
    }>,
    reply: FastifyReply
  ): Promise<void> {
    let screenName = request.query.screen_name
    const userId = request.query.user_id
    const limit = request.query.limit || 20

    if (!screenName && !userId) {
      throw new Error('Should provide query:screenName or query:userId')
    }
    if (screenName && userId) {
      throw new Error(
        'Should provide only one of query:screenName or query:userId'
      )
    }

    // スクリーンネームを取得する
    if (!screenName && userId) {
      screenName = await this.getScreenName(userId)
    }

    if (!screenName) {
      throw new Error('Failed to get screen name')
    }

    const page = await this.wrapper.newPage()

    const graphqlResponse = new GraphQLResponse(page, 'UserTweets')
    await page.goto(`https://twitter.com/${screenName}/with_replies`, {
      waitUntil: 'networkidle2',
    })

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

    Utils.send<GetUserTweetsResponse>(reply, tweets)
  }

  async routeGetUserLikes(
    request: FastifyRequest<{
      Querystring: {
        screen_name?: string
        user_id?: string
        limit: number
      }
    }>,
    reply: FastifyReply
  ): Promise<void> {
    let screenName = request.query.screen_name
    const userId = request.query.user_id
    const limit = request.query.limit || 20

    if (!screenName && !userId) {
      throw new Error('Should provide query:screenName or query:userId')
    }
    if (screenName && userId) {
      throw new Error(
        'Should provide only one of query:screenName or query:userId'
      )
    }

    // スクリーンネームを取得する
    if (!screenName && userId) {
      screenName = await this.getScreenName(userId)
    }

    if (!screenName) {
      throw new Error('Failed to get screen name')
    }

    const page = await this.wrapper.newPage()

    const graphqlResponse = new GraphQLResponse(page, 'Likes')
    await page.goto(`https://twitter.com/${screenName}/likes`, {
      waitUntil: 'networkidle2',
    })

    const scrollInterval = setInterval(async () => {
      await Utils.pageScroll(page)
    }, 1000)

    const tweets = []
    while (tweets.length < limit) {
      try {
        tweets.push(...(await this.waitLikeTweet(graphqlResponse)))
      } catch (error) {
        this.logger.error('⚠️ Failed wait tweet', error as Error)
        break
      }
    }

    clearInterval(scrollInterval)
    await page.close()

    Utils.send<GetUserLikesResponse>(reply, tweets)
  }

  async getScreenName(userId: string): Promise<string> {
    const url = `https://twitter.com/i/user/${userId}`
    const page = await this.wrapper.newPage()
    await page.goto(url, {
      waitUntil: 'networkidle2',
    })

    const graphqlResponse = new GraphQLResponse(page, 'UserByScreenName')
    await page.goto(url)
    const response = await graphqlResponse.getSingleResponse(5000)

    await page.close()

    if (!response) {
      throw new Error('Failed to get user response')
    }

    if (!response.data.user) {
      throw new Error('Failed to get user data (404?)')
    }

    return response.data.user.result.legacy.screen_name
  }

  waitTweet(graphqlResponse: GraphQLResponse<'UserTweets'>): Promise<Status[]> {
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

  waitLikeTweet(graphqlResponse: GraphQLResponse<'Likes'>): Promise<Status[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('TIMEOUT'))
      }, 10_000)
      const interval = setInterval(async () => {
        const response = graphqlResponse.shiftResponse()
        if (!response) {
          return
        }

        const tweets = this.getLikeTweet(response)
        if (tweets.length > 0) {
          clearInterval(interval)
          resolve(tweets)
        }
      }, 1000)
    })
  }

  getTweet(response: GraphQLUserTweetsResponse): Status[] {
    const result = response.data.user.result.timeline_v2.timeline.instructions
    return (
      Utils.filterUndefined(
        Utils.filterUndefined(
          result
            .filter((instruction) => instruction.type === 'TimelineAddEntries')
            .flatMap((instruction) => instruction.entries)
        )
          .filter((entry) => entry.entryId.startsWith('tweet-'))
          .flatMap((entry) => entry.content.itemContent?.tweet_results.result)
      ) as CustomGraphQLUserTweet[]
    ).map((tweet) => {
      return this.createStatusObject(tweet)
    })
  }

  getLikeTweet(response: GraphQLLikesResponse): Status[] {
    const result = response.data.user.result.timeline_v2.timeline.instructions
    return (
      Utils.filterUndefined(
        Utils.filterUndefined(
          result
            .filter((instruction) => instruction.type === 'TimelineAddEntries')
            .flatMap((instruction) => instruction.entries)
        )
          .filter((entry) => entry.entryId.startsWith('tweet-'))
          .flatMap((entry) => entry.content.itemContent?.tweet_results.result)
      ) as CustomGraphQLUserTweet[]
    ).map((tweet) => {
      return this.createStatusObject(tweet)
    })
  }

  createStatusObject(tweet: CustomGraphQLUserTweet): Status {
    const legacy = tweet.legacy ?? tweet.tweet?.legacy ?? undefined
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
      // @ts-ignore
      entities: legacy.entities,
    }
  }
}
