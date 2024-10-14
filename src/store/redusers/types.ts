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
    UpdateUserDate,
    UpdateUserFollowing,
    UpdateUserLiked,
} from '../actions/types'

export type AllActionsType =
    | UserAction
    | NotifyAction
    | TotalDataAction
    | SearchAction
    | LoaderAction
    | OpenedAction

export type UserAction =
    | UpdateTotalUser
    | UpdateUserFollowing
    | UpdateUserLiked
    | UpdateUserDate

export type NotifyAction = UpdateNotifyText

export type TotalDataAction = SetTotalAccounts

export type SearchAction = UpdateSearchData | UpdateSearchValue

export type LoaderAction = UpdateLoadingTweet | UpdateLoadingInititalData

export type OpenedAction = UpdateIsSidebarOpen | UpdateIsTweetModalOpen
