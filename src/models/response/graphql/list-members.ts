export interface GraphQLListMembersResponse {
  data: {
    list: {
      members_timeline: {
        timeline: {
          instructions: {
            type: string
            direction?: string
            entries?: {
              entryId: string
              sortIndex: string
              content: {
                entryType: string
                __typename: string
                itemContent?: {
                  itemType: string
                  __typename: string
                  user_results: {
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
                            urls: {
                              display_url: string
                              expanded_url: string
                              url: string
                              indices: number[]
                            }[]
                          }
                          url?: {
                            urls: {
                              display_url: string
                              expanded_url: string
                              url: string
                              indices: number[]
                            }[]
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
                        profile_banner_extensions?: {
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
                        profile_banner_url?: string
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
                        url?: string
                        verified: boolean
                        want_retweets: boolean
                        withheld_in_countries: unknown[]
                      }
                      has_nft_avatar: boolean
                      super_follow_eligible: boolean
                      super_followed_by: boolean
                      super_following: boolean
                      smart_blocked_by: boolean
                      smart_blocking: boolean
                      business_account: {}
                      professional?: {
                        rest_id: string
                        professional_type: string
                        category: {
                          id: number
                          name: string
                          icon_name: string
                        }[]
                      }
                    }
                  }
                  userDisplayType: string
                }
                clientEventInfo?: {
                  component: string
                  element: string
                }
                value?: string
                cursorType?: string
              }
            }[]
          }[]
        }
      }
    }
  }
}
