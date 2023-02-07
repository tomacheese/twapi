export interface GraphQLSubscriptionProductDetailsResponse {
  data: {
    web_subscription_product_details: {
      id: string
      rest_id: string
      prices: {
        currency_code: string
        external_price_id: string
        amount_local_micro: number
        price_type: string
        charge_interval: string
      }[]
    }
  }
}
