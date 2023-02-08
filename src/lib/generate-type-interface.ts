import fs from 'node:fs'
import { createCompoundSchema } from 'genson-js'
import { compile } from 'json-schema-to-typescript'
import { Logger } from '@/lib/logger'
import { dirname } from 'node:path'
import { Utils } from './utils'
import { GraphQLTweetDetailResponse } from '@/models/response/graphql/tweet-detail'
import { GraphQLUserTweetsResponse } from '@/models/response/graphql/user-tweets'
import { GraphQLListLatestTweetsTimelineResponse } from '@/models/response/graphql/list-latest-tweets-timeline'

async function getJSONFiles(directory: string) {
  const files = fs.readdirSync(directory)
  const results: string[] = []
  for (const file of files) {
    const path = directory + '/' + file
    const stat = fs.statSync(path)
    if (stat.isDirectory()) {
      results.push(...(await getJSONFiles(path)))
    }
    if (stat.isFile() && path.endsWith('.json')) {
      results.push(path)
    }
  }
  return results
}

async function generateTypeInterface(
  directory: string,
  type: string,
  fromDirectory: string
) {
  const logger = Logger.configure('generateTypeInterface')
  logger.info(`✨ generateTypeInterface(${type})`)

  const hyphenType = type
    .replace(/(GraphQL|Rest)/g, '')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase()
  if (!fs.existsSync(fromDirectory)) {
    logger.warn(`❌ Not found fromDir: ${fromDirectory}`)
    return
  }

  const files = await getJSONFiles(fromDirectory)
  const data = files.map((f) => JSON.parse(fs.readFileSync(f, 'utf8')))

  if (data.length === 0) {
    logger.warn(`❌ Not found json files`)
    return
  }

  const schema = createCompoundSchema(data)

  const schemaPath = `/data/schema/${directory}/${type.toLocaleLowerCase()}.json`
  fs.mkdirSync(dirname(schemaPath), { recursive: true })
  const interfacePath = `/models/response/${directory}/${hyphenType}.ts`
  fs.mkdirSync(dirname(interfacePath), { recursive: true })

  fs.writeFileSync(schemaPath, JSON.stringify(schema, null, 2))
  const ts = await compile(schema, `${type}Response`, {
    bannerComment: '',
    strictIndexSignatures: true,
    additionalProperties: false,
  })
  fs.writeFileSync(interfacePath, ts)
  logger.info(`📝 ${interfacePath}`)
}

async function generateCustomUserTweets() {
  const logger = Logger.configure('generateCustomUserTweets')
  logger.info(`✨ generateCustomUserTweets()`)

  const files = await getJSONFiles('/data/debug/graphql/UserTweets')
  const data = files
    .map((f) => JSON.parse(fs.readFileSync(f, 'utf8')))
    .flatMap((d: GraphQLUserTweetsResponse) =>
      Utils.filterUndefined(
        Utils.filterUndefined(
          d.data.user.result.timeline_v2.timeline.instructions
            .filter((instruction) => instruction.type === 'TimelineAddEntries')
            .flatMap((instruction) => instruction.entries)
        )
          .filter((entry) => entry.entryId.startsWith('tweet-'))
          .flatMap((entry) => entry.content.itemContent?.tweet_results.result)
      )
    )

  if (data.length === 0) {
    logger.warn(`❌ Not found json files`)
    return
  }

  const schema = createCompoundSchema(data)

  const schemaPath = `/data/schema/custom/custom-graphql-user-tweet.json`
  fs.mkdirSync(dirname(schemaPath), { recursive: true })
  const interfacePath = `/models/response/custom/custom-graphql-user-tweet.ts`
  fs.mkdirSync(dirname(interfacePath), { recursive: true })

  fs.writeFileSync(schemaPath, JSON.stringify(schema, null, 2))
  const ts = await compile(schema, `CustomGraphQLUserTweet`, {
    bannerComment: '',
    strictIndexSignatures: true,
    additionalProperties: false,
  })
  fs.writeFileSync(interfacePath, ts)
  logger.info(`📝 ${interfacePath}`)
}

async function generateCustomListTweets() {
  const logger = Logger.configure('generateCustomListTweets')
  logger.info(`✨ generateCustomListTweets()`)

  const files = await getJSONFiles(
    '/data/debug/graphql/ListLatestTweetsTimeline'
  )
  const data = files
    .map((f) => JSON.parse(fs.readFileSync(f, 'utf8')))
    .flatMap((d: GraphQLListLatestTweetsTimelineResponse) =>
      Utils.filterUndefined(
        Utils.filterUndefined(
          d.data.list.tweets_timeline.timeline.instructions
            .filter((instruction) => instruction.type === 'TimelineAddEntries')
            .flatMap((instruction) => instruction.entries)
        )
          .filter((entry) => entry.entryId.startsWith('tweet-'))
          .flatMap((entry) => entry.content.itemContent?.tweet_results.result)
      )
    )

  if (data.length === 0) {
    logger.warn(`❌ Not found json files`)
    return
  }

  const schema = createCompoundSchema(data)

  const schemaPath = `/data/schema/custom/custom-graphql-list-tweets.json`
  fs.mkdirSync(dirname(schemaPath), { recursive: true })
  const interfacePath = `/models/response/custom/custom-graphql-list-tweets.ts`
  fs.mkdirSync(dirname(interfacePath), { recursive: true })

  fs.writeFileSync(schemaPath, JSON.stringify(schema, null, 2))
  const ts = await compile(schema, `CustomGraphQLListTweet`, {
    bannerComment: '',
    strictIndexSignatures: true,
    additionalProperties: false,
  })
  fs.writeFileSync(interfacePath, ts)
  logger.info(`📝 ${interfacePath}`)
}

async function generateCustomTweetDetail() {
  const logger = Logger.configure('generateCustomTweetDetail')
  logger.info(`✨ generateCustomTweetDetail()`)

  const files = await getJSONFiles('/data/debug/graphql/TweetDetail')
  const data = files
    .map((f) => JSON.parse(fs.readFileSync(f, 'utf8')))
    .filter((response: GraphQLTweetDetailResponse) => {
      if (!response.data.threaded_conversation_with_injections_v2) {
        return false
      }

      const entries =
        response.data.threaded_conversation_with_injections_v2.instructions[0]
          .entries
      if (!entries) {
        return false
      }

      const tweet = entries.find((entry: { entryId: string }) =>
        entry.entryId.startsWith('tweet-')
      )
      if (!tweet) {
        return false
      }

      if (!tweet.content.itemContent) {
        return false
      }

      if (!tweet.content.itemContent.tweet_results) {
        return false
      }

      const tweetResult = tweet.content.itemContent.tweet_results.result
      if (!tweetResult) {
        return false
      }

      return true
    })
    .flatMap((response) => {
      const tweet =
        response.data.threaded_conversation_with_injections_v2.instructions[0].entries.find(
          (entry: { entryId: string }) => entry.entryId.startsWith('tweet-')
        )
      if (!tweet) {
        throw new Error('Not found tweet')
      }

      const tweetResult = tweet.content.itemContent?.tweet_results.result
      if (!tweetResult) {
        throw new Error('Not found tweetResult')
      }

      return tweetResult
    })

  if (data.length === 0) {
    logger.warn(`❌ Not found json files`)
    return
  }

  const schema = createCompoundSchema(data)

  const schemaPath = `/data/schema/custom/custom-graphql-tweet-detail.json`
  fs.mkdirSync(dirname(schemaPath), { recursive: true })
  const interfacePath = `/models/response/custom/custom-graphql-tweet-detail.ts`
  fs.mkdirSync(dirname(interfacePath), { recursive: true })

  fs.writeFileSync(schemaPath, JSON.stringify(schema, null, 2))
  const ts = await compile(schema, `CustomGraphQLTweetDetail`, {
    bannerComment: '',
    strictIndexSignatures: true,
    additionalProperties: false,
  })
  fs.writeFileSync(interfacePath, ts)
  logger.info(`📝 ${interfacePath}`)
}

export async function generateTypeInterfaces() {
  const promises = []

  if (fs.existsSync('/data/debug/graphql/')) {
    const graphqlDirectories = fs.readdirSync('/data/debug/graphql/')
    for (const directory of graphqlDirectories) {
      promises.push(
        generateTypeInterface(
          'graphql',
          `GraphQL${directory}`,
          `/data/debug/graphql/${directory}`
        )
      )
    }

    await generateCustomUserTweets()
    await generateCustomListTweets()
    await generateCustomTweetDetail()
  }

  if (fs.existsSync('/data/debug/rest/')) {
    const restDirectories = fs.readdirSync('/data/debug/rest/')
    for (const directory of restDirectories) {
      promises.push(
        generateTypeInterface(
          'rest',
          `Rest${directory}`,
          `/data/debug/rest/${directory}`
        )
      )
    }
  }

  await Promise.all(promises)
}
