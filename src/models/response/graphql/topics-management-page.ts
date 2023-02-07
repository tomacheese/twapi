export interface GraphQLTopicsManagementPageResponse {
  data: {
    viewer: {
      topics_management_page: {
        id: string;
        body: {
          __typename: string;
          timelines: {
            id: string;
            labelText: string;
            scribeConfig: {
              page: string;
              section: string;
            };
            refreshIntervalSec: number;
            timeline: {
              id: string;
            };
          }[];
          initialTimeline: {
            id: string;
            labelText: string;
            scribeConfig: {
              page: string;
              section: string;
            };
            refreshIntervalSec: number;
            timeline: {
              timeline: {
                instructions: {
                  type: string;
                  direction?: string;
                  entries?: {
                    entryId: string;
                    sortIndex: string;
                    content: {
                      entryType: string;
                      __typename: string;
                      itemContent?: {
                        itemType: string;
                        __typename: string;
                        content: {
                          contentType: string;
                          headerText: string;
                          bodyRichText: {
                            alignment: string;
                            text: string;
                            entities: {
                              fromIndex: number;
                              toIndex: number;
                              ref: {
                                type: string;
                                url: string;
                                urlType: string;
                              };
                            }[];
                          };
                        };
                      };
                      clientEventInfo: {
                        component: string;
                        element?: string;
                        details?: {
                          timelinesDetails: {
                            controllerData: string;
                          };
                        };
                      };
                      items?: {
                        entryId: string;
                        item: {
                          itemContent: {
                            itemType: string;
                            __typename: string;
                            topic: {
                              description: string;
                              following: boolean;
                              icon_url: string;
                              id: string;
                              topic_id: string;
                              name: string;
                              not_interested: boolean;
                            };
                            topicFunctionalityType: string;
                            topicDisplayType: string;
                          };
                          feedbackInfo: {
                            feedbackKeys: string[];
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
                      metadata?: {
                        gridCarouselMetadata: {
                          numRows: number;
                        };
                      };
                      displayType?: string;
                      header?: {
                        displayType: string;
                        text: string;
                        socialContext: {
                          type: string;
                          contextType: string;
                          text: string;
                        };
                      };
                      footer?: {
                        displayType: string;
                        text: string;
                        landingUrl: {
                          url: string;
                          urlType: string;
                        };
                      };
                    };
                  }[];
                }[];
                responseObjects: {
                  feedbackActions: {
                    key: string;
                    value: {
                      feedbackType: string;
                      hasUndoAction: boolean;
                      richBehavior: {
                        type: string;
                        topic: {
                          description: string;
                          following: boolean;
                          icon_url: string;
                          id: string;
                          topic_id: string;
                          name: string;
                          not_interested: boolean;
                        };
                      };
                    };
                  }[];
                };
                metadata: {
                  scribeConfig: {
                    page: string;
                    section: string;
                  };
                };
              };
            };
          };
        };
        scribeConfig: {
          page: string;
          section: string;
        };
      };
    };
  };
}
