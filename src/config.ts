import fs from 'node:fs'

export const PATH = {
  config: process.env.CONFIG_PATH || 'data/config.json',
}

export interface Configuration {
  twitter: {
    username: string
    password?: string
    authCodeSecret?: string
  }
}

export function loadConfig(): Configuration {
  if (!fs.existsSync(PATH.config)) {
    throw new Error('Config file not found')
  }
  const fileConfig = fs.existsSync(PATH.config)
    ? (JSON.parse(fs.readFileSync(PATH.config, 'utf8')) as Configuration)
    : {
        twitter: {
          username: '',
        },
      }

  if (!process.env.TWITTER_USERNAME && !fileConfig.twitter.username) {
    throw new Error('Twitter username is not set. Please configure it.')
  }

  return {
    twitter: {
      username: process.env.TWITTER_USERNAME || fileConfig.twitter.username,
      password: process.env.TWITTER_PASSWORD || fileConfig.twitter.password,
      authCodeSecret:
        process.env.TWITTER_AUTHCODE_SECRET ||
        fileConfig.twitter.authCodeSecret,
    },
  }
}
