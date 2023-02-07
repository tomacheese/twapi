export interface RestGuideResponse {
  globalObjects: {
    tweets: {
      "1621483198948728834"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: {
            text: string;
            indices: number[];
          }[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: unknown[];
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
              large: {
                faces: unknown[];
              };
              small: {
                faces: unknown[];
              };
              medium: {
                faces: unknown[];
              };
              orig: {
                faces: unknown[];
              };
            };
          }[];
        };
        extended_entities: {
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
              large: {
                faces: unknown[];
              };
              small: {
                faces: unknown[];
              };
              medium: {
                faces: unknown[];
              };
              orig: {
                faces: unknown[];
              };
            };
            media_key: string;
            ext_sensitive_media_warning: null;
            ext_media_availability: {
              status: string;
            };
            ext_alt_text: null;
            ext_media_color: {
              palette: {
                rgb: {
                  red: number;
                  green: number;
                  blue: number;
                };
                percentage: number;
              }[];
            };
            ext: {
              mediaStats: {
                r: string;
                ttl: number;
              };
            };
          }[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        lang: string;
        supplemental_language: null;
        self_thread: {
          id: number;
          id_str: string;
        };
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
        };
      };
      "1621482382774910976"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: {
            text: string;
            indices: number[];
          }[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: {
            url: string;
            expanded_url: string;
            display_url: string;
            indices: number[];
          }[];
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {};
          }[];
        };
        extended_entities: {
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
            };
            video_info: {
              aspect_ratio: number[];
              duration_millis: number;
              variants: {
                bitrate?: number;
                content_type: string;
                url: string;
              }[];
            };
            features: {};
            media_key: string;
            ext_sensitive_media_warning: null;
            ext_media_availability: {
              status: string;
            };
            ext_alt_text: null;
            ext_media_color: {
              palette: {
                rgb: {
                  red: number;
                  green: number;
                  blue: number;
                };
                percentage: number;
              }[];
            };
            ext: {
              mediaStats: {
                r: {
                  ok: {
                    viewCount: string;
                  };
                };
                ttl: number;
              };
            };
            additional_media_info: {
              monetizable: boolean;
            };
          }[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621512557172527106"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: unknown[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: unknown[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        lang: string;
        supplemental_language: null;
        self_thread: {
          id: number;
          id_str: string;
        };
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621504571821662209"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: unknown[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: unknown[];
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
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
          }[];
        };
        extended_entities: {
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
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
            media_key: string;
            ext_sensitive_media_warning: null;
            ext_media_availability: {
              status: string;
            };
            ext_alt_text: null;
            ext_media_color: {
              palette: {
                rgb: {
                  red: number;
                  green: number;
                  blue: number;
                };
                percentage: number;
              }[];
            };
            ext: {
              mediaStats: {
                r: string;
                ttl: number;
              };
            };
          }[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        lang: string;
        supplemental_language: null;
        self_thread: {
          id: number;
          id_str: string;
        };
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
        };
      };
      "1621510551452155906"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: unknown[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: unknown[];
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {};
          }[];
        };
        extended_entities: {
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
            };
            video_info: {
              aspect_ratio: number[];
              duration_millis: number;
              variants: {
                bitrate?: number;
                content_type: string;
                url: string;
              }[];
            };
            features: {};
            media_key: string;
            ext_sensitive_media_warning: null;
            ext_media_availability: {
              status: string;
            };
            ext_alt_text: null;
            ext_media_color: {
              palette: {
                rgb: {
                  red: number;
                  green: number;
                  blue: number;
                };
                percentage: number;
              }[];
            };
            ext: {
              mediaStats: {
                r: {
                  ok: {
                    viewCount: string;
                  };
                };
                ttl: number;
              };
            };
            additional_media_info: {
              monetizable: boolean;
            };
          }[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        lang: string;
        supplemental_language: null;
        self_thread: {
          id: number;
          id_str: string;
        };
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
        };
      };
      "1621659805671890944"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: {
            text: string;
            indices: number[];
          }[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: unknown[];
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
              medium: {
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
              large: {
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
            };
          }[];
        };
        extended_entities: {
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
              medium: {
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
              large: {
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
            };
            media_key: string;
            ext_sensitive_media_warning: null;
            ext_media_availability: {
              status: string;
            };
            ext_alt_text: null;
            ext_media_color: {
              palette: {
                rgb: {
                  red: number;
                  green: number;
                  blue: number;
                };
                percentage: number;
              }[];
            };
            ext: {
              mediaStats: {
                r: string;
                ttl: number;
              };
            };
          }[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
        };
      };
      "1621629612609388544"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: {
            text: string;
            indices: number[];
          }[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: unknown[];
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {};
          }[];
        };
        extended_entities: {
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
            };
            video_info: {
              aspect_ratio: number[];
              duration_millis: number;
              variants: {
                content_type: string;
                url: string;
                bitrate?: number;
              }[];
            };
            features: {};
            media_key: string;
            ext_sensitive_media_warning: null;
            ext_media_availability: {
              status: string;
            };
            ext_alt_text: null;
            ext_media_color: {
              palette: {
                rgb: {
                  red: number;
                  green: number;
                  blue: number;
                };
                percentage: number;
              }[];
            };
            ext: {
              mediaStats: {
                r: {
                  ok: {
                    viewCount: string;
                  };
                };
                ttl: number;
              };
            };
            additional_media_info: {
              title: string;
              description: string;
              embeddable: boolean;
              monetizable: boolean;
            };
          }[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
        };
      };
      "1621495859543437313"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: unknown[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: {
            url: string;
            expanded_url: string;
            display_url: string;
            indices: number[];
          }[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        quoted_status_id: number;
        quoted_status_id_str: string;
        quoted_status_permalink: {
          url: string;
          expanded: string;
          display: string;
        };
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
        };
      };
      "1621509325629038594"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: {
            text: string;
            indices: number[];
          }[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: unknown[];
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              large: {
                w: number;
                h: number;
                resize: string;
              };
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
              large: {
                faces: unknown[];
              };
              medium: {
                faces: unknown[];
              };
              small: {
                faces: unknown[];
              };
              orig: {
                faces: unknown[];
              };
            };
          }[];
        };
        extended_entities: {
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              large: {
                w: number;
                h: number;
                resize: string;
              };
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
              large: {
                faces: unknown[];
              };
              medium: {
                faces: unknown[];
              };
              small: {
                faces: unknown[];
              };
              orig: {
                faces: unknown[];
              };
            };
            media_key: string;
            ext_sensitive_media_warning: null;
            ext_media_availability: {
              status: string;
            };
            ext_alt_text: null;
            ext_media_color: {
              palette: {
                rgb: {
                  red: number;
                  green: number;
                  blue: number;
                };
                percentage: number;
              }[];
            };
            ext: {
              mediaStats: {
                r: string;
                ttl: number;
              };
            };
          }[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
        };
      };
      "1621671077234757633"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: unknown[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: unknown[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621556986138734593"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: unknown[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: unknown[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        lang: string;
        supplemental_language: null;
        self_thread: {
          id: number;
          id_str: string;
        };
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
        };
      };
      "1621524757643657224"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: unknown[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: unknown[];
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
              large: {
                faces: unknown[];
              };
              orig: {
                faces: unknown[];
              };
              medium: {
                faces: unknown[];
              };
              small: {
                faces: unknown[];
              };
            };
          }[];
        };
        extended_entities: {
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
              large: {
                faces: unknown[];
              };
              orig: {
                faces: unknown[];
              };
              medium: {
                faces: unknown[];
              };
              small: {
                faces: unknown[];
              };
            };
            media_key: string;
            ext_sensitive_media_warning: null;
            ext_media_availability: {
              status: string;
            };
            ext_alt_text: null;
            ext_media_color: {
              palette: {
                rgb: {
                  red: number;
                  green: number;
                  blue: number;
                };
                percentage: number;
              }[];
            };
            ext: {
              mediaStats: {
                r: string;
                ttl: number;
              };
            };
          }[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621481464792780800"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: unknown[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: unknown[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        lang: string;
        supplemental_language: null;
        self_thread: {
          id: number;
          id_str: string;
        };
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
        };
      };
      "1621480851640049664"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: unknown[];
          symbols: unknown[];
          user_mentions: {
            screen_name: string;
            name: string;
            id: number;
            id_str: string;
            indices: number[];
          }[];
          urls: {
            url: string;
            expanded_url: string;
            display_url: string;
            indices: number[];
          }[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        card: {
          name: string;
          url: string;
          card_type_url: string;
          binding_values: {
            vanity_url: {
              type: string;
              string_value: string;
              scribe_key: string;
            };
            player_url: {
              type: string;
              string_value: string;
            };
            app_url: {
              type: string;
              string_value: string;
            };
            app_url_resolved: {
              type: string;
              string_value: string;
            };
            app_is_free: {
              type: string;
              string_value: string;
            };
            app_price_currency: {
              type: string;
              string_value: string;
            };
            app_price_amount: {
              type: string;
              string_value: string;
            };
            domain: {
              type: string;
              string_value: string;
            };
            app_num_ratings: {
              type: string;
              string_value: string;
            };
            app_star_rating: {
              type: string;
              string_value: string;
            };
            app_name: {
              type: string;
              string_value: string;
            };
            player_width: {
              type: string;
              string_value: string;
            };
            player_height: {
              type: string;
              string_value: string;
            };
            site: {
              type: string;
              user_value: {
                id_str: string;
                path: unknown[];
              };
              scribe_key: string;
            };
            title: {
              type: string;
              string_value: string;
            };
            description: {
              type: string;
              string_value: string;
            };
            player_image_small: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            player_image: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            player_image_large: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            player_image_x_large: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            player_image_color: {
              type: string;
              image_color_value: {
                palette: {
                  percentage: number;
                  rgb: {
                    red: number;
                    green: number;
                    blue: number;
                  };
                }[];
              };
            };
            player_image_original: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            card_url: {
              type: string;
              string_value: string;
              scribe_key: string;
            };
            app_id: {
              type: string;
              string_value: string;
              scribe_key: string;
            };
          };
          users: {
            "10228272": {
              id: number;
              id_str: string;
              name: string;
              screen_name: string;
              location: string;
              description: string;
              url: string;
              entities: {
                url: {
                  urls: {
                    url: string;
                    expanded_url: string;
                    display_url: string;
                    indices: number[];
                  }[];
                };
                description: {
                  urls: unknown[];
                };
              };
              protected: boolean;
              followers_count: number;
              fast_followers_count: number;
              normal_followers_count: number;
              friends_count: number;
              listed_count: number;
              created_at: string;
              favourites_count: number;
              utc_offset: null;
              time_zone: null;
              geo_enabled: boolean;
              verified: boolean;
              statuses_count: number;
              media_count: number;
              lang: null;
              contributors_enabled: boolean;
              is_translator: boolean;
              is_translation_enabled: boolean;
              profile_background_color: string;
              profile_background_image_url: string;
              profile_background_image_url_https: string;
              profile_background_tile: boolean;
              profile_image_url: string;
              profile_image_url_https: string;
              profile_banner_url: string;
              profile_image_extensions_sensitive_media_warning: null;
              profile_image_extensions_media_availability: null;
              profile_image_extensions_alt_text: null;
              profile_image_extensions_media_color: {
                palette: {
                  rgb: {
                    red: number;
                    green: number;
                    blue: number;
                  };
                  percentage: number;
                }[];
              };
              profile_image_extensions: {
                mediaStats: {
                  r: {
                    missing: null;
                  };
                  ttl: number;
                };
              };
              profile_banner_extensions_sensitive_media_warning: null;
              profile_banner_extensions_media_availability: null;
              profile_banner_extensions_alt_text: null;
              profile_banner_extensions_media_color: {
                palette: {
                  rgb: {
                    red: number;
                    green: number;
                    blue: number;
                  };
                  percentage: number;
                }[];
              };
              profile_banner_extensions: {
                mediaStats: {
                  r: {
                    missing: null;
                  };
                  ttl: number;
                };
              };
              profile_link_color: string;
              profile_sidebar_border_color: string;
              profile_sidebar_fill_color: string;
              profile_text_color: string;
              profile_use_background_image: boolean;
              has_extended_profile: boolean;
              default_profile: boolean;
              default_profile_image: boolean;
              pinned_tweet_ids: unknown[];
              pinned_tweet_ids_str: unknown[];
              has_custom_timelines: boolean;
              can_dm: null;
              can_media_tag: boolean;
              following: boolean;
              follow_request_sent: boolean;
              notifications: boolean;
              muting: boolean;
              blocking: boolean;
              blocked_by: boolean;
              want_retweets: boolean;
              advertiser_account_type: string;
              advertiser_account_service_levels: unknown[];
              business_profile_state: string;
              translator_type: string;
              withheld_in_countries: unknown[];
              followed_by: boolean;
              ext_has_nft_avatar: boolean;
              ext_is_blue_verified: boolean;
              ext_verified_type: string;
              ext: {
                highlightedLabel: {
                  r: {
                    ok: {};
                  };
                  ttl: number;
                };
                hasNftAvatar: {
                  r: {
                    ok: boolean;
                  };
                  ttl: number;
                };
              };
              require_some_consent: boolean;
            };
          };
          card_platform: {
            platform: {
              device: {
                name: string;
                version: string;
              };
              audience: {
                name: string;
                bucket: null;
              };
            };
          };
        };
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
        };
      };
      "1621496799222693889"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: {
            text: string;
            indices: number[];
          }[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: {
            url: string;
            expanded_url: string;
            display_url: string;
            indices: number[];
          }[];
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
              medium: {
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
              small: {
                faces: {
                  x: number;
                  y: number;
                  h: number;
                  w: number;
                }[];
              };
              large: {
                faces: {
                  x: number;
                  y: number;
                  h: number;
                  w: number;
                }[];
              };
            };
          }[];
        };
        extended_entities: {
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
              medium: {
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
              small: {
                faces: {
                  x: number;
                  y: number;
                  h: number;
                  w: number;
                }[];
              };
              large: {
                faces: {
                  x: number;
                  y: number;
                  h: number;
                  w: number;
                }[];
              };
            };
            media_key: string;
            ext_sensitive_media_warning: null;
            ext_media_availability: {
              status: string;
            };
            ext_alt_text: null;
            ext_media_color: {
              palette: {
                rgb: {
                  red: number;
                  green: number;
                  blue: number;
                };
                percentage: number;
              }[];
            };
            ext: {
              mediaStats: {
                r: string;
                ttl: number;
              };
            };
          }[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621762357126127616"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: unknown[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: unknown[];
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
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
          }[];
        };
        extended_entities: {
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
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
            media_key: string;
            ext_sensitive_media_warning: null;
            ext_media_availability: {
              status: string;
            };
            ext_alt_text: null;
            ext_media_color: {
              palette: {
                rgb: {
                  red: number;
                  green: number;
                  blue: number;
                };
                percentage: number;
              }[];
            };
            ext: {
              mediaStats: {
                r: string;
                ttl: number;
              };
            };
          }[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        lang: string;
        supplemental_language: null;
        self_thread: {
          id: number;
          id_str: string;
        };
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
        };
      };
      "1621705107694829569"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: {
            text: string;
            indices: number[];
          }[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: unknown[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        card: {
          name: string;
          url: string;
          card_type_url: string;
          binding_values: {
            unified_card: {
              type: string;
              string_value: string;
            };
            card_url: {
              type: string;
              string_value: string;
              scribe_key: string;
            };
          };
          card_platform: {
            platform: {
              device: {
                name: string;
                version: string;
              };
              audience: {
                name: string;
                bucket: null;
              };
            };
          };
        };
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
        };
      };
      "1621509534295654400"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: unknown[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: {
            url: string;
            expanded_url: string;
            display_url: string;
            indices: number[];
          }[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        card: {
          name: string;
          url: string;
          card_type_url: string;
          binding_values: {
            vanity_url: {
              type: string;
              string_value: string;
              scribe_key: string;
            };
            domain: {
              type: string;
              string_value: string;
            };
            title: {
              type: string;
              string_value: string;
            };
            description: {
              type: string;
              string_value: string;
            };
            thumbnail_image_small: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            thumbnail_image: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            thumbnail_image_large: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            thumbnail_image_x_large: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            thumbnail_image_color: {
              type: string;
              image_color_value: {
                palette: {
                  percentage: number;
                  rgb: {
                    red: number;
                    green: number;
                    blue: number;
                  };
                }[];
              };
            };
            thumbnail_image_original: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            summary_photo_image_small: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            summary_photo_image: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            summary_photo_image_large: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            summary_photo_image_x_large: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            summary_photo_image_color: {
              type: string;
              image_color_value: {
                palette: {
                  percentage: number;
                  rgb: {
                    red: number;
                    green: number;
                    blue: number;
                  };
                }[];
              };
            };
            summary_photo_image_original: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            photo_image_full_size_small: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            photo_image_full_size: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            photo_image_full_size_large: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            photo_image_full_size_x_large: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            photo_image_full_size_color: {
              type: string;
              image_color_value: {
                palette: {
                  percentage: number;
                  rgb: {
                    red: number;
                    green: number;
                    blue: number;
                  };
                }[];
              };
            };
            photo_image_full_size_original: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            card_url: {
              type: string;
              string_value: string;
              scribe_key: string;
            };
          };
          card_platform: {
            platform: {
              device: {
                name: string;
                version: string;
              };
              audience: {
                name: string;
                bucket: null;
              };
            };
          };
        };
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
        };
      };
      "1621506274692325377"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: unknown[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: unknown[];
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
            };
            source_status_id: number;
            source_status_id_str: string;
            source_user_id: number;
            source_user_id_str: string;
            features: {};
          }[];
        };
        extended_entities: {
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
            };
            source_status_id: number;
            source_status_id_str: string;
            source_user_id: number;
            source_user_id_str: string;
            video_info: {
              aspect_ratio: number[];
              duration_millis: number;
              variants: {
                bitrate?: number;
                content_type: string;
                url: string;
              }[];
            };
            features: {};
            media_key: string;
            ext_sensitive_media_warning: null;
            ext_media_availability: {
              status: string;
            };
            ext_alt_text: null;
            ext_media_color: {
              palette: {
                rgb: {
                  red: number;
                  green: number;
                  blue: number;
                };
                percentage: number;
              }[];
            };
            ext: {
              mediaStats: {
                r: {
                  ok: {
                    viewCount: string;
                  };
                };
                ttl: number;
              };
            };
            additional_media_info: {
              monetizable: boolean;
              source_user: {
                id: number;
                id_str: string;
                name: string;
                screen_name: string;
                location: string;
                description: string;
                url: string;
                entities: {
                  url: {
                    urls: {
                      url: string;
                      expanded_url: string;
                      display_url: string;
                      indices: number[];
                    }[];
                  };
                  description: {
                    urls: {
                      url: string;
                      expanded_url: string;
                      display_url: string;
                      indices: number[];
                    }[];
                  };
                };
                protected: boolean;
                followers_count: number;
                fast_followers_count: number;
                normal_followers_count: number;
                friends_count: number;
                listed_count: number;
                created_at: string;
                favourites_count: number;
                utc_offset: null;
                time_zone: null;
                geo_enabled: boolean;
                verified: boolean;
                statuses_count: number;
                media_count: number;
                lang: null;
                contributors_enabled: boolean;
                is_translator: boolean;
                is_translation_enabled: boolean;
                profile_background_color: string;
                profile_background_image_url: string;
                profile_background_image_url_https: string;
                profile_background_tile: boolean;
                profile_image_url: string;
                profile_image_url_https: string;
                profile_banner_url: string;
                profile_image_extensions_sensitive_media_warning: null;
                profile_image_extensions_media_availability: null;
                profile_image_extensions_alt_text: null;
                profile_image_extensions_media_color: {
                  palette: {
                    rgb: {
                      red: number;
                      green: number;
                      blue: number;
                    };
                    percentage: number;
                  }[];
                };
                profile_image_extensions: {
                  mediaStats: {
                    r: {
                      missing: null;
                    };
                    ttl: number;
                  };
                };
                profile_banner_extensions_sensitive_media_warning: null;
                profile_banner_extensions_media_availability: null;
                profile_banner_extensions_alt_text: null;
                profile_banner_extensions_media_color: {
                  palette: {
                    rgb: {
                      red: number;
                      green: number;
                      blue: number;
                    };
                    percentage: number;
                  }[];
                };
                profile_banner_extensions: {
                  mediaStats: {
                    r: {
                      missing: null;
                    };
                    ttl: number;
                  };
                };
                profile_link_color: string;
                profile_sidebar_border_color: string;
                profile_sidebar_fill_color: string;
                profile_text_color: string;
                profile_use_background_image: boolean;
                has_extended_profile: boolean;
                default_profile: boolean;
                default_profile_image: boolean;
                pinned_tweet_ids: unknown[];
                pinned_tweet_ids_str: unknown[];
                has_custom_timelines: boolean;
                can_dm: null;
                can_media_tag: boolean;
                following: boolean;
                follow_request_sent: boolean;
                notifications: boolean;
                muting: boolean;
                blocking: boolean;
                blocked_by: boolean;
                want_retweets: boolean;
                advertiser_account_type: string;
                advertiser_account_service_levels: unknown[];
                business_profile_state: string;
                translator_type: string;
                withheld_in_countries: unknown[];
                followed_by: boolean;
                ext_has_nft_avatar: boolean;
                ext_is_blue_verified: boolean;
                ext_verified_type: string;
                ext: {
                  highlightedLabel: {
                    r: {
                      ok: {};
                    };
                    ttl: number;
                  };
                  hasNftAvatar: {
                    r: {
                      ok: boolean;
                    };
                    ttl: number;
                  };
                };
                require_some_consent: boolean;
              };
            };
          }[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        lang: string;
        supplemental_language: null;
        self_thread: {
          id: number;
          id_str: string;
        };
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
        };
      };
      "1621751297354637314"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: {
            text: string;
            indices: number[];
          }[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: unknown[];
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              small: {
                w: number;
                h: number;
                resize: string;
              };
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
              small: {
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
              large: {
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
          }[];
        };
        extended_entities: {
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              small: {
                w: number;
                h: number;
                resize: string;
              };
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
              small: {
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
              large: {
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
            media_key: string;
            ext_sensitive_media_warning: null;
            ext_media_availability: {
              status: string;
            };
            ext_alt_text: string;
            ext_media_color: {
              palette: {
                rgb: {
                  red: number;
                  green: number;
                  blue: number;
                };
                percentage: number;
              }[];
            };
            ext: {
              mediaStats: {
                r: string;
                ttl: number;
              };
            };
          }[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621517271977041926"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: unknown[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: unknown[];
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
              small: {
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
              orig: {
                faces: {
                  x: number;
                  y: number;
                  h: number;
                  w: number;
                }[];
              };
              large: {
                faces: {
                  x: number;
                  y: number;
                  h: number;
                  w: number;
                }[];
              };
            };
          }[];
        };
        extended_entities: {
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
              small: {
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
              orig: {
                faces: {
                  x: number;
                  y: number;
                  h: number;
                  w: number;
                }[];
              };
              large: {
                faces: {
                  x: number;
                  y: number;
                  h: number;
                  w: number;
                }[];
              };
            };
            media_key: string;
            ext_sensitive_media_warning: null;
            ext_media_availability: {
              status: string;
            };
            ext_alt_text: null;
            ext_media_color: {
              palette: {
                rgb: {
                  red: number;
                  green: number;
                  blue: number;
                };
                percentage: number;
              }[];
            };
            ext: {
              mediaStats: {
                r: string;
                ttl: number;
              };
            };
          }[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        lang: string;
        supplemental_language: null;
        self_thread: {
          id: number;
          id_str: string;
        };
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621530881369473027"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: unknown[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: unknown[];
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
              medium: {
                faces: unknown[];
              };
              large: {
                faces: unknown[];
              };
              orig: {
                faces: unknown[];
              };
              small: {
                faces: unknown[];
              };
            };
          }[];
        };
        extended_entities: {
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
              medium: {
                faces: unknown[];
              };
              large: {
                faces: unknown[];
              };
              orig: {
                faces: unknown[];
              };
              small: {
                faces: unknown[];
              };
            };
            media_key: string;
            ext_sensitive_media_warning: null;
            ext_media_availability: {
              status: string;
            };
            ext_alt_text: null;
            ext_media_color: {
              palette: {
                rgb: {
                  red: number;
                  green: number;
                  blue: number;
                };
                percentage: number;
              }[];
            };
            ext: {
              mediaStats: {
                r: string;
                ttl: number;
              };
            };
          }[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        lang: string;
        supplemental_language: null;
        self_thread: {
          id: number;
          id_str: string;
        };
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621477506258984963"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: {
            text: string;
            indices: number[];
          }[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: unknown[];
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
              orig: {
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
              large: {
                faces: {
                  x: number;
                  y: number;
                  h: number;
                  w: number;
                }[];
              };
            };
          }[];
        };
        extended_entities: {
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
              orig: {
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
              large: {
                faces: {
                  x: number;
                  y: number;
                  h: number;
                  w: number;
                }[];
              };
            };
            media_key: string;
            ext_sensitive_media_warning: null;
            ext_media_availability: {
              status: string;
            };
            ext_alt_text: null;
            ext_media_color: {
              palette: {
                rgb: {
                  red: number;
                  green: number;
                  blue: number;
                };
                percentage: number;
              }[];
            };
            ext: {
              mediaStats: {
                r: string;
                ttl: number;
              };
            };
          }[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
        };
      };
      "1621481978863423488"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: unknown[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: unknown[];
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
              medium: {
                faces: unknown[];
              };
              small: {
                faces: unknown[];
              };
              orig: {
                faces: unknown[];
              };
              large: {
                faces: unknown[];
              };
            };
          }[];
        };
        extended_entities: {
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
              medium: {
                faces: unknown[];
              };
              small: {
                faces: unknown[];
              };
              orig: {
                faces: unknown[];
              };
              large: {
                faces: unknown[];
              };
            };
            media_key: string;
            ext_sensitive_media_warning: null;
            ext_media_availability: {
              status: string;
            };
            ext_alt_text: null;
            ext_media_color: {
              palette: {
                rgb: {
                  red: number;
                  green: number;
                  blue: number;
                };
                percentage: number;
              }[];
            };
            ext: {
              mediaStats: {
                r: string;
                ttl: number;
              };
            };
          }[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
        };
      };
      "1621486321712926721"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: unknown[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: unknown[];
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {};
          }[];
        };
        extended_entities: {
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
            };
            video_info: {
              aspect_ratio: number[];
              duration_millis: number;
              variants: {
                bitrate?: number;
                content_type: string;
                url: string;
              }[];
            };
            features: {};
            media_key: string;
            ext_sensitive_media_warning: null;
            ext_media_availability: {
              status: string;
            };
            ext_alt_text: null;
            ext_media_color: {
              palette: {
                rgb: {
                  red: number;
                  green: number;
                  blue: number;
                };
                percentage: number;
              }[];
            };
            ext: {
              mediaStats: {
                r: {
                  ok: {
                    viewCount: string;
                  };
                };
                ttl: number;
              };
            };
            additional_media_info: {
              monetizable: boolean;
            };
          }[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621477424855932929"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: unknown[];
          symbols: unknown[];
          user_mentions: {
            screen_name: string;
            name: string;
            id: number;
            id_str: string;
            indices: number[];
          }[];
          urls: {
            url: string;
            expanded_url: string;
            display_url: string;
            indices: number[];
          }[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        card: {
          name: string;
          url: string;
          card_type_url: string;
          binding_values: {
            vanity_url: {
              type: string;
              string_value: string;
              scribe_key: string;
            };
            player_url: {
              type: string;
              string_value: string;
            };
            app_url: {
              type: string;
              string_value: string;
            };
            app_url_resolved: {
              type: string;
              string_value: string;
            };
            app_is_free: {
              type: string;
              string_value: string;
            };
            app_price_currency: {
              type: string;
              string_value: string;
            };
            app_price_amount: {
              type: string;
              string_value: string;
            };
            domain: {
              type: string;
              string_value: string;
            };
            app_num_ratings: {
              type: string;
              string_value: string;
            };
            app_star_rating: {
              type: string;
              string_value: string;
            };
            app_name: {
              type: string;
              string_value: string;
            };
            player_width: {
              type: string;
              string_value: string;
            };
            player_height: {
              type: string;
              string_value: string;
            };
            site: {
              type: string;
              user_value: {
                id_str: string;
                path: unknown[];
              };
              scribe_key: string;
            };
            title: {
              type: string;
              string_value: string;
            };
            description: {
              type: string;
              string_value: string;
            };
            player_image_small: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            player_image: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            player_image_large: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            player_image_x_large: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            player_image_color: {
              type: string;
              image_color_value: {
                palette: {
                  percentage: number;
                  rgb: {
                    red: number;
                    green: number;
                    blue: number;
                  };
                }[];
              };
            };
            player_image_original: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            card_url: {
              type: string;
              string_value: string;
              scribe_key: string;
            };
            app_id: {
              type: string;
              string_value: string;
              scribe_key: string;
            };
          };
          users: {
            "10228272": {
              id: number;
              id_str: string;
              name: string;
              screen_name: string;
              location: string;
              description: string;
              url: string;
              entities: {
                url: {
                  urls: {
                    url: string;
                    expanded_url: string;
                    display_url: string;
                    indices: number[];
                  }[];
                };
                description: {
                  urls: unknown[];
                };
              };
              protected: boolean;
              followers_count: number;
              fast_followers_count: number;
              normal_followers_count: number;
              friends_count: number;
              listed_count: number;
              created_at: string;
              favourites_count: number;
              utc_offset: null;
              time_zone: null;
              geo_enabled: boolean;
              verified: boolean;
              statuses_count: number;
              media_count: number;
              lang: null;
              contributors_enabled: boolean;
              is_translator: boolean;
              is_translation_enabled: boolean;
              profile_background_color: string;
              profile_background_image_url: string;
              profile_background_image_url_https: string;
              profile_background_tile: boolean;
              profile_image_url: string;
              profile_image_url_https: string;
              profile_banner_url: string;
              profile_image_extensions_sensitive_media_warning: null;
              profile_image_extensions_media_availability: null;
              profile_image_extensions_alt_text: null;
              profile_image_extensions_media_color: {
                palette: {
                  rgb: {
                    red: number;
                    green: number;
                    blue: number;
                  };
                  percentage: number;
                }[];
              };
              profile_image_extensions: {
                mediaStats: {
                  r: {
                    missing: null;
                  };
                  ttl: number;
                };
              };
              profile_banner_extensions_sensitive_media_warning: null;
              profile_banner_extensions_media_availability: null;
              profile_banner_extensions_alt_text: null;
              profile_banner_extensions_media_color: {
                palette: {
                  rgb: {
                    red: number;
                    green: number;
                    blue: number;
                  };
                  percentage: number;
                }[];
              };
              profile_banner_extensions: {
                mediaStats: {
                  r: {
                    missing: null;
                  };
                  ttl: number;
                };
              };
              profile_link_color: string;
              profile_sidebar_border_color: string;
              profile_sidebar_fill_color: string;
              profile_text_color: string;
              profile_use_background_image: boolean;
              has_extended_profile: boolean;
              default_profile: boolean;
              default_profile_image: boolean;
              pinned_tweet_ids: unknown[];
              pinned_tweet_ids_str: unknown[];
              has_custom_timelines: boolean;
              can_dm: null;
              can_media_tag: boolean;
              following: boolean;
              follow_request_sent: boolean;
              notifications: boolean;
              muting: boolean;
              blocking: boolean;
              blocked_by: boolean;
              want_retweets: boolean;
              advertiser_account_type: string;
              advertiser_account_service_levels: unknown[];
              business_profile_state: string;
              translator_type: string;
              withheld_in_countries: unknown[];
              followed_by: boolean;
              ext_has_nft_avatar: boolean;
              ext_is_blue_verified: boolean;
              ext_verified_type: string;
              ext: {
                highlightedLabel: {
                  r: {
                    ok: {};
                  };
                  ttl: number;
                };
                hasNftAvatar: {
                  r: {
                    ok: boolean;
                  };
                  ttl: number;
                };
              };
              require_some_consent: boolean;
            };
          };
          card_platform: {
            platform: {
              device: {
                name: string;
                version: string;
              };
              audience: {
                name: string;
                bucket: null;
              };
            };
          };
        };
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1622547467786137603"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: unknown[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: unknown[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1622731888732372992"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: {
            text: string;
            indices: number[];
          }[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: unknown[];
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
              orig: {
                faces: unknown[];
              };
              small: {
                faces: unknown[];
              };
              medium: {
                faces: unknown[];
              };
              large: {
                faces: unknown[];
              };
            };
          }[];
        };
        extended_entities: {
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
              orig: {
                faces: unknown[];
              };
              small: {
                faces: unknown[];
              };
              medium: {
                faces: unknown[];
              };
              large: {
                faces: unknown[];
              };
            };
            media_key: string;
            ext_sensitive_media_warning: null;
            ext_media_availability: {
              status: string;
            };
            ext_alt_text: null;
            ext_media_color: {
              palette: {
                rgb: {
                  red: number;
                  green: number;
                  blue: number;
                };
                percentage: number;
              }[];
            };
            ext: {
              mediaStats: {
                r: string;
                ttl: number;
              };
            };
          }[];
        };
        source: string;
        in_reply_to_status_id: number;
        in_reply_to_status_id_str: string;
        in_reply_to_user_id: number;
        in_reply_to_user_id_str: string;
        in_reply_to_screen_name: string;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        lang: string;
        supplemental_language: null;
        self_thread: {
          id: number;
          id_str: string;
        };
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
        };
      };
      "1622702025002881024"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: unknown[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: unknown[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
        };
      };
      "1622527296677765121"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: unknown[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: unknown[];
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
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
              orig: {
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
            };
          }[];
        };
        extended_entities: {
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
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
              orig: {
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
            };
            media_key: string;
            ext_sensitive_media_warning: null;
            ext_media_availability: {
              status: string;
            };
            ext_alt_text: null;
            ext_media_color: {
              palette: {
                rgb: {
                  red: number;
                  green: number;
                  blue: number;
                };
                percentage: number;
              }[];
            };
            ext: {
              mediaStats: {
                r: string;
                ttl: number;
              };
            };
          }[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1622571196670967810"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: {
            text: string;
            indices: number[];
          }[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: {
            url: string;
            expanded_url: string;
            display_url: string;
            indices: number[];
          }[];
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
              medium: {
                faces: unknown[];
              };
              small: {
                faces: unknown[];
              };
              orig: {
                faces: unknown[];
              };
              large: {
                faces: unknown[];
              };
            };
          }[];
        };
        extended_entities: {
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
              medium: {
                faces: unknown[];
              };
              small: {
                faces: unknown[];
              };
              orig: {
                faces: unknown[];
              };
              large: {
                faces: unknown[];
              };
            };
            media_key: string;
            ext_sensitive_media_warning: null;
            ext_media_availability: {
              status: string;
            };
            ext_alt_text: null;
            ext_media_color: {
              palette: {
                rgb: {
                  red: number;
                  green: number;
                  blue: number;
                };
                percentage: number;
              }[];
            };
            ext: {
              mediaStats: {
                r: string;
                ttl: number;
              };
            };
          }[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1622546799289597954"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: unknown[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: unknown[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        lang: string;
        supplemental_language: null;
        self_thread: {
          id: number;
          id_str: string;
        };
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
        };
      };
      "1622535887652532224"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: unknown[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: {
            url: string;
            expanded_url: string;
            display_url: string;
            indices: number[];
          }[];
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {};
          }[];
        };
        extended_entities: {
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
            };
            video_info: {
              aspect_ratio: number[];
              duration_millis: number;
              variants: {
                bitrate?: number;
                content_type: string;
                url: string;
              }[];
            };
            features: {};
            media_key: string;
            ext_sensitive_media_warning: null;
            ext_media_availability: {
              status: string;
            };
            ext_alt_text: null;
            ext_media_color: {
              palette: {
                rgb: {
                  red: number;
                  green: number;
                  blue: number;
                };
                percentage: number;
              }[];
            };
            ext: {
              mediaStats: {
                r: {
                  ok: {
                    viewCount: string;
                  };
                };
                ttl: number;
              };
            };
            additional_media_info: {
              monetizable: boolean;
            };
          }[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1622545891918741505"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: {
            text: string;
            indices: number[];
          }[];
          symbols: unknown[];
          user_mentions: {
            screen_name: string;
            name: string;
            id: number;
            id_str: string;
            indices: number[];
          }[];
          urls: {
            url: string;
            expanded_url: string;
            display_url: string;
            indices: number[];
          }[];
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {};
          }[];
        };
        extended_entities: {
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
            };
            video_info: {
              aspect_ratio: number[];
              duration_millis: number;
              variants: {
                bitrate?: number;
                content_type: string;
                url: string;
              }[];
            };
            features: {};
            media_key: string;
            ext_sensitive_media_warning: null;
            ext_media_availability: {
              status: string;
            };
            ext_alt_text: null;
            ext_media_color: {
              palette: {
                rgb: {
                  red: number;
                  green: number;
                  blue: number;
                };
                percentage: number;
              }[];
            };
            ext: {
              mediaStats: {
                r: {
                  ok: {
                    viewCount: string;
                  };
                };
                ttl: number;
              };
            };
            additional_media_info: {
              title: string;
              description: string;
              monetizable: boolean;
            };
          }[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1622532925043654657"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: {
            text: string;
            indices: number[];
          }[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: unknown[];
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
              medium: {
                faces: {
                  x: number;
                  y: number;
                  h: number;
                  w: number;
                }[];
              };
              large: {
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
          }[];
        };
        extended_entities: {
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
              medium: {
                faces: {
                  x: number;
                  y: number;
                  h: number;
                  w: number;
                }[];
              };
              large: {
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
            media_key: string;
            ext_sensitive_media_warning: null;
            ext_media_availability: {
              status: string;
            };
            ext_alt_text: null;
            ext_media_color: {
              palette: {
                rgb: {
                  red: number;
                  green: number;
                  blue: number;
                };
                percentage: number;
              }[];
            };
            ext: {
              mediaStats: {
                r: string;
                ttl: number;
              };
            };
          }[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1622534856352858116"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: unknown[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: unknown[];
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
              large: {
                faces: unknown[];
              };
              small: {
                faces: unknown[];
              };
              medium: {
                faces: unknown[];
              };
              orig: {
                faces: unknown[];
              };
            };
          }[];
        };
        extended_entities: {
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
              large: {
                faces: unknown[];
              };
              small: {
                faces: unknown[];
              };
              medium: {
                faces: unknown[];
              };
              orig: {
                faces: unknown[];
              };
            };
            media_key: string;
            ext_sensitive_media_warning: null;
            ext_media_availability: {
              status: string;
            };
            ext_alt_text: null;
            ext_media_color: {
              palette: {
                rgb: {
                  red: number;
                  green: number;
                  blue: number;
                };
                percentage: number;
              }[];
            };
            ext: {
              mediaStats: {
                r: string;
                ttl: number;
              };
            };
          }[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1622611127871078402"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: {
            text: string;
            indices: number[];
          }[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: unknown[];
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              large: {
                w: number;
                h: number;
                resize: string;
              };
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
              large: {
                faces: unknown[];
              };
              orig: {
                faces: unknown[];
              };
              small: {
                faces: unknown[];
              };
              medium: {
                faces: unknown[];
              };
            };
          }[];
        };
        extended_entities: {
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              large: {
                w: number;
                h: number;
                resize: string;
              };
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
              large: {
                faces: unknown[];
              };
              orig: {
                faces: unknown[];
              };
              small: {
                faces: unknown[];
              };
              medium: {
                faces: unknown[];
              };
            };
            media_key: string;
            ext_sensitive_media_warning: null;
            ext_media_availability: {
              status: string;
            };
            ext_alt_text: null;
            ext_media_color: {
              palette: {
                rgb: {
                  red: number;
                  green: number;
                  blue: number;
                };
                percentage: number;
              }[];
            };
            ext: {
              mediaStats: {
                r: string;
                ttl: number;
              };
            };
          }[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
        };
      };
      "1622612294638379008"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: unknown[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: unknown[];
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
              large: {
                faces: unknown[];
              };
              orig: {
                faces: unknown[];
              };
              small: {
                faces: unknown[];
              };
              medium: {
                faces: unknown[];
              };
            };
          }[];
        };
        extended_entities: {
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
              large: {
                faces: unknown[];
              };
              orig: {
                faces: unknown[];
              };
              small: {
                faces: unknown[];
              };
              medium: {
                faces: unknown[];
              };
            };
            media_key: string;
            ext_sensitive_media_warning: null;
            ext_media_availability: {
              status: string;
            };
            ext_alt_text: null;
            ext_media_color: {
              palette: {
                rgb: {
                  red: number;
                  green: number;
                  blue: number;
                };
                percentage: number;
              }[];
            };
            ext: {
              mediaStats: {
                r: string;
                ttl: number;
              };
            };
          }[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        lang: string;
        supplemental_language: null;
        self_thread: {
          id: number;
          id_str: string;
        };
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1622795534787559424"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: {
            text: string;
            indices: number[];
          }[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: unknown[];
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
              small: {
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
              orig: {
                faces: {
                  x: number;
                  y: number;
                  h: number;
                  w: number;
                }[];
              };
              large: {
                faces: {
                  x: number;
                  y: number;
                  h: number;
                  w: number;
                }[];
              };
            };
          }[];
        };
        extended_entities: {
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
              small: {
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
              orig: {
                faces: {
                  x: number;
                  y: number;
                  h: number;
                  w: number;
                }[];
              };
              large: {
                faces: {
                  x: number;
                  y: number;
                  h: number;
                  w: number;
                }[];
              };
            };
            media_key: string;
            ext_sensitive_media_warning: null;
            ext_media_availability: {
              status: string;
            };
            ext_alt_text: null;
            ext_media_color: {
              palette: {
                rgb: {
                  red: number;
                  green: number;
                  blue: number;
                };
                percentage: number;
              }[];
            };
            ext: {
              mediaStats: {
                r: string;
                ttl: number;
              };
            };
          }[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1622691808621826108"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: {
            text: string;
            indices: number[];
          }[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: unknown[];
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {};
          }[];
        };
        extended_entities: {
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
            };
            video_info: {
              aspect_ratio: number[];
              duration_millis: number;
              variants: {
                content_type: string;
                url: string;
                bitrate?: number;
              }[];
            };
            features: {};
            media_key: string;
            ext_sensitive_media_warning: null;
            ext_media_availability: {
              status: string;
            };
            ext_alt_text: null;
            ext_media_color: {
              palette: {
                rgb: {
                  red: number;
                  green: number;
                  blue: number;
                };
                percentage: number;
              }[];
            };
            ext: {
              mediaStats: {
                r: {
                  ok: {
                    viewCount: string;
                  };
                };
                ttl: number;
              };
            };
            additional_media_info: {
              title: string;
              description: string;
              embeddable: boolean;
              monetizable: boolean;
            };
          }[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
        };
      };
      "1622547337750147072"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: unknown[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: {
            url: string;
            expanded_url: string;
            display_url: string;
            indices: number[];
          }[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        quoted_status_id: number;
        quoted_status_id_str: string;
        quoted_status_permalink: {
          url: string;
          expanded: string;
          display: string;
        };
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
        };
      };
      "1622599080013889536"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: unknown[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: unknown[];
        };
        source: string;
        in_reply_to_status_id: number;
        in_reply_to_status_id_str: string;
        in_reply_to_user_id: number;
        in_reply_to_user_id_str: string;
        in_reply_to_screen_name: string;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        lang: string;
        supplemental_language: null;
        self_thread: {
          id: number;
          id_str: string;
        };
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
        };
      };
      "1622804596774281219"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: unknown[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: {
            url: string;
            expanded_url: string;
            display_url: string;
            indices: number[];
          }[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        card: {
          name: string;
          url: string;
          card_type_url: string;
          binding_values: {
            vanity_url: {
              type: string;
              string_value: string;
              scribe_key: string;
            };
            app_url: {
              type: string;
              string_value: string;
            };
            app_url_resolved: {
              type: string;
              string_value: string;
            };
            app_is_free: {
              type: string;
              string_value: string;
            };
            app_price_currency: {
              type: string;
              string_value: string;
            };
            app_price_amount: {
              type: string;
              string_value: string;
            };
            domain: {
              type: string;
              string_value: string;
            };
            app_num_ratings: {
              type: string;
              string_value: string;
            };
            app_star_rating: {
              type: string;
              string_value: string;
            };
            app_country: {
              type: string;
              string_value: string;
            };
            app_name: {
              type: string;
              string_value: string;
            };
            site: {
              type: string;
              user_value: {
                id_str: string;
                path: unknown[];
              };
              scribe_key: string;
            };
            title: {
              type: string;
              string_value: string;
            };
            description: {
              type: string;
              string_value: string;
            };
            thumbnail_image_small: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            thumbnail_image: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            thumbnail_image_large: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            thumbnail_image_x_large: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            thumbnail_image_color: {
              type: string;
              image_color_value: {
                palette: {
                  percentage: number;
                  rgb: {
                    red: number;
                    green: number;
                    blue: number;
                  };
                }[];
              };
            };
            thumbnail_image_original: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            summary_photo_image_small: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            summary_photo_image: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            summary_photo_image_large: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            summary_photo_image_x_large: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            summary_photo_image_color: {
              type: string;
              image_color_value: {
                palette: {
                  percentage: number;
                  rgb: {
                    red: number;
                    green: number;
                    blue: number;
                  };
                }[];
              };
            };
            summary_photo_image_original: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            photo_image_full_size_small: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            photo_image_full_size: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            photo_image_full_size_large: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            photo_image_full_size_x_large: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            photo_image_full_size_color: {
              type: string;
              image_color_value: {
                palette: {
                  percentage: number;
                  rgb: {
                    red: number;
                    green: number;
                    blue: number;
                  };
                }[];
              };
            };
            photo_image_full_size_original: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            card_url: {
              type: string;
              string_value: string;
              scribe_key: string;
            };
            app_id: {
              type: string;
              string_value: string;
              scribe_key: string;
            };
          };
          users: {
            "88846085": {
              id: number;
              id_str: string;
              name: string;
              screen_name: string;
              location: string;
              description: string;
              url: string;
              entities: {
                url: {
                  urls: {
                    url: string;
                    expanded_url: string;
                    display_url: string;
                    indices: number[];
                  }[];
                };
                description: {
                  urls: unknown[];
                };
              };
              protected: boolean;
              followers_count: number;
              fast_followers_count: number;
              normal_followers_count: number;
              friends_count: number;
              listed_count: number;
              created_at: string;
              favourites_count: number;
              utc_offset: null;
              time_zone: null;
              geo_enabled: boolean;
              verified: boolean;
              statuses_count: number;
              media_count: number;
              lang: null;
              contributors_enabled: boolean;
              is_translator: boolean;
              is_translation_enabled: boolean;
              profile_background_color: string;
              profile_background_image_url: string;
              profile_background_image_url_https: string;
              profile_background_tile: boolean;
              profile_image_url: string;
              profile_image_url_https: string;
              profile_banner_url: string;
              profile_image_extensions_sensitive_media_warning: null;
              profile_image_extensions_media_availability: null;
              profile_image_extensions_alt_text: null;
              profile_image_extensions_media_color: {
                palette: {
                  rgb: {
                    red: number;
                    green: number;
                    blue: number;
                  };
                  percentage: number;
                }[];
              };
              profile_image_extensions: {
                mediaStats: {
                  r: {
                    missing: null;
                  };
                  ttl: number;
                };
              };
              profile_banner_extensions_sensitive_media_warning: null;
              profile_banner_extensions_media_availability: null;
              profile_banner_extensions_alt_text: null;
              profile_banner_extensions_media_color: {
                palette: {
                  rgb: {
                    red: number;
                    green: number;
                    blue: number;
                  };
                  percentage: number;
                }[];
              };
              profile_banner_extensions: {
                mediaStats: {
                  r: {
                    missing: null;
                  };
                  ttl: number;
                };
              };
              profile_link_color: string;
              profile_sidebar_border_color: string;
              profile_sidebar_fill_color: string;
              profile_text_color: string;
              profile_use_background_image: boolean;
              has_extended_profile: boolean;
              default_profile: boolean;
              default_profile_image: boolean;
              pinned_tweet_ids: unknown[];
              pinned_tweet_ids_str: unknown[];
              has_custom_timelines: boolean;
              can_dm: null;
              can_media_tag: boolean;
              following: boolean;
              follow_request_sent: boolean;
              notifications: boolean;
              muting: boolean;
              blocking: boolean;
              blocked_by: boolean;
              want_retweets: boolean;
              advertiser_account_type: string;
              advertiser_account_service_levels: unknown[];
              business_profile_state: string;
              translator_type: string;
              withheld_in_countries: unknown[];
              followed_by: boolean;
              ext_has_nft_avatar: boolean;
              ext_is_blue_verified: boolean;
              ext_verified_type: string;
              ext: {
                highlightedLabel: {
                  r: {
                    ok: {};
                  };
                  ttl: number;
                };
                hasNftAvatar: {
                  r: {
                    ok: boolean;
                  };
                  ttl: number;
                };
              };
              require_some_consent: boolean;
            };
          };
          card_platform: {
            platform: {
              device: {
                name: string;
                version: string;
              };
              audience: {
                name: string;
                bucket: null;
              };
            };
          };
        };
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
        };
      };
      "1622544564597948416"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: unknown[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: unknown[];
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
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
              large: {
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
          }[];
        };
        extended_entities: {
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
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
              large: {
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
            media_key: string;
            ext_sensitive_media_warning: null;
            ext_media_availability: {
              status: string;
            };
            ext_alt_text: null;
            ext_media_color: {
              palette: {
                rgb: {
                  red: number;
                  green: number;
                  blue: number;
                };
                percentage: number;
              }[];
            };
            ext: {
              mediaStats: {
                r: string;
                ttl: number;
              };
            };
          }[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
        };
      };
      "1622596075189321728"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: unknown[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: {
            url: string;
            expanded_url: string;
            display_url: string;
            indices: number[];
          }[];
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              small: {
                w: number;
                h: number;
                resize: string;
              };
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
              small: {
                faces: {
                  x: number;
                  y: number;
                  h: number;
                  w: number;
                }[];
              };
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
              orig: {
                faces: {
                  x: number;
                  y: number;
                  h: number;
                  w: number;
                }[];
              };
            };
          }[];
        };
        extended_entities: {
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              small: {
                w: number;
                h: number;
                resize: string;
              };
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
              small: {
                faces: {
                  x: number;
                  y: number;
                  h: number;
                  w: number;
                }[];
              };
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
              orig: {
                faces: {
                  x: number;
                  y: number;
                  h: number;
                  w: number;
                }[];
              };
            };
            media_key: string;
            ext_sensitive_media_warning: null;
            ext_media_availability: {
              status: string;
            };
            ext_alt_text: null;
            ext_media_color: {
              palette: {
                rgb: {
                  red: number;
                  green: number;
                  blue: number;
                };
                percentage: number;
              }[];
            };
            ext: {
              mediaStats: {
                r: string;
                ttl: number;
              };
            };
          }[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
        };
      };
      "1622548309222240258"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: unknown[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: unknown[];
        };
        source: string;
        in_reply_to_status_id: number;
        in_reply_to_status_id_str: string;
        in_reply_to_user_id: number;
        in_reply_to_user_id_str: string;
        in_reply_to_screen_name: string;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        lang: string;
        supplemental_language: null;
        self_thread: {
          id: number;
          id_str: string;
        };
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
        };
      };
      "1622786759594758149"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: {
            text: string;
            indices: number[];
          }[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: {
            url: string;
            expanded_url: string;
            display_url: string;
            indices: number[];
          }[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        card: {
          name: string;
          url: string;
          card_type_url: string;
          binding_values: {
            vanity_url: {
              type: string;
              string_value: string;
              scribe_key: string;
            };
            domain: {
              type: string;
              string_value: string;
            };
            site: {
              type: string;
              user_value: {
                id_str: string;
                path: unknown[];
              };
              scribe_key: string;
            };
            title: {
              type: string;
              string_value: string;
            };
            summary_photo_image_alt_text: {
              type: string;
              string_value: string;
            };
            photo_image_full_size_alt_text: {
              type: string;
              string_value: string;
            };
            description: {
              type: string;
              string_value: string;
            };
            thumbnail_image_small: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: string;
              };
            };
            thumbnail_image: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: string;
              };
            };
            thumbnail_image_large: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: string;
              };
            };
            thumbnail_image_x_large: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: string;
              };
            };
            thumbnail_image_color: {
              type: string;
              image_color_value: {
                palette: {
                  percentage: number;
                  rgb: {
                    red: number;
                    green: number;
                    blue: number;
                  };
                }[];
              };
            };
            thumbnail_image_original: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: string;
              };
            };
            summary_photo_image_small: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: string;
              };
            };
            summary_photo_image: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: string;
              };
            };
            summary_photo_image_large: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: string;
              };
            };
            summary_photo_image_x_large: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: string;
              };
            };
            summary_photo_image_color: {
              type: string;
              image_color_value: {
                palette: {
                  percentage: number;
                  rgb: {
                    red: number;
                    green: number;
                    blue: number;
                  };
                }[];
              };
            };
            summary_photo_image_original: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: string;
              };
            };
            photo_image_full_size_small: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: string;
              };
            };
            photo_image_full_size: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: string;
              };
            };
            photo_image_full_size_large: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: string;
              };
            };
            photo_image_full_size_x_large: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: string;
              };
            };
            photo_image_full_size_color: {
              type: string;
              image_color_value: {
                palette: {
                  percentage: number;
                  rgb: {
                    red: number;
                    green: number;
                    blue: number;
                  };
                }[];
              };
            };
            photo_image_full_size_original: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: string;
              };
            };
            card_url: {
              type: string;
              string_value: string;
              scribe_key: string;
            };
          };
          users: {
            "26809005": {
              id: number;
              id_str: string;
              name: string;
              screen_name: string;
              location: string;
              description: string;
              url: string;
              entities: {
                url: {
                  urls: {
                    url: string;
                    expanded_url: string;
                    display_url: string;
                    indices: number[];
                  }[];
                };
                description: {
                  urls: unknown[];
                };
              };
              protected: boolean;
              followers_count: number;
              fast_followers_count: number;
              normal_followers_count: number;
              friends_count: number;
              listed_count: number;
              created_at: string;
              favourites_count: number;
              utc_offset: null;
              time_zone: null;
              geo_enabled: boolean;
              verified: boolean;
              statuses_count: number;
              media_count: number;
              lang: null;
              contributors_enabled: boolean;
              is_translator: boolean;
              is_translation_enabled: boolean;
              profile_background_color: string;
              profile_background_image_url: string;
              profile_background_image_url_https: string;
              profile_background_tile: boolean;
              profile_image_url: string;
              profile_image_url_https: string;
              profile_banner_url: string;
              profile_image_extensions_sensitive_media_warning: null;
              profile_image_extensions_media_availability: null;
              profile_image_extensions_alt_text: null;
              profile_image_extensions_media_color: {
                palette: {
                  rgb: {
                    red: number;
                    green: number;
                    blue: number;
                  };
                  percentage: number;
                }[];
              };
              profile_image_extensions: {
                mediaStats: {
                  r: {
                    missing: null;
                  };
                  ttl: number;
                };
              };
              profile_banner_extensions_sensitive_media_warning: null;
              profile_banner_extensions_media_availability: null;
              profile_banner_extensions_alt_text: null;
              profile_banner_extensions_media_color: {
                palette: {
                  rgb: {
                    red: number;
                    green: number;
                    blue: number;
                  };
                  percentage: number;
                }[];
              };
              profile_banner_extensions: {
                mediaStats: {
                  r: {
                    missing: null;
                  };
                  ttl: number;
                };
              };
              profile_link_color: string;
              profile_sidebar_border_color: string;
              profile_sidebar_fill_color: string;
              profile_text_color: string;
              profile_use_background_image: boolean;
              has_extended_profile: boolean;
              default_profile: boolean;
              default_profile_image: boolean;
              pinned_tweet_ids: unknown[];
              pinned_tweet_ids_str: unknown[];
              has_custom_timelines: boolean;
              can_dm: null;
              can_media_tag: boolean;
              following: boolean;
              follow_request_sent: boolean;
              notifications: boolean;
              muting: boolean;
              blocking: boolean;
              blocked_by: boolean;
              want_retweets: boolean;
              advertiser_account_type: string;
              advertiser_account_service_levels: unknown[];
              business_profile_state: string;
              translator_type: string;
              withheld_in_countries: unknown[];
              followed_by: boolean;
              ext_verified_type: string;
              ext_is_blue_verified: boolean;
              ext_has_nft_avatar: boolean;
              ext: {
                highlightedLabel: {
                  r: {
                    ok: {};
                  };
                  ttl: number;
                };
                hasNftAvatar: {
                  r: {
                    ok: boolean;
                  };
                  ttl: number;
                };
              };
              require_some_consent: boolean;
            };
          };
          card_platform: {
            platform: {
              device: {
                name: string;
                version: string;
              };
              audience: {
                name: string;
                bucket: null;
              };
            };
          };
        };
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1622866238711152640"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: unknown[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: {
            url: string;
            expanded_url: string;
            display_url: string;
            indices: number[];
          }[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        card: {
          name: string;
          url: string;
          card_type_url: string;
          binding_values: {
            vanity_url: {
              type: string;
              string_value: string;
              scribe_key: string;
            };
            domain: {
              type: string;
              string_value: string;
            };
            creator: {
              type: string;
              user_value: {
                id_str: string;
                path: unknown[];
              };
            };
            site: {
              type: string;
              user_value: {
                id_str: string;
                path: unknown[];
              };
              scribe_key: string;
            };
            title: {
              type: string;
              string_value: string;
            };
            description: {
              type: string;
              string_value: string;
            };
            thumbnail_image_small: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            thumbnail_image: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            thumbnail_image_large: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            thumbnail_image_x_large: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            thumbnail_image_color: {
              type: string;
              image_color_value: {
                palette: {
                  percentage: number;
                  rgb: {
                    red: number;
                    green: number;
                    blue: number;
                  };
                }[];
              };
            };
            thumbnail_image_original: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            summary_photo_image_small: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            summary_photo_image: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            summary_photo_image_large: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            summary_photo_image_x_large: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            summary_photo_image_color: {
              type: string;
              image_color_value: {
                palette: {
                  percentage: number;
                  rgb: {
                    red: number;
                    green: number;
                    blue: number;
                  };
                }[];
              };
            };
            summary_photo_image_original: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            photo_image_full_size_small: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            photo_image_full_size: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            photo_image_full_size_large: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            photo_image_full_size_x_large: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            photo_image_full_size_color: {
              type: string;
              image_color_value: {
                palette: {
                  percentage: number;
                  rgb: {
                    red: number;
                    green: number;
                    blue: number;
                  };
                }[];
              };
            };
            photo_image_full_size_original: {
              type: string;
              image_value: {
                url: string;
                width: number;
                height: number;
                alt: null;
              };
            };
            card_url: {
              type: string;
              string_value: string;
              scribe_key: string;
            };
          };
          users: {
            "46588298": {
              id: number;
              id_str: string;
              name: string;
              screen_name: string;
              location: string;
              description: string;
              url: string;
              entities: {
                url: {
                  urls: {
                    url: string;
                    expanded_url: string;
                    display_url: string;
                    indices: number[];
                  }[];
                };
                description: {
                  urls: {
                    url: string;
                    expanded_url: string;
                    display_url: string;
                    indices: number[];
                  }[];
                };
              };
              protected: boolean;
              followers_count: number;
              fast_followers_count: number;
              normal_followers_count: number;
              friends_count: number;
              listed_count: number;
              created_at: string;
              favourites_count: number;
              utc_offset: null;
              time_zone: null;
              geo_enabled: boolean;
              verified: boolean;
              statuses_count: number;
              media_count: number;
              lang: null;
              contributors_enabled: boolean;
              is_translator: boolean;
              is_translation_enabled: boolean;
              profile_background_color: string;
              profile_background_image_url: string;
              profile_background_image_url_https: string;
              profile_background_tile: boolean;
              profile_image_url: string;
              profile_image_url_https: string;
              profile_banner_url: string;
              profile_image_extensions_sensitive_media_warning: null;
              profile_image_extensions_media_availability: null;
              profile_image_extensions_alt_text: null;
              profile_image_extensions_media_color: {
                palette: {
                  rgb: {
                    red: number;
                    green: number;
                    blue: number;
                  };
                  percentage: number;
                }[];
              };
              profile_image_extensions: {
                mediaStats: {
                  r: {
                    missing: null;
                  };
                  ttl: number;
                };
              };
              profile_banner_extensions_sensitive_media_warning: null;
              profile_banner_extensions_media_availability: null;
              profile_banner_extensions_alt_text: null;
              profile_banner_extensions_media_color: {
                palette: {
                  rgb: {
                    red: number;
                    green: number;
                    blue: number;
                  };
                  percentage: number;
                }[];
              };
              profile_banner_extensions: {
                mediaStats: {
                  r: {
                    missing: null;
                  };
                  ttl: number;
                };
              };
              profile_link_color: string;
              profile_sidebar_border_color: string;
              profile_sidebar_fill_color: string;
              profile_text_color: string;
              profile_use_background_image: boolean;
              has_extended_profile: boolean;
              default_profile: boolean;
              default_profile_image: boolean;
              pinned_tweet_ids: unknown[];
              pinned_tweet_ids_str: unknown[];
              has_custom_timelines: boolean;
              can_dm: null;
              can_media_tag: boolean;
              following: boolean;
              follow_request_sent: boolean;
              notifications: boolean;
              muting: boolean;
              blocking: boolean;
              blocked_by: boolean;
              want_retweets: boolean;
              advertiser_account_type: string;
              advertiser_account_service_levels: unknown[];
              business_profile_state: string;
              translator_type: string;
              withheld_in_countries: unknown[];
              followed_by: boolean;
              ext_verified_type: string;
              ext_has_nft_avatar: boolean;
              ext_is_blue_verified: boolean;
              ext: {
                highlightedLabel: {
                  r: {
                    ok: {};
                  };
                  ttl: number;
                };
                hasNftAvatar: {
                  r: {
                    ok: boolean;
                  };
                  ttl: number;
                };
              };
              require_some_consent: boolean;
            };
          };
          card_platform: {
            platform: {
              device: {
                name: string;
                version: string;
              };
              audience: {
                name: string;
                bucket: null;
              };
            };
          };
        };
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
        };
      };
      "1622716770728509442"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: unknown[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: unknown[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1622534297084383232"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: {
            text: string;
            indices: number[];
          }[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: unknown[];
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              small: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
              small: {
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
              large: {
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
          }[];
        };
        extended_entities: {
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              small: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
              small: {
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
              large: {
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
            media_key: string;
            ext_sensitive_media_warning: null;
            ext_media_availability: {
              status: string;
            };
            ext_alt_text: null;
            ext_media_color: {
              palette: {
                rgb: {
                  red: number;
                  green: number;
                  blue: number;
                };
                percentage: number;
              }[];
            };
            ext: {
              mediaStats: {
                r: string;
                ttl: number;
              };
            };
          }[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1622566169629851648"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: unknown[];
          symbols: unknown[];
          user_mentions: {
            screen_name: string;
            name: string;
            id: number;
            id_str: string;
            indices: number[];
          }[];
          urls: unknown[];
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
              medium: {
                faces: {
                  x: number;
                  y: number;
                  h: number;
                  w: number;
                }[];
              };
              large: {
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
              small: {
                faces: {
                  x: number;
                  y: number;
                  h: number;
                  w: number;
                }[];
              };
            };
          }[];
        };
        extended_entities: {
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
              medium: {
                faces: {
                  x: number;
                  y: number;
                  h: number;
                  w: number;
                }[];
              };
              large: {
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
              small: {
                faces: {
                  x: number;
                  y: number;
                  h: number;
                  w: number;
                }[];
              };
            };
            media_key: string;
            ext_sensitive_media_warning: null;
            ext_media_availability: {
              status: string;
            };
            ext_alt_text: null;
            ext_media_color: {
              palette: {
                rgb: {
                  red: number;
                  green: number;
                  blue: number;
                };
                percentage: number;
              }[];
            };
            ext: {
              mediaStats: {
                r: string;
                ttl: number;
              };
            };
          }[];
        };
        source: string;
        in_reply_to_status_id: number;
        in_reply_to_status_id_str: string;
        in_reply_to_user_id: number;
        in_reply_to_user_id_str: string;
        in_reply_to_screen_name: string;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1622566954019229696"?: {
        created_at: string;
        id: number;
        id_str: string;
        full_text: string;
        truncated: boolean;
        display_text_range: number[];
        entities: {
          hashtags: {
            text: string;
            indices: number[];
          }[];
          symbols: unknown[];
          user_mentions: unknown[];
          urls: unknown[];
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
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
              orig: {
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
            };
          }[];
        };
        extended_entities: {
          media: {
            id: number;
            id_str: string;
            indices: number[];
            media_url: string;
            media_url_https: string;
            url: string;
            display_url: string;
            expanded_url: string;
            type: string;
            original_info: {
              width: number;
              height: number;
              focus_rects: {
                x: number;
                y: number;
                h: number;
                w: number;
              }[];
            };
            sizes: {
              thumb: {
                w: number;
                h: number;
                resize: string;
              };
              large: {
                w: number;
                h: number;
                resize: string;
              };
              medium: {
                w: number;
                h: number;
                resize: string;
              };
              small: {
                w: number;
                h: number;
                resize: string;
              };
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
              orig: {
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
            };
            media_key: string;
            ext_sensitive_media_warning: null;
            ext_media_availability: {
              status: string;
            };
            ext_alt_text: null;
            ext_media_color: {
              palette: {
                rgb: {
                  red: number;
                  green: number;
                  blue: number;
                };
                percentage: number;
              }[];
            };
            ext: {
              mediaStats: {
                r: string;
                ttl: number;
              };
            };
          }[];
        };
        source: string;
        in_reply_to_status_id: null;
        in_reply_to_status_id_str: null;
        in_reply_to_user_id: null;
        in_reply_to_user_id_str: null;
        in_reply_to_screen_name: null;
        user_id: number;
        user_id_str: string;
        geo: null;
        coordinates: null;
        place: null;
        contributors: null;
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        lang: string;
        supplemental_language: null;
        self_thread: {
          id: number;
          id_str: string;
        };
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          editControl: {
            r: {
              ok: {
                initial: {
                  editTweetIds: string[];
                  editableUntilMsecs: string;
                  editsRemaining: string;
                  isEditEligible: boolean;
                };
              };
            };
            ttl: number;
          };
        };
      };
    };
    users: {
      "42201791"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: string;
        entities: {
          url: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
          description: {
            urls: unknown[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: string;
        profile_background_image_url_https: string;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: number[];
        pinned_tweet_ids_str: string[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "46588298"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: string;
        entities: {
          url: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
          description: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: string;
        profile_background_image_url_https: string;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: unknown[];
        pinned_tweet_ids_str: unknown[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_verified_type: string;
        ext_has_nft_avatar: boolean;
        ext_is_blue_verified: boolean;
        ext: {
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "67341582"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: string;
        entities: {
          url: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
          description: {
            urls: unknown[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: string;
        profile_background_image_url_https: string;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: number[];
        pinned_tweet_ids_str: string[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "87744508"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: string;
        entities: {
          url: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
          description: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: string;
        profile_background_image_url_https: string;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: number[];
        pinned_tweet_ids_str: string[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_has_nft_avatar: boolean;
        ext_is_blue_verified: boolean;
        ext: {
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "88846085"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: string;
        entities: {
          url: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
          description: {
            urls: unknown[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: string;
        profile_background_image_url_https: string;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: unknown[];
        pinned_tweet_ids_str: unknown[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_has_nft_avatar: boolean;
        ext_is_blue_verified: boolean;
        ext_verified_type: string;
        ext: {
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "89142182"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: string;
        entities: {
          url: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
          description: {
            urls: unknown[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: string;
        profile_background_image_url_https: string;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: unknown[];
        pinned_tweet_ids_str: unknown[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_has_nft_avatar: boolean;
        ext_is_blue_verified: boolean;
        ext_verified_type: string;
        ext: {
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "93311525"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: string;
        entities: {
          url: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
          description: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: string;
        profile_background_image_url_https: string;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: unknown[];
        pinned_tweet_ids_str: unknown[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_verified_type: string;
        ext_has_nft_avatar: boolean;
        ext_is_blue_verified: boolean;
        ext: {
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "123214059"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: string;
        entities: {
          url: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
          description: {
            urls: unknown[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: string;
        profile_background_image_url_https: string;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: number[];
        pinned_tweet_ids_str: string[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_has_nft_avatar: boolean;
        ext_is_blue_verified: boolean;
        ext: {
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "129471863"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: string;
        entities: {
          url: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
          description: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: string;
        profile_background_image_url_https: string;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: number[];
        pinned_tweet_ids_str: string[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "133684052"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: string;
        entities: {
          url: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
          description: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: string;
        profile_background_image_url_https: string;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: number[];
        pinned_tweet_ids_str: string[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext_verified_type: string;
        ext: {
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "153876355"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: string;
        entities: {
          url: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
          description: {
            urls: unknown[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: string;
        profile_background_image_url_https: string;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: unknown[];
        pinned_tweet_ids_str: unknown[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_has_nft_avatar: boolean;
        ext_is_blue_verified: boolean;
        ext_verified_type: string;
        ext: {
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "337137982"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: null;
        entities: {
          description: {
            urls: unknown[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: string;
        profile_background_image_url_https: string;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: unknown[];
        pinned_tweet_ids_str: unknown[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_has_nft_avatar: boolean;
        ext_is_blue_verified: boolean;
        ext: {
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "348643924"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: string;
        entities: {
          url: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
          description: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: string;
        profile_background_image_url_https: string;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: unknown[];
        pinned_tweet_ids_str: unknown[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_has_nft_avatar: boolean;
        ext_is_blue_verified: boolean;
        ext: {
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "418573546"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: string;
        entities: {
          url: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
          description: {
            urls: unknown[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: string;
        profile_background_image_url_https: string;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: number[];
        pinned_tweet_ids_str: string[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "475615015"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: string;
        entities: {
          url: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
          description: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: string;
        profile_background_image_url_https: string;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: unknown[];
        pinned_tweet_ids_str: unknown[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_verified_type: string;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "970741633"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: string;
        entities: {
          url: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
          description: {
            urls: unknown[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: string;
        profile_background_image_url_https: string;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: number[];
        pinned_tweet_ids_str: string[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_has_nft_avatar: boolean;
        ext_is_blue_verified: boolean;
        ext: {
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "1259488344"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: null;
        entities: {
          description: {
            urls: unknown[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: string;
        profile_background_image_url_https: string;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: unknown[];
        pinned_tweet_ids_str: unknown[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "1425626336"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: null;
        entities: {
          description: {
            urls: unknown[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: string;
        profile_background_image_url_https: string;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: number[];
        pinned_tweet_ids_str: string[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "1587691369"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: string;
        entities: {
          url: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
          description: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: string;
        profile_background_image_url_https: string;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: number[];
        pinned_tweet_ids_str: string[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_has_nft_avatar: boolean;
        ext_is_blue_verified: boolean;
        ext: {
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "1682871692"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: string;
        entities: {
          url: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
          description: {
            urls: unknown[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: string;
        profile_background_image_url_https: string;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: number[];
        pinned_tweet_ids_str: string[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_has_nft_avatar: boolean;
        ext_is_blue_verified: boolean;
        ext: {
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "2173047390"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: string;
        entities: {
          url: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
          description: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: string;
        profile_background_image_url_https: string;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: number[];
        pinned_tweet_ids_str: string[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_has_nft_avatar: boolean;
        ext_is_blue_verified: boolean;
        ext: {
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "2412148106"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: string;
        entities: {
          url: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
          description: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: string;
        profile_background_image_url_https: string;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: number[];
        pinned_tweet_ids_str: string[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "2483265084"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: string;
        entities: {
          url: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
          description: {
            urls: unknown[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: string;
        profile_background_image_url_https: string;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: unknown[];
        pinned_tweet_ids_str: unknown[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_verified_type: string;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "2691870948"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: null;
        entities: {
          description: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: string;
        profile_background_image_url_https: string;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: unknown[];
        pinned_tweet_ids_str: unknown[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_has_nft_avatar: boolean;
        ext_is_blue_verified: boolean;
        ext_verified_type: string;
        ext: {
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "3221478144"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: string;
        entities: {
          url: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
          description: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: string;
        profile_background_image_url_https: string;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: number[];
        pinned_tweet_ids_str: string[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "4030203792"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: string;
        entities: {
          url: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
          description: {
            urls: unknown[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: string;
        profile_background_image_url_https: string;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: number[];
        pinned_tweet_ids_str: string[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_has_nft_avatar: boolean;
        ext_verified_type: string;
        ext_is_blue_verified: boolean;
        ext: {
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "4114626258"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: string;
        entities: {
          url: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
          description: {
            urls: unknown[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: string;
        profile_background_image_url_https: string;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: number[];
        pinned_tweet_ids_str: string[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "4644145430"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: string;
        entities: {
          url: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
          description: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: null;
        profile_background_image_url_https: null;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: number[];
        pinned_tweet_ids_str: string[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "1240627844868268033"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: string;
        entities: {
          url: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
          description: {
            urls: unknown[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: null;
        profile_background_image_url_https: null;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: unknown[];
        pinned_tweet_ids_str: unknown[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "983917124648255490"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: null;
        entities: {
          description: {
            urls: unknown[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: null;
        profile_background_image_url_https: null;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: number[];
        pinned_tweet_ids_str: string[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "1250607208519200768"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: null;
        entities: {
          description: {
            urls: unknown[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: null;
        profile_background_image_url_https: null;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: number[];
        pinned_tweet_ids_str: string[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_has_nft_avatar: boolean;
        ext_is_blue_verified: boolean;
        ext: {
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "1257596651281068034"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: null;
        entities: {
          description: {
            urls: unknown[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: null;
        profile_background_image_url_https: null;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: unknown[];
        pinned_tweet_ids_str: unknown[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "958336479188701188"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: string;
        entities: {
          url: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
          description: {
            urls: unknown[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: null;
        profile_background_image_url_https: null;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: unknown[];
        pinned_tweet_ids_str: unknown[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "971549641777995777"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: null;
        entities: {
          description: {
            urls: unknown[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: null;
        profile_background_image_url_https: null;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: unknown[];
        pinned_tweet_ids_str: unknown[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_verified_type: string;
        ext_has_nft_avatar: boolean;
        ext_is_blue_verified: boolean;
        ext: {
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "1385765618209628160"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: null;
        entities: {
          description: {
            urls: unknown[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: null;
        profile_background_image_url_https: null;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: number[];
        pinned_tweet_ids_str: string[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_has_nft_avatar: boolean;
        ext_is_blue_verified: boolean;
        ext: {
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "799629701601837056"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: string;
        entities: {
          url: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
          description: {
            urls: unknown[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: null;
        profile_background_image_url_https: null;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: number[];
        pinned_tweet_ids_str: string[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_verified_type: string;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "1393173063248711681"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: string;
        entities: {
          url: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
          description: {
            urls: unknown[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: null;
        profile_background_image_url_https: null;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: unknown[];
        pinned_tweet_ids_str: unknown[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "1462445760507748353"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: null;
        entities: {
          description: {
            urls: unknown[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: null;
        profile_background_image_url_https: null;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: unknown[];
        pinned_tweet_ids_str: unknown[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_has_nft_avatar: boolean;
        ext_is_blue_verified: boolean;
        ext: {
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "1414532712904282112"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: string;
        entities: {
          url: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
          description: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: null;
        profile_background_image_url_https: null;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: number[];
        pinned_tweet_ids_str: string[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_has_nft_avatar: boolean;
        ext_is_blue_verified: boolean;
        ext: {
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "1237939853045583872"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: string;
        entities: {
          url: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
          description: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: null;
        profile_background_image_url_https: null;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: number[];
        pinned_tweet_ids_str: string[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "1609681667924582401"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: string;
        entities: {
          url: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
          description: {
            urls: unknown[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: null;
        profile_background_image_url_https: null;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: number[];
        pinned_tweet_ids_str: string[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "731668649119977473"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: null;
        entities: {
          description: {
            urls: unknown[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: null;
        profile_background_image_url_https: null;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: unknown[];
        pinned_tweet_ids_str: unknown[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_has_nft_avatar: boolean;
        ext_is_blue_verified: boolean;
        ext: {
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "745131593392488449"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: string;
        entities: {
          url: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
          description: {
            urls: unknown[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: null;
        profile_background_image_url_https: null;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: number[];
        pinned_tweet_ids_str: string[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_verified_type: string;
        ext_has_nft_avatar: boolean;
        ext: {
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "1571270531604942848"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: string;
        entities: {
          url: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
          description: {
            urls: unknown[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: null;
        profile_background_image_url_https: null;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: number[];
        pinned_tweet_ids_str: string[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_has_nft_avatar: boolean;
        ext_is_blue_verified: boolean;
        ext: {
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "1207565254135123968"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: string;
        entities: {
          url: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
          description: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: string;
        profile_background_image_url_https: string;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: number[];
        pinned_tweet_ids_str: string[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_has_nft_avatar: boolean;
        ext_is_blue_verified: boolean;
        ext: {
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "1558987639159951361"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: string;
        entities: {
          url: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
          description: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: null;
        profile_background_image_url_https: null;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: number[];
        pinned_tweet_ids_str: string[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "1163746138731585537"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: string;
        entities: {
          url: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
          description: {
            urls: unknown[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: null;
        profile_background_image_url_https: null;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: unknown[];
        pinned_tweet_ids_str: unknown[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "1491048209581768705"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: string;
        entities: {
          url: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
          description: {
            urls: unknown[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: null;
        profile_background_image_url_https: null;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: number[];
        pinned_tweet_ids_str: string[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_has_nft_avatar: boolean;
        ext_is_blue_verified: boolean;
        ext: {
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "1285839952840777728"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: null;
        entities: {
          description: {
            urls: unknown[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: null;
        profile_background_image_url_https: null;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: number[];
        pinned_tweet_ids_str: string[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_has_nft_avatar: boolean;
        ext_is_blue_verified: boolean;
        ext: {
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "1438507147923386376"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: null;
        entities: {
          description: {
            urls: unknown[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: null;
        profile_background_image_url_https: null;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: number[];
        pinned_tweet_ids_str: string[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "1584747317868912641"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: null;
        entities: {
          description: {
            urls: unknown[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: null;
        profile_background_image_url_https: null;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: number[];
        pinned_tweet_ids_str: string[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_has_nft_avatar: boolean;
        ext_is_blue_verified: boolean;
        ext: {
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "1249910983994118145"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: string;
        entities: {
          url: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
          description: {
            urls: unknown[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: null;
        profile_background_image_url_https: null;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: number[];
        pinned_tweet_ids_str: string[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "1428157075159355402"?: {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        location: string;
        description: string;
        url: string;
        entities: {
          url: {
            urls: {
              url: string;
              expanded_url: string;
              display_url: string;
              indices: number[];
            }[];
          };
          description: {
            urls: unknown[];
          };
        };
        protected: boolean;
        followers_count: number;
        fast_followers_count: number;
        normal_followers_count: number;
        friends_count: number;
        listed_count: number;
        created_at: string;
        favourites_count: number;
        utc_offset: null;
        time_zone: null;
        geo_enabled: boolean;
        verified: boolean;
        statuses_count: number;
        media_count: number;
        lang: null;
        contributors_enabled: boolean;
        is_translator: boolean;
        is_translation_enabled: boolean;
        profile_background_color: string;
        profile_background_image_url: null;
        profile_background_image_url_https: null;
        profile_background_tile: boolean;
        profile_image_url: string;
        profile_image_url_https: string;
        profile_banner_url: string;
        profile_image_extensions_sensitive_media_warning: null;
        profile_image_extensions_media_availability: null;
        profile_image_extensions_alt_text: null;
        profile_image_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_image_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_banner_extensions_sensitive_media_warning: null;
        profile_banner_extensions_media_availability: null;
        profile_banner_extensions_alt_text: null;
        profile_banner_extensions_media_color: {
          palette: {
            rgb: {
              red: number;
              green: number;
              blue: number;
            };
            percentage: number;
          }[];
        };
        profile_banner_extensions: {
          mediaStats: {
            r: {
              missing: null;
            };
            ttl: number;
          };
        };
        profile_link_color: string;
        profile_sidebar_border_color: string;
        profile_sidebar_fill_color: string;
        profile_text_color: string;
        profile_use_background_image: boolean;
        has_extended_profile: boolean;
        default_profile: boolean;
        default_profile_image: boolean;
        pinned_tweet_ids: number[];
        pinned_tweet_ids_str: string[];
        has_custom_timelines: boolean;
        can_dm: null;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: unknown[];
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          hasNftAvatar: {
            r: {
              ok: boolean;
            };
            ttl: number;
          };
          highlightedLabel: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
    };
    moments: {};
    cards: {};
    places: {};
    media: {};
    broadcasts: {};
    topics: {
      "847524658970636288"?: {
        id: string;
        name: string;
        following: boolean;
        description: string;
        not_interested: boolean;
        icon_url: string;
      };
      "10045599546"?: {
        id: string;
        name: string;
        following: boolean;
        description: string;
        not_interested: boolean;
        icon_url: string;
      };
      "1196446161223028736"?: {
        id: string;
        name: string;
        following: boolean;
        description: string;
        not_interested: boolean;
        icon_url: string;
      };
      "733756536430809088"?: {
        id: string;
        name: string;
        following: boolean;
        description: string;
        not_interested: boolean;
        icon_url: string;
      };
      "1284234742661963776"?: {
        id: string;
        name: string;
        following: boolean;
        description: string;
        not_interested: boolean;
        icon_url: string;
      };
    };
    lists: {};
  };
  timeline: {
    id: string;
    instructions: {
      clearCache?: {};
      addEntries?: {
        entries: {
          entryId: string;
          sortIndex: string;
          content: {
            operation?: {
              cursor: {
                value: string;
                cursorType: string;
              };
            };
            timelineModule?: {
              items: {
                entryId: string;
                item: {
                  content: {
                    trend?: {
                      name: string;
                      url: {
                        urlType: string;
                        url: string;
                        urtEndpointOptions: {
                          requestParams: {
                            cd: string;
                          };
                        };
                      };
                      associatedCardUrls: unknown[];
                      trendMetadata: {
                        url?: {
                          urlType: string;
                          url: string;
                          urtEndpointOptions: {
                            requestParams: {
                              cd: string;
                            };
                          };
                        };
                        domainContext?: string;
                        metaDescription?: string;
                      };
                      groupedTrends?: {
                        name: string;
                        url: {
                          urlType: string;
                          url: string;
                          urtEndpointOptions: {
                            requestParams: {
                              cd: string;
                            };
                          };
                        };
                      }[];
                      rank?: string;
                      promotedMetadata?: {
                        advertiserId: string;
                        disclosureType: string;
                        promotedTrendId: string;
                        promotedTrendName: string;
                        promotedTrendQueryTerm: string;
                        impressionString: string;
                      };
                      description?: string;
                      metaDescription?: string;
                    };
                    user?: {
                      id: string;
                      displayType: string;
                      enableReactiveBlending: boolean;
                    };
                    tweet?: {
                      id: string;
                      displayType: string;
                    };
                    topicFollowPrompt?: {
                      topicId: string;
                      displayType: string;
                    };
                  };
                  clientEventInfo: {
                    component: string;
                    element: string;
                    details: {
                      guideDetails: {
                        identifier: string;
                        token?: string;
                        transparentGuideDetails?: {
                          trendMetadata?: {
                            impressionId: string;
                            impressionToken?: string;
                            position: number;
                            trendName: string;
                            associatedCuratedTweetIds?: unknown[];
                            containsCuratedTitle: boolean;
                            topicIds?: string[];
                            displayedTopicId?: string;
                            clusterId?: string;
                            displayedRelatedVariants?: string[];
                            relatedTerms?: string[];
                            promotedTrendId?: string;
                            promotedImpressionId?: string;
                            promotedDisclosureType?: string;
                          };
                          topicMetadata?: {
                            semanticCoreInterest: {
                              domainId: string;
                              entityId: string;
                            };
                          };
                        };
                      };
                      timelinesDetails?: {
                        injectionType: string;
                        sourceData: string;
                      };
                    };
                  };
                  feedbackInfo?: {
                    feedbackKeys: string[];
                    feedbackMetadata: string;
                    clientEventInfo: {
                      component: string;
                      element: string;
                      action: string;
                    };
                  };
                };
              }[];
              displayType: string;
              clientEventInfo: {
                component: string;
                details: {
                  guideDetails: {
                    identifier: string;
                    token?: string;
                    transparentGuideDetails?: {
                      topicMetadata: {
                        semanticCoreInterest: {
                          domainId: string;
                          entityId: string;
                        };
                      };
                    };
                  };
                };
                element?: string;
              };
              header?: {
                text: string;
                displayType: string;
                sticky?: boolean;
                icon?: string;
              };
              footer?: {
                text: string;
                url: string;
                displayType: string;
              };
              feedbackInfo?: {
                feedbackKeys: string[];
                feedbackMetadata: string;
              };
            };
          };
        }[];
      };
      terminateTimeline?: {
        direction: string;
      };
    }[];
    responseObjects: {
      feedbackActions: {
        trend_irrelevant_content_feedback_key: {
          feedbackType: string;
          prompt: string;
          confirmation: string;
          feedbackUrl: string;
          hasUndoAction: boolean;
          confirmationDisplayType: string;
        };
        spotlight_dismiss_feedback_key: {
          feedbackType: string;
          prompt: string;
          confirmation: string;
          hasUndoAction: boolean;
          confirmationDisplayType: string;
        };
        trend_abusive_feedback_key: {
          feedbackType: string;
          prompt: string;
          confirmation: string;
          feedbackUrl: string;
          hasUndoAction: boolean;
          confirmationDisplayType: string;
        };
        guide_not_interested_feedback_key: {
          feedbackType: string;
          prompt: string;
          confirmation: string;
          feedbackUrl: string;
          hasUndoAction: boolean;
          confirmationDisplayType: string;
          icon: string;
        };
        guide_see_more_feedback_key: {
          feedbackType: string;
          prompt: string;
          confirmation: string;
          feedbackUrl: string;
          hasUndoAction: boolean;
          confirmationDisplayType: string;
        };
        trend_spam_feedback_key: {
          feedbackType: string;
          prompt: string;
          confirmation: string;
          feedbackUrl: string;
          hasUndoAction: boolean;
          confirmationDisplayType: string;
        };
        trend_low_quality_feedback_key: {
          feedbackType: string;
          prompt: string;
          confirmation: string;
          feedbackUrl: string;
          hasUndoAction: boolean;
          confirmationDisplayType: string;
        };
        guide_see_less_feedback_key: {
          feedbackType: string;
          prompt: string;
          confirmation: string;
          feedbackUrl: string;
          hasUndoAction: boolean;
          confirmationDisplayType: string;
        };
        trend_not_interested_in_this_feedback_key: {
          feedbackType: string;
          prompt: string;
          confirmation: string;
          feedbackUrl: string;
          hasUndoAction: boolean;
          confirmationDisplayType: string;
        };
        trend_abusive_or_harmful_feedback_key: {
          feedbackType: string;
          prompt: string;
          confirmation: string;
          feedbackUrl: string;
          hasUndoAction: boolean;
          confirmationDisplayType: string;
        };
        guide_hide_topic_key: {
          feedbackType: string;
          prompt: string;
          confirmation: string;
          feedbackUrl: string;
          hasUndoAction: boolean;
          confirmationDisplayType: string;
          icon: string;
        };
        trend_duplicate_feedback_key: {
          feedbackType: string;
          prompt: string;
          confirmation: string;
          feedbackUrl: string;
          hasUndoAction: boolean;
          confirmationDisplayType: string;
        };
      };
    };
  };
  pageConfiguration?: {
    id: string;
    title: string;
    tabs: {
      tabs: {
        id: string;
        labelText: string;
        urtEndpoint: {
          urlType: string;
          url: string;
          urtEndpointOptions: {
            requestParams: {
              tab_category: string;
              sc_category_id?: string;
            };
            cacheId?: string;
          };
        };
        scribeConfig: {
          page: string;
          section: string;
        };
      }[];
      initialTabId: string;
    };
    scribeConfig: {
      page: string;
      section: string;
    };
  };
}
