export interface GraphQLFollowHostButtonQueryResponse {
  data: {
    user: {
      result: {
        __typename: string
        rest_id: string
        legacy: {
          screen_name: string
          name: string
          following: boolean
        }
        id: string
      }
      id: string
    }
  }
}
