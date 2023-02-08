export interface CustomGraphQLTweetDetail {
  __typename: string;
  rest_id: string;
  has_birdwatch_notes: boolean;
  core: {
    user_results: {
      result: {
        __typename: string;
        id: string;
        rest_id: string;
        affiliates_highlighted_label: {};
        has_graduated_access: boolean;
        is_blue_verified: boolean;
        legacy: {
          blocked_by: boolean;
          blocking: boolean;
          follow_request_sent: boolean;
          followed_by: boolean;
          following: boolean;
          muting: boolean;
          notifications: boolean;
          protected: boolean;
          can_dm: boolean;
          can_media_tag: boolean;
          created_at: string;
          default_profile: boolean;
          default_profile_image: boolean;
          description: string;
          entities: {
            description: {
              urls: {
                display_url: string;
                expanded_url: string;
                url: string;
                indices: number[];
              }[];
            };
            url: {
              urls: {
                display_url: string;
                expanded_url: string;
                url: string;
                indices: number[];
              }[];
            };
          };
          fast_followers_count: number;
          favourites_count: number;
          followers_count: number;
          friends_count: number;
          has_custom_timelines: boolean;
          is_translator: boolean;
          listed_count: number;
          location: string;
          media_count: number;
          name: string;
          normal_followers_count: number;
          pinned_tweet_ids_str: string[];
          possibly_sensitive: boolean;
          profile_banner_extensions: {
            mediaColor: {
              r: {
                ok: {
                  palette: {
                    percentage: number;
                    rgb: {
                      blue: number;
                      green: number;
                      red: number;
                    };
                  }[];
                };
              };
            };
          };
          profile_banner_url: string;
          profile_image_extensions: {
            mediaColor: {
              r: {
                ok: {
                  palette: {
                    percentage: number;
                    rgb: {
                      blue: number;
                      green: number;
                      red: number;
                    };
                  }[];
                };
              };
            };
          };
          profile_image_url_https: string;
          profile_interstitial_type: string;
          screen_name: string;
          statuses_count: number;
          translator_type: string;
          url: string;
          verified: boolean;
          want_retweets: boolean;
          withheld_in_countries: unknown[];
        };
        has_nft_avatar: boolean;
        super_follow_eligible: boolean;
        super_followed_by: boolean;
        super_following: boolean;
        business_account?: {};
      };
    };
  };
  unmention_data: {};
  edit_control: {
    edit_tweet_ids: string[];
    editable_until_msecs: string;
    is_edit_eligible: boolean;
    edits_remaining: string;
  };
  edit_perspective: {
    favorited: boolean;
    retweeted: boolean;
  };
  is_translatable: boolean;
  views: {
    count: string;
    state: string;
  };
  source: string;
  legacy: {
    created_at: string;
    conversation_id_str: string;
    display_text_range: number[];
    entities: {
      media?: {
        display_url: string;
        expanded_url: string;
        id_str: string;
        indices: number[];
        media_url_https: string;
        type: string;
        url: string;
        features: {
          large: {
            faces: {
              x: number;
              y: number;
              h: number;
              w: number;
            }[];
          };
          medium: {
            faces: {
              x: number;
              y: number;
              h: number;
              w: number;
            }[];
          };
          small: {
            faces: {
              x: number;
              y: number;
              h: number;
              w: number;
            }[];
          };
          orig: {
            faces: {
              x: number;
              y: number;
              h: number;
              w: number;
            }[];
          };
        };
        sizes: {
          large: {
            h: number;
            w: number;
            resize: string;
          };
          medium: {
            h: number;
            w: number;
            resize: string;
          };
          small: {
            h: number;
            w: number;
            resize: string;
          };
          thumb: {
            h: number;
            w: number;
            resize: string;
          };
        };
        original_info: {
          height: number;
          width: number;
          focus_rects: {
            x: number;
            y: number;
            w: number;
            h: number;
          }[];
        };
      }[];
      user_mentions: unknown[];
      urls: {
        display_url: string;
        expanded_url: string;
        url: string;
        indices: number[];
      }[];
      hashtags: {
        indices: number[];
        text: string;
      }[];
      symbols: unknown[];
    };
    extended_entities?: {
      media: {
        display_url: string;
        expanded_url: string;
        id_str: string;
        indices: number[];
        media_key: string;
        media_url_https: string;
        type: string;
        url: string;
        ext_media_color: {
          palette: {
            percentage: number;
            rgb: {
              blue: number;
              green: number;
              red: number;
            };
          }[];
        };
        ext_media_availability: {
          status: string;
        };
        features: {
          large: {
            faces: {
              x: number;
              y: number;
              h: number;
              w: number;
            }[];
          };
          medium: {
            faces: {
              x: number;
              y: number;
              h: number;
              w: number;
            }[];
          };
          small: {
            faces: {
              x: number;
              y: number;
              h: number;
              w: number;
            }[];
          };
          orig: {
            faces: {
              x: number;
              y: number;
              h: number;
              w: number;
            }[];
          };
        };
        sizes: {
          large: {
            h: number;
            w: number;
            resize: string;
          };
          medium: {
            h: number;
            w: number;
            resize: string;
          };
          small: {
            h: number;
            w: number;
            resize: string;
          };
          thumb: {
            h: number;
            w: number;
            resize: string;
          };
        };
        original_info: {
          height: number;
          width: number;
          focus_rects: {
            x: number;
            y: number;
            w: number;
            h: number;
          }[];
        };
      }[];
    };
    favorite_count: number;
    favorited: boolean;
    full_text: string;
    is_quote_status: boolean;
    lang: string;
    possibly_sensitive?: boolean;
    possibly_sensitive_editable?: boolean;
    quote_count: number;
    reply_count: number;
    retweet_count: number;
    retweeted: boolean;
    user_id_str: string;
    id_str: string;
    self_thread?: {
      id_str: string;
    };
  };
  quick_promote_eligibility: {
    eligibility: string;
  };
}
