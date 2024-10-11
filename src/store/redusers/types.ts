import {
    SetTotalAccounts,
    UpdateIsSidebarOpen,
    UpdateIsTweetModalOpen,
    UpdateLoadingInititalData,
    UpdateLoadingTweet,
    UpdateNotifyText,
    UpdateSearchData,
    UpdateSearchValue,
    UpdateTotalUser,
    UpdateUserData,
    UpdateUserDate,
    UpdateUserFollowing,
    UpdateUserLiked,
} from '../actions/types'

export type AllActionsType =
    | UserAction
    | NotifyAction
    | TotalDataAction
    | SearchAction
    | BooleanAction

export type UserAction =
    | UpdateUserData
    | UpdateTotalUser
    | UpdateUserFollowing
    | UpdateUserLiked
    | UpdateUserDate

export type NotifyAction = UpdateNotifyText

export type TotalDataAction = SetTotalAccounts

export type SearchAction = UpdateSearchData | UpdateSearchValue

export type BooleanAction =
    | UpdateLoadingTweet
    | UpdateLoadingInititalData
    | UpdateIsSidebarOpen
    | UpdateIsTweetModalOpen
