import fs from 'node:fs'

export const PATH = {
  config: process.env.CONFIG_PATH || 'data/config.json',
  accounts: process.env.ACCOUNTS_PATH || 'data/accounts.json',
}

export interface Account {
  username: string
  password?: string
  authCodeSecret?: string
  basicUsername: string
  basicPassword: string
}

export interface Configuration {
  twitter: {
    username: string
    password?: string
    authCodeSecret?: string
    basicUsername: string
    basicPassword: string
  }
  accounts?: Account[]
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
          password: undefined,
          authCodeSecret: undefined,
          basicUsername: '',
          basicPassword: '',
        },
      }

  if (!process.env.TWITTER_USERNAME && !fileConfig.twitter.username) {
    throw new Error('Twitter username is not set. Please configure it.')
  }
  if (!process.env.BASIC_USERNAME && !fileConfig.twitter.basicUsername) {
    throw new Error('Basic username is not set. Please configure it.')
  }
  if (!process.env.BASIC_PASSWORD && !fileConfig.twitter.basicPassword) {
    throw new Error('Basic password is not set. Please configure it.')
  }

  return {
    twitter: {
      username: process.env.TWITTER_USERNAME || fileConfig.twitter.username,
      password: process.env.TWITTER_PASSWORD || fileConfig.twitter.password,
      authCodeSecret:
        process.env.TWITTER_AUTHCODE_SECRET ||
        fileConfig.twitter.authCodeSecret,
      basicUsername:
        process.env.TWITTER_BASIC_USERNAME || fileConfig.twitter.basicUsername,
      basicPassword:
        process.env.TWITTER_BASIC_PASSWORD || fileConfig.twitter.basicPassword,
    },
    accounts: fileConfig.accounts,
  }
}
