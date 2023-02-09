import { BaseRouter } from '@/lib/base-router'
import { GraphQLResponse } from '@/lib/graphql-response'
import { getWrapper } from '@/lib/puppeteer-wrapper.class'
import { Utils } from '@/lib/utils'
import { GetTweetResponse } from '@/models/endpoints/tweets'
import { CustomGraphQLTweetDetail } from '@/models/response/custom/custom-graphql-tweet-detail'
import { GraphQLTweetDetailResponse } from '@/models/response/graphql/tweet-detail'
import { FastifyReply, FastifyRequest } from 'fastify'
import { Status } from 'twitter-d'

export class TweetsRouter extends BaseRouter {
  init(): void {
    this.fastify.register(
      (fastify, _, done) => {
        fastify.get('/:tweet_id', this.routeGetTweet.bind(this))
        fastify.post('/:tweet_id/retweet', this.routePostRetweet.bind(this))
        fastify.delete('/:tweet_id/retweet', this.routeDeleteRetweet.bind(this))
        fastify.post('/:tweet_id/like', this.routePostLike.bind(this))
        fastify.delete('/:tweet_id/like', this.routeDeleteLike.bind(this))
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

  async routePostRetweet(
    request: FastifyRequest<{
      Params: { tweet_id: string }
    }>,
    reply: FastifyReply
  ): Promise<void> {
    const tweetId = request.params.tweet_id

    const account = request.account
    if (!account) {
      reply.code(401).send({
        message: 'Unauthorized',
      })
      return
    }
    const wrapper = await getWrapper({
      headless: true,
      user: account.username,
      auth: {
        password: account.password,
        authCodeSecret: account.authCodeSecret,
      },
    })
    const page = await wrapper.newPage()
    const url = `https://twitter.com/i/status/${tweetId}`
    await page.goto(url, { waitUntil: 'networkidle2' })

    const result = await Promise.race([
      page
        .waitForSelector('div[role="button"][data-testid="retweet"]', {
          timeout: 5000,
        })
        .then((element) => element?.click())
        .then(() => 'RETWEETED')
        .catch(() => null),
      page
        .waitForSelector('div[role="button"][data-testid="unretweet"]', {
          timeout: 5000,
        })
        .then((element) => element?.click())
        .then(() => 'ALREADY_RETWEETED')
        .catch(() => null),
    ])

    if (result === 'RETWEETED') {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      await page
        .waitForSelector('div[role="menuitem"][data-testid="retweetConfirm"]')
        .then((element) => element?.click())
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }

    await page.close()

    if (result === 'ALREADY_RETWEETED') {
      reply.code(409).send({
        message: 'Already retweeted',
      })
      return
    }

    reply.code(204).send()
  }

  async routeDeleteRetweet(
    request: FastifyRequest<{
      Params: { tweet_id: string }
    }>,
    reply: FastifyReply
  ): Promise<void> {
    const tweetId = request.params.tweet_id

    const account = request.account
    if (!account) {
      reply.code(401).send({
        message: 'Unauthorized',
      })
      return
    }
    const wrapper = await getWrapper({
      headless: true,
      user: account.username,
      auth: {
        password: account.password,
        authCodeSecret: account.authCodeSecret,
      },
    })
    const page = await wrapper.newPage()
    const url = `https://twitter.com/i/status/${tweetId}`
    await page.goto(url, { waitUntil: 'networkidle2' })

    const result = await Promise.race([
      page
        .waitForSelector('div[role="button"][data-testid="retweet"]', {
          timeout: 5000,
        })
        .then((element) => element?.click())
        .then(() => 'ALREADY_UNRETWEETED')
        .catch(() => null),
      page
        .waitForSelector('div[role="button"][data-testid="unretweet"]', {
          timeout: 5000,
        })
        .then((element) => element?.click())
        .then(() => 'UNRETWEETED')
        .catch(() => null),
    ])

    if (result === 'UNRETWEETED') {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      await page
        .waitForSelector('div[role="menuitem"][data-testid="unretweetConfirm"]')
        .then((element) => element?.click())
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }

    await page.close()

    if (result === 'ALREADY_UNRETWEETED') {
      reply.code(409).send({
        message: 'Already unretweeted',
      })
      return
    }

    reply.code(204).send()
  }

  async routePostLike(
    request: FastifyRequest<{
      Params: { tweet_id: string }
    }>,
    reply: FastifyReply
  ): Promise<void> {
    const tweetId = request.params.tweet_id

    const account = request.account
    if (!account) {
      reply.code(401).send({
        message: 'Unauthorized',
      })
      return
    }
    const wrapper = await getWrapper({
      headless: true,
      user: account.username,
      auth: {
        password: account.password,
        authCodeSecret: account.authCodeSecret,
      },
    })
    const page = await wrapper.newPage()
    const url = `https://twitter.com/i/status/${tweetId}`
    await page.goto(url, { waitUntil: 'networkidle2' })

    const result = await Promise.race([
      page
        .waitForSelector('div[role="button"][data-testid="like"]', {
          timeout: 5000,
        })
        .then((element) => element?.click())
        .then(() => 'LIKED')
        .catch(() => null),
      page
        .waitForSelector('div[role="button"][data-testid="unlike"]', {
          timeout: 5000,
        })
        .then((element) => element?.click())
        .then(() => 'ALREADY_LIKED')
        .catch(() => null),
    ])
    await page.close()
    await wrapper.close()

    if (result === 'ALREADY_LIKED') {
      reply.code(409).send({
        message: 'Already liked',
      })
      return
    }

    reply.code(204).send()
  }

  async routeDeleteLike(
    request: FastifyRequest<{
      Params: { tweet_id: string }
    }>,
    reply: FastifyReply
  ): Promise<void> {
    const tweetId = request.params.tweet_id

    const account = request.account
    if (!account) {
      reply.code(401).send({
        message: 'Unauthorized',
      })
      return
    }
    const wrapper = await getWrapper({
      headless: true,
      user: account.username,
      auth: {
        password: account.password,
        authCodeSecret: account.authCodeSecret,
      },
    })
    const page = await wrapper.newPage()
    const url = `https://twitter.com/i/status/${tweetId}`
    await page.goto(url, { waitUntil: 'networkidle2' })

    const result = await Promise.race([
      page
        .waitForSelector('div[role="button"][data-testid="like"]', {
          timeout: 5000,
        })
        .then((element) => element?.click())
        .then(() => 'ALREADY_UNLIKED')
        .catch(() => null),
      page
        .waitForSelector('div[role="button"][data-testid="unlike"]', {
          timeout: 5000,
        })
        .then((element) => element?.click())
        .then(() => 'UNLIKED')
        .catch(() => null),
    ])
    await page.close()

    if (result === 'ALREADY_UNLIKED') {
      reply.code(409).send({
        message: 'Already unliked',
      })
      return
    }

    reply.code(204).send()
  }

  getTweetDetail(
    response: GraphQLTweetDetailResponse
  ): CustomGraphQLTweetDetail {
    if (!response.data.threaded_conversation_with_injections_v2) {
      throw new Error('Failed to get threaded_conversation_with_injections_v2')
    }

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
      // @ts-ignore
      entities: legacy.entities,
    }
  }
}
