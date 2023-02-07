export interface CustomGraphQLUserTweetsResponse {
  __typename: string
  rest_id?: string
  core?: {
    user_results: {
      result: {
        __typename: string
        id: string
        rest_id: string
        affiliates_highlighted_label: {}
        has_graduated_access: boolean
        has_nft_avatar: boolean
        is_blue_verified: boolean
        legacy: {
          blocked_by: boolean
          blocking: boolean
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
          follow_request_sent: boolean
          followed_by: boolean
          followers_count: number
          following: boolean
          friends_count: number
          has_custom_timelines: boolean
          is_translator: boolean
          listed_count: number
          location: string
          media_count: number
          muting: boolean
          name: string
          needs_phone_verification?: boolean
          normal_followers_count: number
          notifications: boolean
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
          protected: boolean
          screen_name: string
          statuses_count: number
          translator_type: string
          verified: boolean
          want_retweets: boolean
          withheld_in_countries: unknown[]
          url?: string
        }
        super_follow_eligible: boolean
        super_followed_by: boolean
        super_following: boolean
      }
    }
  }
  unmention_data?: {}
  edit_control?: {
    edit_tweet_ids: string[]
    editable_until_msecs: string
    is_edit_eligible: boolean
    edits_remaining: string
  }
  edit_perspective?: {
    favorited: boolean
    retweeted: boolean
  }
  is_translatable?: boolean
  views?: {
    state: string
    count?: string
  }
  source?: string
  legacy?: {
    created_at: string
    conversation_id_str: string
    display_text_range: number[]
    entities: {
      user_mentions: {
        id_str: string
        name: string
        screen_name: string
        indices: number[]
      }[]
      urls: {
        display_url: string
        expanded_url: string
        url: string
        indices: number[]
      }[]
      hashtags: {
        indices: number[]
        text: string
      }[]
      symbols: unknown[]
      media?: {
        display_url: string
        expanded_url: string
        id_str: string
        indices: number[]
        media_url_https: string
        source_status_id_str?: string
        source_user_id_str?: string
        type: string
        url: string
        features: {
          large: {
            faces: {
              x: number
              y: number
              h: number
              w: number
            }[]
          }
          medium: {
            faces: {
              x: number
              y: number
              h: number
              w: number
            }[]
          }
          small: {
            faces: {
              x: number
              y: number
              h: number
              w: number
            }[]
          }
          orig: {
            faces: {
              x: number
              y: number
              h: number
              w: number
            }[]
          }
        }
        sizes: {
          large: {
            h: number
            w: number
            resize: string
          }
          medium: {
            h: number
            w: number
            resize: string
          }
          small: {
            h: number
            w: number
            resize: string
          }
          thumb: {
            h: number
            w: number
            resize: string
          }
        }
        original_info: {
          height: number
          width: number
          focus_rects: {
            x: number
            y: number
            w: number
            h: number
          }[]
        }
      }[]
    }
    favorite_count: number
    favorited: boolean
    full_text: string
    is_quote_status: boolean
    lang: string
    quote_count: number
    reply_count: number
    retweet_count: number
    retweeted: boolean
    user_id_str: string
    id_str: string
    possibly_sensitive?: boolean
    possibly_sensitive_editable?: boolean
    retweeted_status_result?: {
      result: {
        __typename: string
        rest_id: string
        core: {
          user_results: {
            result: {
              __typename: string
              id: string
              rest_id: string
              affiliates_highlighted_label: {
                label?: {
                  url: {
                    url: string
                    urlType: string
                  }
                  badge: {
                    url: string
                  }
                  description: string
                  userLabelType: string
                  userLabelDisplayType: string
                }
              }
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
                url?: string
                verified_type?: string
              }
              has_nft_avatar: boolean
              super_follow_eligible: boolean
              super_followed_by: boolean
              super_following: boolean
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
        }
        unmention_data: {}
        edit_control: {
          edit_tweet_ids: string[]
          editable_until_msecs: string
          is_edit_eligible: boolean
          edits_remaining: string
        }
        edit_perspective: {
          favorited: boolean
          retweeted: boolean
        }
        is_translatable: boolean
        views: {
          state: string
          count?: string
        }
        source: string
        legacy: {
          created_at: string
          conversation_id_str: string
          display_text_range: number[]
          entities: {
            media?: {
              display_url: string
              expanded_url: string
              id_str: string
              indices: number[]
              media_url_https: string
              type: string
              url: string
              features: {
                large: {
                  faces: {
                    x: number
                    y: number
                    h: number
                    w: number
                  }[]
                }
                medium: {
                  faces: {
                    x: number
                    y: number
                    h: number
                    w: number
                  }[]
                }
                small: {
                  faces: {
                    x: number
                    y: number
                    h: number
                    w: number
                  }[]
                }
                orig: {
                  faces: {
                    x: number
                    y: number
                    h: number
                    w: number
                  }[]
                }
              }
              sizes: {
                large: {
                  h: number
                  w: number
                  resize: string
                }
                medium: {
                  h: number
                  w: number
                  resize: string
                }
                small: {
                  h: number
                  w: number
                  resize: string
                }
                thumb: {
                  h: number
                  w: number
                  resize: string
                }
              }
              original_info: {
                height: number
                width: number
                focus_rects: {
                  x: number
                  y: number
                  w: number
                  h: number
                }[]
              }
            }[]
            user_mentions: unknown[]
            urls: {
              display_url: string
              expanded_url: string
              url: string
              indices: number[]
            }[]
            hashtags: {
              indices: number[]
              text: string
            }[]
            symbols: unknown[]
          }
          extended_entities?: {
            media: {
              display_url: string
              expanded_url: string
              id_str: string
              indices: number[]
              media_key: string
              media_url_https: string
              type: string
              url: string
              ext_media_color: {
                palette: {
                  percentage: number
                  rgb: {
                    blue: number
                    green: number
                    red: number
                  }
                }[]
              }
              ext_media_availability: {
                status: string
              }
              features: {
                large: {
                  faces: {
                    x: number
                    y: number
                    h: number
                    w: number
                  }[]
                }
                medium: {
                  faces: {
                    x: number
                    y: number
                    h: number
                    w: number
                  }[]
                }
                small: {
                  faces: {
                    x: number
                    y: number
                    h: number
                    w: number
                  }[]
                }
                orig: {
                  faces: {
                    x: number
                    y: number
                    h: number
                    w: number
                  }[]
                }
              }
              sizes: {
                large: {
                  h: number
                  w: number
                  resize: string
                }
                medium: {
                  h: number
                  w: number
                  resize: string
                }
                small: {
                  h: number
                  w: number
                  resize: string
                }
                thumb: {
                  h: number
                  w: number
                  resize: string
                }
              }
              original_info: {
                height: number
                width: number
                focus_rects: {
                  x: number
                  y: number
                  w: number
                  h: number
                }[]
              }
            }[]
          }
          favorite_count: number
          favorited: boolean
          full_text: string
          is_quote_status: boolean
          lang: string
          possibly_sensitive?: boolean
          possibly_sensitive_editable?: boolean
          quote_count: number
          reply_count: number
          retweet_count: number
          retweeted: boolean
          user_id_str: string
          id_str: string
          self_thread?: {
            id_str: string
          }
          quoted_status_id_str?: string
          quoted_status_permalink?: {
            url: string
            expanded: string
            display: string
          }
        }
        card?: {
          rest_id: string
          legacy: {
            binding_values: {
              key: string
              value: {
                string_value: string
                type: string
                scribe_key?: string
              }
            }[]
            card_platform: {
              platform: {
                audience: {
                  name: string
                }
                device: {
                  name: string
                  version: string
                }
              }
            }
            name: string
            url: string
            user_refs_results: unknown[]
          }
        }
        unified_card?: {
          card_fetch_state: string
        }
        quoted_status_result?: {
          result: {
            __typename: string
            rest_id: string
            core: {
              user_results: {
                result: {
                  __typename: string
                  id: string
                  rest_id: string
                  affiliates_highlighted_label: {
                    label: {
                      url: {
                        url: string
                        urlType: string
                      }
                      badge: {
                        url: string
                      }
                      description: string
                      userLabelType: string
                      userLabelDisplayType: string
                    }
                  }
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
                      url: {
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
                    pinned_tweet_ids_str: unknown[]
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
                    url: string
                    verified: boolean
                    verified_type: string
                    want_retweets: boolean
                    withheld_in_countries: unknown[]
                  }
                  has_nft_avatar: boolean
                  super_follow_eligible: boolean
                  super_followed_by: boolean
                  super_following: boolean
                }
              }
            }
            unmention_data: {}
            edit_control: {
              edit_tweet_ids: string[]
              editable_until_msecs: string
              is_edit_eligible: boolean
              edits_remaining: string
            }
            edit_perspective: {
              favorited: boolean
              retweeted: boolean
            }
            is_translatable: boolean
            views: {
              count: string
              state: string
            }
            source: string
            legacy: {
              created_at: string
              conversation_id_str: string
              display_text_range: number[]
              entities: {
                user_mentions: unknown[]
                urls: unknown[]
                hashtags: unknown[]
                symbols: unknown[]
              }
              favorite_count: number
              favorited: boolean
              full_text: string
              is_quote_status: boolean
              lang: string
              quote_count: number
              reply_count: number
              retweet_count: number
              retweeted: boolean
              user_id_str: string
              id_str: string
              self_thread: {
                id_str: string
              }
            }
          }
        }
      }
    }
    extended_entities?: {
      media: {
        display_url: string
        expanded_url: string
        id_str: string
        indices: number[]
        media_key: string
        media_url_https: string
        source_status_id_str?: string
        source_user_id_str?: string
        type: string
        url: string
        ext_media_color: {
          palette: {
            percentage: number
            rgb: {
              blue: number
              green: number
              red: number
            }
          }[]
        }
        ext_media_availability: {
          status: string
        }
        features: {
          large: {
            faces: {
              x: number
              y: number
              h: number
              w: number
            }[]
          }
          medium: {
            faces: {
              x: number
              y: number
              h: number
              w: number
            }[]
          }
          small: {
            faces: {
              x: number
              y: number
              h: number
              w: number
            }[]
          }
          orig: {
            faces: {
              x: number
              y: number
              h: number
              w: number
            }[]
          }
        }
        sizes: {
          large: {
            h: number
            w: number
            resize: string
          }
          medium: {
            h: number
            w: number
            resize: string
          }
          small: {
            h: number
            w: number
            resize: string
          }
          thumb: {
            h: number
            w: number
            resize: string
          }
        }
        original_info: {
          height: number
          width: number
          focus_rects: {
            x: number
            y: number
            w: number
            h: number
          }[]
        }
      }[]
    }
    quoted_status_id_str?: string
    quoted_status_permalink?: {
      url: string
      expanded: string
      display: string
    }
  }
  quick_promote_eligibility?: {
    eligibility: string
  }
  card?: {
    rest_id: string
    legacy: {
      binding_values: {
        key: string
        value: {
          image_value?: {
            height: number
            width: number
            url: string
          }
          type: string
          string_value?: string
          scribe_key?: string
          user_value?: {
            id_str: string
            path: unknown[]
          }
          image_color_value?: {
            palette: {
              rgb: {
                blue: number
                green: number
                red: number
              }
              percentage: number
            }[]
          }
        }
      }[]
      card_platform: {
        platform: {
          audience: {
            name: string
          }
          device: {
            name: string
            version: string
          }
        }
      }
      name: string
      url: string
      user_refs_results: {
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
              url: {
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
            url: string
            verified: boolean
            want_retweets: boolean
            withheld_in_countries: unknown[]
          }
          has_nft_avatar: boolean
          super_follow_eligible: boolean
          super_followed_by: boolean
          super_following: boolean
        }
      }[]
    }
  }
  unified_card?: {
    card_fetch_state: string
  }
  tweet?: {
    rest_id: string
    core: {
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
                urls: unknown[]
              }
              url: {
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
            url: string
            verified: boolean
            want_retweets: boolean
            withheld_in_countries: unknown[]
          }
          has_nft_avatar: boolean
          super_follow_eligible: boolean
          super_followed_by: boolean
          super_following: boolean
        }
      }
    }
    unmention_data: {}
    edit_control: {
      edit_tweet_ids: string[]
      editable_until_msecs: string
      is_edit_eligible: boolean
      edits_remaining: string
    }
    edit_perspective: {
      favorited: boolean
      retweeted: boolean
    }
    is_translatable: boolean
    views: {
      state: string
    }
    source: string
    legacy: {
      created_at: string
      conversation_control: {
        policy: string
        conversation_owner_results: {
          result: {
            __typename: string
            legacy: {
              screen_name: string
            }
          }
        }
      }
      conversation_id_str: string
      display_text_range: number[]
      entities: {
        user_mentions: {
          id_str: string
          name: string
          screen_name: string
          indices: number[]
        }[]
        urls: unknown[]
        hashtags: unknown[]
        symbols: unknown[]
      }
      favorite_count: number
      favorited: boolean
      full_text: string
      is_quote_status: boolean
      lang: string
      limited_actions: string
      quote_count: number
      reply_count: number
      retweet_count: number
      retweeted: boolean
      user_id_str: string
      id_str: string
      retweeted_status_result: {
        result: {
          __typename: string
          tweet: {
            rest_id: string
            core: {
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
                        urls: unknown[]
                      }
                      url: {
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
                    url: string
                    verified: boolean
                    want_retweets: boolean
                    withheld_in_countries: unknown[]
                  }
                  has_nft_avatar: boolean
                  super_follow_eligible: boolean
                  super_followed_by: boolean
                  super_following: boolean
                }
              }
            }
            unmention_data: {}
            edit_control: {
              edit_tweet_ids: string[]
              editable_until_msecs: string
              is_edit_eligible: boolean
              edits_remaining: string
            }
            edit_perspective: {
              favorited: boolean
              retweeted: boolean
            }
            is_translatable: boolean
            views: {
              count: string
              state: string
            }
            source: string
            legacy: {
              created_at: string
              conversation_control: {
                policy: string
                conversation_owner_results: {
                  result: {
                    __typename: string
                    legacy: {
                      screen_name: string
                    }
                  }
                }
              }
              conversation_id_str: string
              display_text_range: number[]
              entities: {
                user_mentions: unknown[]
                urls: unknown[]
                hashtags: unknown[]
                symbols: unknown[]
              }
              favorite_count: number
              favorited: boolean
              full_text: string
              is_quote_status: boolean
              lang: string
              limited_actions: string
              quote_count: number
              reply_count: number
              retweet_count: number
              retweeted: boolean
              user_id_str: string
              id_str: string
              self_thread: {
                id_str: string
              }
            }
          }
        }
      }
    }
    quick_promote_eligibility: {
      eligibility: string
    }
  }
}
