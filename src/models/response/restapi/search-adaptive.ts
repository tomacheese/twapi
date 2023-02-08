import { CustomRestSearchAdaptiveTweet } from '../custom/custom-rest-search-adaptive-tweet'

export interface RestSearchAdaptiveResponse {
  globalObjects: {
    tweets: {
      [key: string]: CustomRestSearchAdaptiveTweet
    }
  }
}
