export interface GraphQLAudioSpaceByIdResponse {
  data: {
    audioSpace: {
      metadata: {
        rest_id: string
        state: string
        title: string
        media_key: string
        created_at: number
        started_at: number
        ended_at: string
        updated_at: number
        disallow_join: boolean
        narrow_cast_space_type: number
        is_employee_only: boolean
        is_locked: boolean
        is_space_available_for_replay: boolean
        is_space_available_for_clipping: boolean
        conversation_controls: number
        total_replay_watched: number
        total_live_listeners: number
        creator_results: {
          result: {
            __typename: string
            id: string
            rest_id: string
            affiliates_highlighted_label: {}
            has_graduated_access: boolean
            is_blue_verified: boolean
            legacy: {
              blocked_by: boolean
              blocking: boolean
              follow_request_sent: boolean
              followed_by: boolean
              following: boolean
              muting: boolean
              notifications: boolean
              protected: boolean
              can_dm: boolean
              can_media_tag: boolean
              created_at: string
              default_profile: boolean
              default_profile_image: boolean
              description: string
              entities: {
                description: {
                  urls: unknown[]
                }
              }
              fast_followers_count: number
              favourites_count: number
              followers_count: number
              friends_count: number
              has_custom_timelines: boolean
              is_translator: boolean
              listed_count: number
              location: string
              media_count: number
              name: string
              normal_followers_count: number
              pinned_tweet_ids_str: string[]
              possibly_sensitive: boolean
              profile_banner_extensions: {
                mediaColor: {
                  r: {
                    ok: {
                      palette: {
                        percentage: number
                        rgb: {
                          blue: number
                          green: number
                          red: number
                        }
                      }[]
                    }
                  }
                }
              }
              profile_banner_url: string
              profile_image_extensions: {
                mediaColor: {
                  r: {
                    ok: {
                      palette: {
                        percentage: number
                        rgb: {
                          blue: number
                          green: number
                          red: number
                        }
                      }[]
                    }
                  }
                }
              }
              profile_image_url_https: string
              profile_interstitial_type: string
              screen_name: string
              statuses_count: number
              translator_type: string
              verified: boolean
              want_retweets: boolean
              withheld_in_countries: unknown[]
            }
            has_nft_avatar: boolean
            super_follow_eligible: boolean
            super_followed_by: boolean
            super_following: boolean
            business_account: {}
          }
        }
      }
      is_subscribed: boolean
      sharings: {
        items: unknown[]
        slice_info: {}
      }
      participants: {
        total: number
        admins: {
          periscope_user_id: string
          start: number
          twitter_screen_name: string
          display_name: string
          avatar_url: string
          is_verified: boolean
          is_muted_by_admin: boolean
          is_muted_by_guest: boolean
          user_results: {
            rest_id: string
            result: {
              __typename: string
              identity_profile_labels_highlighted_label: {}
              has_nft_avatar: boolean
              is_blue_verified: boolean
              legacy: {}
            }
          }
        }[]
        speakers: unknown[]
        listeners: {
          periscope_user_id: string
          twitter_screen_name: string
          display_name: string
          avatar_url: string
          is_verified: boolean
          user_results: {
            rest_id: string
            result: {
              __typename: string
              identity_profile_labels_highlighted_label: {}
              has_nft_avatar: boolean
              is_blue_verified: boolean
              legacy: {}
            }
          }
        }[]
      }
    }
  }
}
