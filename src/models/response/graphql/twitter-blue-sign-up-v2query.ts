export interface GraphQLTwitterBlueSignUpV2QueryResponse {
  data: {
    blue_marketing_page_config: {
      card: {
        title: string
        description: string
        image_url: string
        badge: {
          text: string
        }
      }
      feature_buckets: {
        title: string
        buckets: {
          badge?: string
          image_url: string
          title: string
          description: string
          learn_more_text: string
          learn_more_title: string
          learn_more_description: string
          features: {
            icon: string
            title: string
            description: string
          }[]
        }[]
      }
      subscribe_button: {
        detail_text: string
        disclaimer_text: string
        disclaimer_url: string
        disclaimer_url_text: string
      }
    }
  }
}
