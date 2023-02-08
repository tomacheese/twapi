export interface RestSearchAdaptiveResponse {
  globalObjects: {
    tweets: {
      "1621831086644019201"?: {
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
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
        };
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext: {
          superFollowMetadata: {
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
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621829453499498496"?: {
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
                faces: unknown[];
              };
              large: {
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
              medium: {
                w: number;
                h: number;
                resize: string;
              };
            };
            features: {
              small: {
                faces: unknown[];
              };
              large: {
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
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext: {
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
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
      "1621831032180981760"?: {
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
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count?: string;
        };
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext: {
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          superFollowMetadata: {
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
      "1621830016345714688"?: {
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
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
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
      "1621829070354006020"?: {
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
        lang: string;
        supplemental_language: null;
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
            r: {
              ok: {};
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
      "1621829689630416904"?: {
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
                faces: unknown[];
              };
              orig: {
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
              small: {
                faces: unknown[];
              };
              orig: {
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
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621829232895864832"?: {
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
              medium: {
                faces: unknown[];
              };
              small: {
                faces: unknown[];
              };
              large: {
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
              large: {
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
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621830134490873856"?: {
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
        lang: string;
        supplemental_language: null;
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
            r: {
              ok: {};
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
      "1621830221866405888"?: {
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
              medium: {
                faces: unknown[];
              };
              orig: {
                faces: unknown[];
              };
              small: {
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
              orig: {
                faces: unknown[];
              };
              small: {
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
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
            r: {
              ok: {};
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
      "1621830003515355136"?: {
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
        ext_views: {
          state: string;
          count: string;
        };
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext: {
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
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
      "1621830393501732869"?: {
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
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext: {
          superFollowMetadata: {
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
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621830232184610816"?: {
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
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
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
      "1621830458546978816"?: {
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
        lang: string;
        supplemental_language: null;
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
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
      "1621829422008631297"?: {
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
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext: {
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
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
      "1621829889077968896"?: {
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
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext: {
          superFollowMetadata: {
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
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1620340355957915648"?: {
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
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        scopes: {
          followers: boolean;
        };
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
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          superFollowMetadata: {
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
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621829030290018304"?: {
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
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext: {
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
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
      "1617737078409666562"?: {
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
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        scopes: {
          followers: boolean;
        };
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
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          superFollowMetadata: {
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
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621829650531119105"?: {
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
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext: {
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
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
      "1618551677665300481"?: {
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
        contributors: number[];
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        conversation_control: {
          policy: string;
          conversation_owner: {
            screen_name: string;
          };
        };
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        limited_actions: string;
        scopes: {
          followers: boolean;
        };
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
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext: {
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          superFollowMetadata: {
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
      "1621831017177960449"?: {
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
        lang: string;
        supplemental_language: null;
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
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
      "1621831053311893505"?: {
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
        lang: string;
        supplemental_language: null;
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext_views: {
          state: string;
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
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621830978191908869"?: {
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
        lang: string;
        supplemental_language: null;
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
            r: {
              ok: {};
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
      "1621829109121941504"?: {
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
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext: {
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          superFollowMetadata: {
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
      "1621828959595012098"?: {
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
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext: {
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
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
      "1590871563330809856"?: {
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
        contributors: number[];
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        conversation_control: {
          policy: string;
          conversation_owner: {
            screen_name: string;
          };
        };
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        limited_actions: string;
        scopes: {
          followers: boolean;
        };
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
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext_views: {
          state: string;
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
          superFollowMetadata: {
            r: {
              ok: {};
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
      "1621830306381828098"?: {
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
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621830749505880064"?: {
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
        lang: string;
        supplemental_language: null;
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
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
      "1621830884512133120"?: {
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
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
            r: {
              ok: {};
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
      "1621830676445270016"?: {
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
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext: {
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
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
      "1621828851809796098"?: {
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
        lang: string;
        supplemental_language: null;
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621830839465287680"?: {
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
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext: {
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          superFollowMetadata: {
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
      "1621828832255959043"?: {
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
        lang: string;
        supplemental_language: null;
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
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
      "1621829360998313984"?: {
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
        lang: string;
        supplemental_language: null;
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1618551680454512648"?: {
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
        contributors: number[];
        is_quote_status: boolean;
        retweet_count: number;
        favorite_count: number;
        reply_count: number;
        quote_count: number;
        conversation_id: number;
        conversation_id_str: string;
        conversation_control: {
          policy: string;
          conversation_owner: {
            screen_name: string;
          };
        };
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        limited_actions: string;
        scopes: {
          followers: boolean;
        };
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
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext: {
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
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
      "1621829775252951040"?: {
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
        lang: string;
        supplemental_language: null;
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
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
      "1621829140243689473"?: {
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
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext: {
          superFollowMetadata: {
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
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621831054725378050"?: {
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
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count?: string;
        };
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621830825796079616"?: {
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
        lang: string;
        supplemental_language: null;
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
            r: {
              ok: {};
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
      "1621829754495315968"?: {
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
        lang: string;
        supplemental_language: null;
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
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
      "1621829233793433600"?: {
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
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
            r: {
              ok: {};
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
      "1621830680752840704"?: {
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
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext: {
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          superFollowMetadata: {
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
      "1621830167567151104"?: {
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
        lang: string;
        supplemental_language: null;
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
            r: {
              ok: {};
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
      "1621829934498058240"?: {
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
                faces: unknown[];
              };
              orig: {
                faces: unknown[];
              };
              small: {
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
                faces: unknown[];
              };
              orig: {
                faces: unknown[];
              };
              small: {
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
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext: {
          superFollowMetadata: {
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
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621830649178112000"?: {
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
        lang: string;
        supplemental_language: null;
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621830770221535233"?: {
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
        lang: string;
        supplemental_language: null;
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621828863574831104"?: {
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
        lang: string;
        supplemental_language: null;
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          superFollowMetadata: {
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
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621828903504580609"?: {
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
        lang: string;
        supplemental_language: null;
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
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
      "1621830241621778432"?: {
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
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext: {
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
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
      "1621829438479671297"?: {
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
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext: {
          superFollowMetadata: {
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
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621828935196745728"?: {
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
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext: {
          superFollowMetadata: {
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
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621829616385286144"?: {
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
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext: {
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
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
      "1621829970388717570"?: {
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
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext: {
          superFollowMetadata: {
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
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621830348857544705"?: {
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
        lang: string;
        supplemental_language: null;
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621830800378576897"?: {
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
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621829863127810050"?: {
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
        lang: string;
        supplemental_language: null;
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621830808159002624"?: {
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
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext: {
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
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
      "1621829750628171778"?: {
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
        lang: string;
        supplemental_language: null;
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621830263352475649"?: {
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
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
            r: {
              ok: {};
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
      "1618224229253795842"?: {
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
        contributors: number[];
        retweeted_status_id: number;
        retweeted_status_id_str: string;
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
        scopes: {
          followers: boolean;
        };
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
            "1712134879": {
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
              can_dm: boolean;
              can_media_tag: boolean;
              following: boolean;
              follow_request_sent: boolean;
              notifications: boolean;
              muting: boolean;
              blocking: boolean;
              blocked_by: boolean;
              want_retweets: boolean;
              advertiser_account_type: string;
              advertiser_account_service_levels: string[];
              profile_interstitial_type: string;
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
                superFollowMetadata: {
                  r: {
                    ok: {
                      superFollowEligible: boolean;
                      superFollowing: boolean;
                      superFollowedBy: boolean;
                      exclusiveTweetFollowing: boolean;
                      privateSuperFollowing: boolean;
                    };
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
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621829838133940226"?: {
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
        lang: string;
        supplemental_language: null;
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          superFollowMetadata: {
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
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1616450601939779585"?: {
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
        scopes: {
          followers: boolean;
        };
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
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext: {
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          superFollowMetadata: {
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
      "1621828865567117313"?: {
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
        lang: string;
        supplemental_language: null;
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
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
      "1621830098994470912"?: {
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
        lang: string;
        supplemental_language: null;
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621830084461203456"?: {
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
              medium: {
                faces: unknown[];
              };
              orig: {
                faces: unknown[];
              };
              small: {
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
              orig: {
                faces: unknown[];
              };
              small: {
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
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621829760270880768"?: {
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
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1617425055499317248"?: {
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
        scopes: {
          followers: boolean;
        };
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
            "1712134879": {
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
              can_dm: boolean;
              can_media_tag: boolean;
              following: boolean;
              follow_request_sent: boolean;
              notifications: boolean;
              muting: boolean;
              blocking: boolean;
              blocked_by: boolean;
              want_retweets: boolean;
              advertiser_account_type: string;
              advertiser_account_service_levels: string[];
              profile_interstitial_type: string;
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
                superFollowMetadata: {
                  r: {
                    ok: {
                      superFollowEligible: boolean;
                      superFollowing: boolean;
                      superFollowedBy: boolean;
                      exclusiveTweetFollowing: boolean;
                      privateSuperFollowing: boolean;
                    };
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
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          superFollowMetadata: {
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
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621830707659288579"?: {
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
        place: {
          id: string;
          url: string;
          place_type: string;
          name: string;
          full_name: string;
          country_code: string;
          country: string;
          contained_within: unknown[];
          bounding_box: {
            type: string;
            coordinates: number[][][];
          };
          attributes: {};
        };
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
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext: {
          superFollowMetadata: {
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
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1615564451230658561"?: {
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
        contributors: number[];
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
        scopes: {
          followers: boolean;
        };
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
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621830788693254145"?: {
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
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext: {
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          superFollowMetadata: {
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
      "1598240494412144640"?: {
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
        scopes: {
          followers: boolean;
        };
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
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext_views: {
          state: string;
        };
        ext: {
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
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
      "1621830943622434817"?: {
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
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext: {
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
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
      "1621830766601850880"?: {
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
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621830801691389952"?: {
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
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          superFollowMetadata: {
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
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621830853231005698"?: {
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
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621493710872612865"?: {
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
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        scopes: {
          followers: boolean;
        };
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
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext: {
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          superFollowMetadata: {
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
      "1618840800129093632"?: {
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
        contributors: number[];
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
        scopes: {
          followers: boolean;
        };
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
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
            r: {
              ok: {};
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
      "1621830966795964416"?: {
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
        lang: string;
        supplemental_language: null;
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621830817503903747"?: {
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
        lang: string;
        supplemental_language: null;
        ext_views: {
          state: string;
          count: string;
        };
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext: {
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
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
      "1621831146547073024"?: {
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
        lang: string;
        supplemental_language: null;
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext_views: {
          state: string;
        };
        ext: {
          superFollowMetadata: {
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
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621829391545417729"?: {
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
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621829318728093698"?: {
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
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
            r: {
              ok: {};
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
      "1620405951944871937"?: {
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
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621821150467874816"?: {
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
              medium: {
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
              medium: {
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
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
            r: {
              ok: {};
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
      "1621818194670538752"?: {
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
              small: {
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
              small: {
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
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
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
      "1596279974147022848"?: {
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
        };
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621821198375190534"?: {
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
              orig: {
                faces: unknown[];
              };
              small: {
                faces: unknown[];
              };
              large: {
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
              medium: {
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
              large: {
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
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext: {
          superFollowMetadata: {
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
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621831201119178752"?: {
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
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext_views: {
          state: string;
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
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621830690131304450"?: {
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
              medium: {
                faces: unknown[];
              };
              orig: {
                faces: unknown[];
              };
              small: {
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
              orig: {
                faces: unknown[];
              };
              small: {
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
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621821708473864192"?: {
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
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621828847359369218"?: {
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
                faces: unknown[];
              };
              medium: {
                faces: unknown[];
              };
              large: {
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
                faces: unknown[];
              };
              medium: {
                faces: unknown[];
              };
              large: {
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
        conversation_control: {
          policy: string;
          conversation_owner: {
            screen_name: string;
          };
        };
        favorited: boolean;
        retweeted: boolean;
        possibly_sensitive: boolean;
        possibly_sensitive_editable: boolean;
        limited_actions: string;
        lang: string;
        supplemental_language: null;
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          superFollowMetadata: {
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
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621820267948560384"?: {
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
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621828469327028224"?: {
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
                faces: unknown[];
              };
              orig: {
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
                faces: unknown[];
              };
              orig: {
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
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
            r: {
              ok: {};
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
      "1621823939461931008"?: {
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
                faces: unknown[];
              };
              small: {
                faces: unknown[];
              };
              large: {
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
                faces: unknown[];
              };
              small: {
                faces: unknown[];
              };
              large: {
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
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext: {
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
          superFollowMetadata: {
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
      "1619977737799897089"?: {
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
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621820736666238977"?: {
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
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext: {
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
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
      "1621830512070512640"?: {
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
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
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
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621829634139774978"?: {
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
            "4174180574": {
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
              can_dm: boolean;
              can_media_tag: boolean;
              following: boolean;
              follow_request_sent: boolean;
              notifications: boolean;
              muting: boolean;
              blocking: boolean;
              blocked_by: boolean;
              want_retweets: boolean;
              advertiser_account_type: string;
              advertiser_account_service_levels: string[];
              profile_interstitial_type: string;
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
                superFollowMetadata: {
                  r: {
                    ok: {
                      superFollowEligible: boolean;
                      superFollowing: boolean;
                      superFollowedBy: boolean;
                      exclusiveTweetFollowing: boolean;
                      privateSuperFollowing: boolean;
                    };
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
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext_views: {
          state: string;
          count: string;
        };
        ext: {
          superFollowMetadata: {
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
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
      "1621826418861834240"?: {
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
              medium: {
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
              medium: {
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
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext: {
          superFollowMetadata: {
            r: {
              ok: {};
            };
            ttl: number;
          };
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
      "1621824203308802050"?: {
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
        ext_edit_control: {
          initial: {
            edit_tweet_ids: string[];
            editable_until_msecs: string;
            edits_remaining: string;
            is_edit_eligible: boolean;
          };
        };
        ext: {
          superFollowMetadata: {
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
          unmentionInfo: {
            r: {
              ok: {};
            };
            ttl: number;
          };
        };
      };
    };
    users: {
      "17991628"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
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
      "34227960"?: {
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
        can_dm: boolean;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: string[];
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "79385709"?: {
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
        can_dm: boolean;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: string[];
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
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
      "98131447"?: {
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
        can_dm: boolean;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: string[];
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "99499503"?: {
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
        can_dm: boolean;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: string[];
        profile_interstitial_type: string;
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
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
      "103523219"?: {
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
        can_dm: boolean;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: string[];
        profile_interstitial_type: string;
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
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
      "119083647"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
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
      "131065295"?: {
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
        can_dm: boolean;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: string[];
        profile_interstitial_type: string;
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_has_nft_avatar: boolean;
        ext_is_blue_verified: boolean;
        ext: {
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
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
      "141539639"?: {
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
        can_dm: boolean;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: string[];
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "141854636"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
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
      "156912753"?: {
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
        can_dm: boolean;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: string[];
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
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
      "186647848"?: {
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
        can_dm: boolean;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: string[];
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
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
      "271916962"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_has_nft_avatar: boolean;
        ext_is_blue_verified: boolean;
        ext: {
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
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
      "273992648"?: {
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
        can_dm: boolean;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: string[];
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "343173750"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "372333312"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "449485587"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
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
      "480459897"?: {
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
        can_dm: boolean;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: string[];
        profile_interstitial_type: string;
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
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
      "600096393"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "634614239"?: {
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
        can_dm: boolean;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: string[];
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
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
      "635355479"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
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
      "865597357"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "1141411669"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "1357060980"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "1402637682"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
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
      "1440495836"?: {
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
        can_dm: boolean;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: string[];
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
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
      "1466857346"?: {
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
        can_dm: boolean;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: string[];
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
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
      "1555471309"?: {
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
        can_dm: boolean;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: string[];
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
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
      "1587215731"?: {
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
        can_dm: boolean;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: string[];
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "1712134879"?: {
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
        can_dm: boolean;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: string[];
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "2167908372"?: {
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
        can_dm: boolean;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: string[];
        profile_interstitial_type: string;
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
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
      "2326290218"?: {
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
        can_dm: boolean;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: string[];
        profile_interstitial_type: string;
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_has_nft_avatar: boolean;
        ext_is_blue_verified: boolean;
        ext: {
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
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
      "2332172880"?: {
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
        can_dm: boolean;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: string[];
        profile_interstitial_type: string;
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_has_nft_avatar: boolean;
        ext_is_blue_verified: boolean;
        ext: {
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
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
      "2349746582"?: {
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
        can_dm: boolean;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: string[];
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "2360848368"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "2567576809"?: {
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
        can_dm: boolean;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: string[];
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "2795056398"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "3026025157"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
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
      "3134908026"?: {
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
        can_dm: boolean;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: string[];
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "3149173165"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "3190739852"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
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
      "3197017886"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
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
      "3304388737"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "4174180574"?: {
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
        can_dm: boolean;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: string[];
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "726323054763081728"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "812941524384133121"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
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
      "699930682877878272"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
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
      "1498689493036986376"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
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
      "1256303737707958272"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_has_nft_avatar: boolean;
        ext_is_blue_verified: boolean;
        ext: {
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
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
      "1482900214302195712"?: {
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
        pinned_tweet_ids: unknown[];
        pinned_tweet_ids_str: unknown[];
        has_custom_timelines: boolean;
        can_dm: boolean;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: string[];
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "1445653181992615936"?: {
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
        can_dm: boolean;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: string[];
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "731709099549687810"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "1586274933596114944"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
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
      "1585212622731104258"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
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
      "987527921693736961"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
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
      "1568603727136976897"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "1059082312975974401"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
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
      "884057495437680641"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
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
      "1566092359380926464"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "1441327564274823171"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "816411715571068931"?: {
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
        pinned_tweet_ids: number[];
        pinned_tweet_ids_str: string[];
        has_custom_timelines: boolean;
        can_dm: boolean;
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
        profile_interstitial_type: string;
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
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
      "1560216245089468416"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
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
      "976706481448935424"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "1397446368965234695"?: {
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
        pinned_tweet_ids: unknown[];
        pinned_tweet_ids_str: unknown[];
        has_custom_timelines: boolean;
        can_dm: boolean;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: string[];
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "882930310207254529"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "870198212459544576"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
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
      "1604774918549213184"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "1005446247199662081"?: {
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
        can_dm: boolean;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: string[];
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "714075347025666048"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_has_nft_avatar: boolean;
        ext_is_blue_verified: boolean;
        ext: {
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
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
      "729512595812556800"?: {
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
        can_dm: boolean;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: string[];
        profile_interstitial_type: string;
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
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
      "1067727411402272768"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
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
      "948927911293169664"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
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
      "1144598370813505536"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "1362745172493148161"?: {
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
        can_dm: boolean;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: string[];
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "1345919730310209538"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
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
      "741091174618824704"?: {
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
        can_dm: boolean;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: string[];
        profile_interstitial_type: string;
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
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
      "1273540264695525377"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "1472264875435245569"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "1091249336619393025"?: {
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
        can_dm: boolean;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: string[];
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "1494999221958688769"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
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
      "1372900201627676682"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
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
      "1218376246133841921"?: {
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
        can_dm: boolean;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: string[];
        profile_interstitial_type: string;
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
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
      "969102208645054465"?: {
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
        can_dm: boolean;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: string[];
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
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
      "1468853990532464644"?: {
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
        can_dm: boolean;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: string[];
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
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
      "701413427248402432"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_has_nft_avatar: boolean;
        ext_is_blue_verified: boolean;
        ext: {
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
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
      "866938882058616832"?: {
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
        can_dm: boolean;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: string[];
        profile_interstitial_type: string;
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_has_nft_avatar: boolean;
        ext_is_blue_verified: boolean;
        ext: {
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
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
      "1621361065140584449"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "1162653408257400832"?: {
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
        can_dm: boolean;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: string[];
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "1386347274960183299"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
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
      "769898680631431168"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "770496421812461568"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "911138396600360960"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
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
      "1072767450918211585"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
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
      "1547565485482741761"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
        business_profile_state: string;
        translator_type: string;
        withheld_in_countries: unknown[];
        followed_by: boolean;
        ext_is_blue_verified: boolean;
        ext_has_nft_avatar: boolean;
        ext: {
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
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
      "1152643604290011136"?: {
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
        pinned_tweet_ids: unknown[];
        pinned_tweet_ids_str: unknown[];
        has_custom_timelines: boolean;
        can_dm: boolean;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: string[];
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
            };
            ttl: number;
          };
        };
        require_some_consent: boolean;
      };
      "1139824022395318272"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
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
      "1563087575568375808"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
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
      "1146980077709586433"?: {
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
        can_dm: boolean;
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
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
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
      "964752208804724736"?: {
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
        can_dm: boolean;
        can_media_tag: boolean;
        following: boolean;
        follow_request_sent: boolean;
        notifications: boolean;
        muting: boolean;
        blocking: boolean;
        blocked_by: boolean;
        want_retweets: boolean;
        advertiser_account_type: string;
        advertiser_account_service_levels: string[];
        profile_interstitial_type: string;
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
          superFollowMetadata: {
            r: {
              ok: {
                superFollowEligible: boolean;
                superFollowing: boolean;
                superFollowedBy: boolean;
                exclusiveTweetFollowing: boolean;
                privateSuperFollowing: boolean;
              };
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
    topics: {};
    lists: {};
  };
  timeline: {
    id: string;
    instructions: {
      addEntries?: {
        entries: {
          entryId: string;
          sortIndex: string;
          content: {
            item?: {
              content: {
                tweet?: {
                  id: string;
                  displayType: string;
                  highlights?: {
                    textHighlights: {
                      startIndex: number;
                      endIndex: number;
                    }[];
                  };
                  promotedMetadata?: {
                    advertiserId: string;
                    impressionId: string;
                    disclosureType: string;
                    experimentValues: {
                      website_card_variation?: string;
                    };
                    impressionString?: string;
                    clickTrackingInfo: {
                      urlParams: {
                        twclid: string;
                      };
                    };
                    promotedTrendId?: string;
                  };
                };
                user?: {
                  id: string;
                  displayType: string;
                };
              };
              clientEventInfo: {
                component: string;
                element: string;
                details: {
                  timelinesDetails: {
                    controllerData: string;
                  };
                };
              };
              feedbackInfo?: {
                feedbackKeys: string[];
              };
            };
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
                    user: {
                      id: string;
                      displayType: string;
                    };
                  };
                  clientEventInfo: {
                    component: string;
                    element: string;
                    details: {
                      timelinesDetails: {
                        controllerData: string;
                      };
                    };
                  };
                };
              }[];
              displayType: string;
              header: {
                text: string;
                sticky: boolean;
                displayType: string;
              };
              footer: {
                text: string;
                landingUrl: {
                  urlType: string;
                  url: string;
                };
                displayType: string;
              };
              clientEventInfo: {
                component: string;
                element: string;
              };
            };
          };
        }[];
      };
      replaceEntry?: {
        entryIdToReplace: string;
        entry: {
          entryId: string;
          sortIndex: string;
          content: {
            operation: {
              cursor: {
                value: string;
                cursorType: string;
              };
            };
          };
        };
      };
      clearCache?: {};
      terminateTimeline?: {
        direction: string;
      };
    }[];
    responseObjects?: {
      feedbackActions: {
        "976059420": {
          feedbackType: string;
          prompt: string;
          confirmation: string;
          hasUndoAction: boolean;
          confirmationDisplayType: string;
          clientEventInfo: {
            component: string;
            element: string;
            action: string;
          };
        };
        "-106689315": {
          feedbackType: string;
          prompt: string;
          confirmation: string;
          childKeys: string[];
          hasUndoAction: boolean;
          confirmationDisplayType: string;
          clientEventInfo: {
            component: string;
            element: string;
            action: string;
          };
          icon: string;
        };
        "-1987183989": {
          feedbackType: string;
          prompt: string;
          confirmation: string;
          hasUndoAction: boolean;
          confirmationDisplayType: string;
          clientEventInfo: {
            component: string;
            element: string;
            action: string;
          };
        };
      };
    };
  };
}
