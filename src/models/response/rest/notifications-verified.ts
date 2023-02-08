export interface RestNotificationsVerifiedResponse {
  globalObjects: {}
  timeline: {
    id: string
    instructions: {
      clearCache?: {}
      addEntries?: {
        entries: {
          entryId: string
          sortIndex: string
          content: {
            operation: {
              cursor: {
                value: string
                cursorType: string
              }
            }
          }
        }[]
      }
      clearEntriesUnreadState?: {}
      markEntriesUnreadGreaterThanSortIndex?: {
        sortIndex: string
      }
    }[]
  }
}
