import { BaseRouter } from '@/lib/base-router'
import { GraphQLResponse } from '@/lib/graphql-response'
import { Logger } from '@/lib/logger'
import { Utils } from '@/lib/utils'
import {
  GetUserFollowersResponse,
  GetUserFollowingResponse,
  GetUserLikesResponse,
  GetUserTweetsResponse,
  GetUserWithUserIdResponse,
} from '@/models/endpoints/users'
import { CustomGraphQLFollow } from '@/models/response/custom/custom-graphql-follow'
import { CustomGraphQLFollowUser } from '@/models/response/custom/custom-graphql-follow-user'
import { CustomGraphQLUserTweet } from '@/models/response/custom/custom-graphql-user-tweet'
import { GraphQLFollowersResponse } from '@/models/response/graphql/followers'
import { GraphQLFollowingResponse } from '@/models/response/graphql/following'
import { GraphQLLikesResponse } from '@/models/response/graphql/likes'
import { GraphQLUserTweetsResponse } from '@/models/response/graphql/user-tweets'
import { FastifyRequest, FastifyReply } from 'fastify'
import { Status, User } from 'twitter-d'

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
        fastify.get('/following', this.routeGetUserFollowing.bind(this))
        fastify.get('/followers', this.routeGetUserFollowers.bind(this))
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
      // @ts-ignore
      following: undefined,
      followed_by: undefined,
      follow_request_sent: undefined,
      muting: undefined,
      blocking: undefined,
      blocked_by: undefined,
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

  async routeGetUserFollowing(
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

    const graphqlResponse = new GraphQLResponse(page, 'Following')
    await page.goto(`https://twitter.com/${screenName}/following`, {
      waitUntil: 'networkidle2',
    })

    const scrollInterval = setInterval(async () => {
      await Utils.pageScroll(page)
    }, 1000)

    const users = []
    while (true) {
      try {
        users.push(...(await this.waitFollowing(graphqlResponse)))
      } catch (error) {
        this.logger.error('⚠️ Failed wait following', error as Error)
        break
      }
    }

    clearInterval(scrollInterval)
    await page.close()

    Utils.send<GetUserFollowingResponse>(reply, users)
  }

  async routeGetUserFollowers(
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

    const graphqlResponse = new GraphQLResponse(page, 'Followers')
    await page.goto(`https://twitter.com/${screenName}/followers`, {
      waitUntil: 'networkidle2',
    })

    const scrollInterval = setInterval(async () => {
      await Utils.pageScroll(page)
    }, 1000)

    const users = []
    while (true) {
      try {
        users.push(...(await this.waitFollowing(graphqlResponse)))
      } catch (error) {
        this.logger.error('⚠️ Failed wait following', error as Error)
        break
      }
    }

    clearInterval(scrollInterval)
    await page.close()

    Utils.send<GetUserFollowersResponse>(reply, users)
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

  waitFollowing(
    graphqlResponse: GraphQLResponse<'Following' | 'Followers'>
  ): Promise<User[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('TIMEOUT'))
      }, 10_000)
      const interval = setInterval(async () => {
        const response = graphqlResponse.shiftResponse()
        if (!response) {
          return
        }

        const users = this.getFollowUser(response)
        if (users.length > 0) {
          clearInterval(interval)
          resolve(users)
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

  getFollowUser(
    response: GraphQLFollowingResponse | GraphQLFollowersResponse
  ): User[] {
    const result = response.data.user.result.timeline.timeline
      .instructions as CustomGraphQLFollow[]
    return (
      Utils.filterUndefined(
        Utils.filterUndefined(
          result
            .filter((instruction) => instruction.type === 'TimelineAddEntries')
            .flatMap((instruction) => instruction.entries)
        )
          .filter((entry) => entry.entryId.startsWith('user-'))
          .flatMap((entry) => entry.content.itemContent?.user_results.result)
      ) as CustomGraphQLFollowUser[]
    ).map((user) => {
      return this.createUserObject(user)
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

  createUserObject(user: CustomGraphQLFollowUser): User {
    if (user.id === undefined) {
      throw new Error('Failed to get user id')
    }
    return {
      id: Number(user.id),
      id_str: user.id,
      ...user.legacy,
      // @ts-ignore
      following: undefined,
      followed_by: undefined,
      follow_request_sent: undefined,
      muting: undefined,
      blocking: undefined,
      blocked_by: undefined,
    }
  }
}
