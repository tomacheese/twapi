export interface GraphQLHomeTimelineResponse {
  data: {
    home: {
      home_timeline_urt: {
        instructions: {
          type: string
          entries?: {
            entryId: string
            sortIndex: string
            content: {
              entryType: string
              __typename: string
              itemContent?: {
                itemType: string
                __typename: string
                tweet_results?: {
                  result: {
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
                            normal_followers_count: number
                            notifications: boolean
                            pinned_tweet_ids_str: string[]
                            possibly_sensitive: boolean
                            profile_banner_extensions?: {
                              mediaColor: {
                                r: {
                                  ok?: {
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
                                  ok?: {
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
                            url?: string
                            verified: boolean
                            want_retweets: boolean
                            withheld_in_countries: unknown[]
                            verified_type?: string
                          }
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
                      count?: string
                      state: string
                    }
                    source?: string
                    legacy?: {
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
                            large?: {
                              faces: {
                                x: number
                                y: number
                                h: number
                                w: number
                              }[]
                            }
                            medium?: {
                              faces: {
                                x: number
                                y: number
                                h: number
                                w: number
                              }[]
                            }
                            small?: {
                              faces: {
                                x: number
                                y: number
                                h: number
                                w: number
                              }[]
                            }
                            orig?: {
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
                            focus_rects?: {
                              x: number
                              y: number
                              w: number
                              h: number
                            }[]
                          }
                        }[]
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
                            large?: {
                              faces: {
                                x: number
                                y: number
                                h: number
                                w: number
                              }[]
                            }
                            medium?: {
                              faces: {
                                x: number
                                y: number
                                h: number
                                w: number
                              }[]
                            }
                            small?: {
                              faces: {
                                x: number
                                y: number
                                h: number
                                w: number
                              }[]
                            }
                            orig?: {
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
                            focus_rects?: {
                              x: number
                              y: number
                              w: number
                              h: number
                            }[]
                          }
                          additional_media_info?: {
                            title?: string
                            description?: string
                            call_to_actions?: {
                              visit_site: {
                                url: string
                              }
                            }
                            embeddable?: boolean
                            monetizable: boolean
                          }
                          mediaStats?: {
                            viewCount: number
                          }
                          video_info?: {
                            aspect_ratio: number[]
                            duration_millis: number
                            variants: {
                              bitrate?: number
                              content_type: string
                              url: string
                            }[]
                          }
                          ext_alt_text?: string
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
                      scopes?: {
                        followers: boolean
                      }
                      in_reply_to_screen_name?: string
                      in_reply_to_user_id_str?: string
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
                                  normal_followers_count: number
                                  notifications: boolean
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
                                  protected: boolean
                                  screen_name: string
                                  statuses_count: number
                                  translator_type: string
                                  verified: boolean
                                  want_retweets: boolean
                                  withheld_in_countries: unknown[]
                                  url?: string
                                }
                                professional?: {
                                  rest_id: string
                                  professional_type: string
                                  category: {
                                    id: number
                                    name: string
                                    icon_name: string
                                  }[]
                                }
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
                              user_mentions: {
                                id_str: string
                                name: string
                                screen_name: string
                                indices: number[]
                              }[]
                              urls: unknown[]
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
                                type: string
                                url: string
                                features: {
                                  large?: {
                                    faces: {
                                      x: number
                                      y: number
                                      h: number
                                      w: number
                                    }[]
                                  }
                                  medium?: {
                                    faces: {
                                      x: number
                                      y: number
                                      h: number
                                      w: number
                                    }[]
                                  }
                                  small?: {
                                    faces: {
                                      x: number
                                      y: number
                                      h: number
                                      w: number
                                    }[]
                                  }
                                  orig?: {
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
                                  focus_rects?: {
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
                                additional_media_info?: {
                                  monetizable: boolean
                                }
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
                                mediaStats?: {
                                  viewCount: number
                                }
                                ext_media_availability: {
                                  status: string
                                }
                                features: {
                                  large?: {
                                    faces: {
                                      x: number
                                      y: number
                                      h: number
                                      w: number
                                    }[]
                                  }
                                  medium?: {
                                    faces: {
                                      x: number
                                      y: number
                                      h: number
                                      w: number
                                    }[]
                                  }
                                  small?: {
                                    faces: {
                                      x: number
                                      y: number
                                      h: number
                                      w: number
                                    }[]
                                  }
                                  orig?: {
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
                                  focus_rects?: {
                                    x: number
                                    y: number
                                    w: number
                                    h: number
                                  }[]
                                }
                                video_info?: {
                                  aspect_ratio: number[]
                                  duration_millis: number
                                  variants: {
                                    bitrate?: number
                                    content_type: string
                                    url: string
                                  }[]
                                }
                              }[]
                            }
                            possibly_sensitive?: boolean
                            possibly_sensitive_editable?: boolean
                          }
                        }
                      }
                      quoted_status_id_str?: string
                      quoted_status_permalink?: {
                        url: string
                        expanded: string
                        display: string
                      }
                      self_thread?: {
                        id_str: string
                      }
                    }
                    card?: {
                      rest_id: string
                      legacy: {
                        binding_values: {
                          key: string
                          value: {
                            string_value?: string
                            type: string
                            scribe_key?: string
                            image_value?: {
                              height: number
                              width: number
                              url: string
                            }
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
                                  urls: {
                                    display_url: string
                                    expanded_url: string
                                    url: string
                                    indices: number[]
                                  }[]
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
                                url?: string
                                verified: boolean
                                want_retweets: boolean
                                withheld_in_countries: unknown[]
                              }
                              professional?: {
                                rest_id: string
                                professional_type: string
                                category: unknown[]
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
                            media: {
                              display_url: string
                              expanded_url: string
                              id_str: string
                              indices: number[]
                              media_url_https: string
                              type: string
                              url: string
                              features: {
                                large?: {
                                  faces: {
                                    x: number
                                    y: number
                                    h: number
                                    w: number
                                  }[]
                                }
                                medium?: {
                                  faces: {
                                    x: number
                                    y: number
                                    h: number
                                    w: number
                                  }[]
                                }
                                small?: {
                                  faces: {
                                    x: number
                                    y: number
                                    h: number
                                    w: number
                                  }[]
                                }
                                orig?: {
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
                                focus_rects?: {
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
                          extended_entities: {
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
                                large?: {
                                  faces: {
                                    x: number
                                    y: number
                                    h: number
                                    w: number
                                  }[]
                                }
                                medium?: {
                                  faces: {
                                    x: number
                                    y: number
                                    h: number
                                    w: number
                                  }[]
                                }
                                small?: {
                                  faces: {
                                    x: number
                                    y: number
                                    h: number
                                    w: number
                                  }[]
                                }
                                orig?: {
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
                                focus_rects?: {
                                  x: number
                                  y: number
                                  w: number
                                  h: number
                                }[]
                              }
                              additional_media_info?: {
                                monetizable: boolean
                              }
                              mediaStats?: {
                                viewCount: number
                              }
                              video_info?: {
                                aspect_ratio: number[]
                                duration_millis: number
                                variants: {
                                  content_type: string
                                  url: string
                                  bitrate?: number
                                }[]
                              }
                            }[]
                          }
                          favorite_count: number
                          favorited: boolean
                          full_text: string
                          is_quote_status: boolean
                          lang: string
                          possibly_sensitive: boolean
                          possibly_sensitive_editable: boolean
                          quote_count: number
                          reply_count: number
                          retweet_count: number
                          retweeted: boolean
                          user_id_str: string
                          id_str: string
                        }
                      }
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
                            professional: {
                              rest_id: string
                              professional_type: string
                              category: {
                                id: number
                                name: string
                                icon_name: string
                              }[]
                            }
                            has_nft_avatar: boolean
                            super_follow_eligible: boolean
                            super_followed_by: boolean
                            super_following: boolean
                          }
                        }
                      }
                      card: {
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
                      unmention_data: {}
                      unified_card: {
                        card_fetch_state: string
                      }
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
                          hashtags: {
                            indices: number[]
                            text: string
                          }[]
                          symbols: unknown[]
                        }
                        favorite_count: number
                        favorited: boolean
                        full_text: string
                        is_quote_status: boolean
                        lang: string
                        limited_actions: string
                        possibly_sensitive: boolean
                        possibly_sensitive_editable: boolean
                        quote_count: number
                        reply_count: number
                        retweet_count: number
                        retweeted: boolean
                        scopes: {
                          followers: boolean
                        }
                        user_id_str: string
                        id_str: string
                      }
                    }
                  }
                }
                tweetDisplayType?: string
                socialContext?: {
                  type: string
                  topic?: {
                    description: string
                    following: boolean
                    icon_url: string
                    id: string
                    topic_id: string
                    name: string
                    not_interested: boolean
                  }
                  functionalityType?: string
                  contextType?: string
                  text?: string
                  landingUrl?: {
                    url: string
                    urlType: string
                  }
                }
                promotedMetadata?: {
                  advertiser_results: {
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
                        url?: string
                        verified: boolean
                        verified_type?: string
                        want_retweets: boolean
                        withheld_in_countries: unknown[]
                      }
                      professional?: {
                        rest_id: string
                        professional_type: string
                        category: {
                          id: number
                          name: string
                          icon_name: string
                        }[]
                      }
                      super_follow_eligible: boolean
                      super_followed_by: boolean
                      super_following: boolean
                    }
                  }
                  disclosureType: string
                  experimentValues: {
                    key: string
                    value: string
                  }[]
                  impressionId: string
                  clickTrackingInfo?: {
                    urlParams: {
                      key: string
                      value: string
                    }[]
                  }
                  adMetadataContainer?: {
                    dynamicCardContent: {
                      card_type: string
                      layout: {
                        __typename: string
                        components: {
                          __typename: string
                          media?: {
                            id: string
                            media_key: string
                            media_id: string
                            media_info: {
                              __typename: string
                              original_img_height: number
                              original_img_width: number
                              original_img_url: string
                              color_info: {
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
                          destination_obj?: {
                            __typename: string
                            user_id: string
                          }
                          user?: {
                            rest_id: string
                          }
                        }[]
                      }
                      display_options: {}
                      card_fetch_state: string
                    }
                  }
                }
                content?: {
                  contentType: string
                  headerText: string
                  bodyText: string
                  primaryButtonAction: {
                    text: string
                    action: {
                      url: string
                      dismissOnClick: boolean
                      onClickCallbacks: {
                        endpoint: string
                      }[]
                    }
                  }
                  headerRichText: {
                    text: string
                    entities: unknown[]
                  }
                  bodyRichText: {
                    text: string
                    entities: unknown[]
                  }
                }
                impressionCallbacks?: {
                  endpoint: string
                }[]
              }
              feedbackInfo?: {
                feedbackKeys: string[]
                feedbackMetadata: string
              }
              clientEventInfo?: {
                component: string
                entityToken?: string
                details: {
                  timelinesDetails: {
                    injectionType: string
                    controllerData?: string
                  }
                }
              }
              items?: {
                entryId: string
                dispensable?: boolean
                item: {
                  itemContent: {
                    itemType: string
                    __typename: string
                    tweet_results?: {
                      result: {
                        __typename: string
                        rest_id: string
                        core: {
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
                                normal_followers_count: number
                                notifications: boolean
                                pinned_tweet_ids_str: string[]
                                possibly_sensitive: boolean
                                profile_banner_extensions: {
                                  mediaColor: {
                                    r: {
                                      ok?: {
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
                                protected: boolean
                                screen_name: string
                                statuses_count: number
                                translator_type: string
                                verified: boolean
                                want_retweets: boolean
                                withheld_in_countries: unknown[]
                                url?: string
                              }
                              professional?: {
                                rest_id: string
                                professional_type: string
                                category: {
                                  id: number
                                  name: string
                                  icon_name: string
                                }[]
                              }
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
                                  faces: unknown[]
                                }
                                medium: {
                                  faces: unknown[]
                                }
                                small: {
                                  faces: unknown[]
                                }
                                orig: {
                                  faces: unknown[]
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
                            user_mentions: {
                              id_str: string
                              name: string
                              screen_name: string
                              indices: number[]
                            }[]
                            urls: unknown[]
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
                                  faces: unknown[]
                                }
                                medium: {
                                  faces: unknown[]
                                }
                                small: {
                                  faces: unknown[]
                                }
                                orig: {
                                  faces: unknown[]
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
                          in_reply_to_screen_name?: string
                          in_reply_to_status_id_str?: string
                          in_reply_to_user_id_str?: string
                        }
                      }
                    }
                    tweetDisplayType?: string
                    socialContext?: {
                      type: string
                      contextType: string
                      text: string
                      landingUrl: {
                        url: string
                        urlType: string
                      }
                    }
                    user_results?: {
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
                          verified_type: string
                          want_retweets: boolean
                          withheld_in_countries: unknown[]
                          url?: string
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
                    userDisplayType?: string
                    promotedMetadata?: {
                      advertiser_results: {
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
                      disclosureType: string
                      experimentValues: {
                        key: string
                        value: string
                      }[]
                      impressionId: string
                      clickTrackingInfo: {
                        urlParams: {
                          key: string
                          value: string
                        }[]
                      }
                    }
                  }
                  feedbackInfo?: {
                    feedbackKeys: string[]
                    feedbackMetadata: string
                  }
                  clientEventInfo: {
                    component: string
                    details: {
                      timelinesDetails: {
                        injectionType: string
                        controllerData?: string
                        sourceData?: string
                      }
                    }
                    element?: string
                  }
                }
              }[]
              metadata?: {
                conversationMetadata: {
                  allTweetIds: string[]
                  enableDeduplication: boolean
                }
              }
              displayType?: string
              value?: string
              cursorType?: string
              stopOnEmptyResponse?: boolean
              header?: {
                displayType: string
                text: string
                sticky: boolean
              }
              footer?: {
                displayType: string
                text: string
                url: string
              }
            }
          }[]
          clientEventInfo?: {
            component: string
            element: string
          }
          cover?: {
            type: string
            halfCoverDisplayType: string
            primaryText: {
              text: string
              entities: unknown[]
            }
            primaryCoverCta: {
              text: string
              ctaBehavior: {
                type: string
              }
              callbacks: {
                endpoint: string
              }[]
              clientEventInfo: {
                action: string
              }
            }
            secondaryText: {
              text: string
              entities: {
                fromIndex: number
                toIndex: number
                ref: {
                  type: string
                  url: string
                  urlType: string
                }
              }[]
            }
            impressionCallbacks: {
              endpoint: string
            }[]
          }
        }[]
        responseObjects: {
          feedbackActions: {
            key: string
            value: {
              feedbackType: string
              prompt?: string
              confirmation?: string
              feedbackUrl: string
              encodedFeedbackRequest?: string
              hasUndoAction: boolean
              childKeys?: string[]
              icon?: string
              richBehavior?: {
                type: string
                topic: {
                  description: string
                  following: boolean
                  icon_url: string
                  id: string
                  topic_id: string
                  name: string
                  not_interested: boolean
                }
              }
            }
          }[]
          immediateReactions: unknown[]
        }
      }
    }
  }
}
