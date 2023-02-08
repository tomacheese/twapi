export interface GraphQLAuthenticatedUserTFListsResponse {
  data: {
    authenticated_user_trusted_friends_lists: {
      id: string;
      rest_id: string;
      name: string;
      member_count: number;
    }[];
  };
}
