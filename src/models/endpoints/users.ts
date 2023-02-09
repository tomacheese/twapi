import { User, Status } from 'twitter-d'

export type GetUserWithUserIdResponse = User

export type GetUserTweetsResponse = Status[]

export type GetUserLikesResponse = Status[]

export type GetUserFollowingResponse = User[]

export type GetUserFollowersResponse = User[]
