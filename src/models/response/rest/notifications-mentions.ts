export interface RestNotificationsMentionsResponse {
  globalObjects: {
    users?: {
      '286048624': {
        id: number
        id_str: string
        name: string
        screen_name: string
        location: string
        description: string
        url: string
        entities: {
          url: {
            urls: {
              url: string
              expanded_url: string
              display_url: string
              indices: number[]
            }[]
          }
          description: {
            urls: unknown[]
          }
        }
        protected: boolean
        followers_count: number
        friends_count: number
        listed_count: number
        created_at: string
        favourites_count: number
        utc_offset: null
        time_zone: null
        geo_enabled: boolean
        verified: boolean
        statuses_count: number
        lang: null
        contributors_enabled: boolean
        is_translator: boolean
        is_translation_enabled: boolean
        profile_background_color: string
        profile_background_image_url: string
        profile_background_image_url_https: string
        profile_background_tile: boolean
        profile_image_url: string
        profile_image_url_https: string
        profile_banner_url: string
        profile_link_color: string
        profile_sidebar_border_color: string
        profile_sidebar_fill_color: string
        profile_text_color: string
        profile_use_background_image: boolean
        default_profile: boolean
        default_profile_image: boolean
        following: boolean
        follow_request_sent: null
        notifications: null
        blocking: boolean
        blocked_by: boolean
        want_retweets: boolean
        profile_interstitial_type: string
        translator_type: string
        withheld_in_countries: unknown[]
        followed_by: boolean
        ext_is_blue_verified: boolean
        ext_highlighted_label: {}
      }
      '1663273848': {
        id: number
        id_str: string
        name: string
        screen_name: string
        location: null
        description: string
        url: null
        entities: {
          description: {
            urls: unknown[]
          }
        }
        protected: boolean
        followers_count: number
        friends_count: number
        listed_count: number
        created_at: string
        favourites_count: number
        utc_offset: null
        time_zone: null
        geo_enabled: boolean
        verified: boolean
        statuses_count: number
        lang: null
        contributors_enabled: boolean
        is_translator: boolean
        is_translation_enabled: boolean
        profile_background_color: string
        profile_background_image_url: string
        profile_background_image_url_https: string
        profile_background_tile: boolean
        profile_image_url: string
        profile_image_url_https: string
        profile_banner_url: string
        profile_link_color: string
        profile_sidebar_border_color: string
        profile_sidebar_fill_color: string
        profile_text_color: string
        profile_use_background_image: boolean
        default_profile: boolean
        default_profile_image: boolean
        following: null
        follow_request_sent: null
        notifications: null
        blocking: null
        translator_type: string
        withheld_in_countries: unknown[]
        ext_is_blue_verified: boolean
      }
    }
    tweets?: {
      '1240654430799724544'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1240292347528671233'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1237031594541453312'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1236668263137861632'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1239567713158066177'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1238480018725957633'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1237393795940900868'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1238843098207150083'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1241017486377512960'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1235944112810897408'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1238118326460502017'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1239205288126722049'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1240949614804516864'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1237756277746307077'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1239929652371533826'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1233406701782519808'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1234494077225144320'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1235219079830503426'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1235581734600597504'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1233769124427251713'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1233045013832974336'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1234856851520573446'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1232682715092094977'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1234132097528291328'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1234425748506791937'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1230145714337898496'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1229420632594534401'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1228334191068110849'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1226884150604337152'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1231233241153069056'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1227971343074746368'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1232320278035779584'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1227609227075547136'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1230508020230053888'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1229058410479382528'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1226521611802562563'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1231595032521478145'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1226159448848101376'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1228696200364183553'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1230870860170506240'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1225434934594007040'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1225796614905708544'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1227246314133450755'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1231958159670906880'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1229783381556236288'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1221810965311655936'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1225071640251260928'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1224710622560051200'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1222897774896635905'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1222535230457647104'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1223260356799127553'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1223985078885183488'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1222173494730870784'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1223622682874241025'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
      '1224347106594316288'?: {
        created_at: string
        id: number
        id_str: string
        full_text: string
        truncated: boolean
        display_text_range: number[]
        entities: {
          hashtags: unknown[]
          symbols: unknown[]
          user_mentions: {
            screen_name: string
            name: string
            id: number
            id_str: string
            indices: number[]
          }[]
          urls: unknown[]
        }
        source: string
        in_reply_to_status_id: null
        in_reply_to_status_id_str: null
        in_reply_to_user_id: number
        in_reply_to_user_id_str: string
        in_reply_to_screen_name: string
        user_id: number
        user_id_str: string
        geo: null
        coordinates: null
        place: null
        contributors: null
        is_quote_status: boolean
        retweet_count: number
        favorite_count: number
        reply_count: number
        quote_count: number
        conversation_id: number
        conversation_id_str: string
        conversation_muted: boolean
        favorited: boolean
        retweeted: boolean
        lang: string
        ext: {
          superFollowMetadata: {
            r: {
              ok: {}
            }
            ttl: number
          }
          unmentionInfo: {
            r: {
              ok: {}
            }
            ttl: number
          }
        }
      }
    }
  }
  timeline: {
    id: string
    instructions: {
      clearCache?: {}
      addEntries?: {
        entries: {
          entryId: string
          sortIndex: string
          content: {
            operation?: {
              cursor: {
                value: string
                cursorType: string
              }
            }
            item?: {
              content: {
                tweet: {
                  id: string
                  displayType: string
                }
              }
              clientEventInfo: {
                component: string
                element: string
                details: {
                  notificationDetails: {
                    impressionId: string
                    metadata: string
                  }
                }
              }
            }
          }
        }[]
      }
      clearEntriesUnreadState?: {}
      markEntriesUnreadGreaterThanSortIndex?: {
        sortIndex: string
      }
    }[]
  }
}
