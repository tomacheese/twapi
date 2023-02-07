export interface GraphQLListsManagementPageTimelineResponse {
  data: {
    viewer: {
      list_management_timeline: {
        timeline: {
          instructions: {
            type: string;
            entries?: {
              entryId: string;
              sortIndex: string;
              content: {
                entryType: string;
                __typename: string;
                items: {
                  entryId: string;
                  item: {
                    itemContent: {
                      itemType: string;
                      __typename: string;
                      content: {
                        contentType: string;
                        headerText: string;
                        bodyText: string;
                      };
                    };
                  };
                }[];
                displayType: string;
                header: {
                  displayType: string;
                  text: string;
                  sticky: boolean;
                };
                clientEventInfo: {
                  component: string;
                };
              };
            }[];
          }[];
          responseObjects: {
            feedbackActions: unknown[];
            immediateReactions: unknown[];
          };
        };
      };
    };
  };
}
