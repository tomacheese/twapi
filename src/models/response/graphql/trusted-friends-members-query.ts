export interface GraphQLTrustedFriendsMembersQueryResponse {
  data: {
    trusted_friends_list_by_rest_id: {
      id: string;
      members_slice: {
        items_results: unknown[];
        slice_info: {};
      };
    };
  };
}
