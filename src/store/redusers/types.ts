import {
    SetTotalAccounts,
    UpdateCurrentUser,
    UpdateHomeTweets,
    UpdateIsSidebarOpen,
    UpdateIsTweetModalOpen,
    UpdateLoadingInititalData,
    UpdateLoadingTweet,
    UpdateNotifyText,
    UpdateSearchData,
    UpdateSearchValue,
    UpdateTotalUser,
    UpdateUserDate,
    UpdateUserFollowing,
    UpdateUserLiked,
    UpdateUserTheme,
} from '../actions/types'

export type AllActionsType =
    | UserAction
    | NotifyAction
    | TotalDataAction
    | SearchAction
    | LoaderAction
    | OpenedAction
    | HomeAction

export type UserAction =
    | UpdateTotalUser
    | UpdateUserFollowing
    | UpdateUserLiked
    | UpdateUserTheme
    | UpdateUserDate
    | UpdateCurrentUser

export type NotifyAction = UpdateNotifyText

export type TotalDataAction = SetTotalAccounts

export type SearchAction = UpdateSearchData | UpdateSearchValue

export type LoaderAction = UpdateLoadingTweet | UpdateLoadingInititalData

export type OpenedAction = UpdateIsSidebarOpen | UpdateIsTweetModalOpen

export type HomeAction = UpdateHomeTweets
