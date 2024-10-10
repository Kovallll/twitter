import {
    SetTotalAccounts,
    UpdateIsSidebarOpen,
    UpdateIsTweetModalOpen,
    UpdateLoadingInititalData,
    UpdateLoadingTweet,
    UpdateLoginEmailAction,
    UpdateLoginPasswordAction,
    UpdateNotifyText,
    UpdateSearchData,
    UpdateSearchValue,
    UpdateSignUpConfrimPasswordAction,
    UpdateSignUpDate,
    UpdateSignUpEmailAction,
    UpdateSignUpNameAction,
    UpdateSignUpPasswordAction,
    UpdateSignUpPhoneAction,
    UpdateTotalUser,
    UpdateUserData,
    UpdateUserFollowing,
    UpdateUserLiked,
    UpdateUserTheme,
} from '../actions/types'

export type AllActionsType =
    | SingUpAction
    | LoginAction
    | UserAction
    | NotifyAction
    | TotalDataAction
    | SearchAction
    | BooleanAction

export type SingUpAction =
    | UpdateSignUpEmailAction
    | UpdateSignUpNameAction
    | UpdateSignUpPhoneAction
    | UpdateSignUpPasswordAction
    | UpdateSignUpConfrimPasswordAction
    | UpdateSignUpDate

export type LoginAction = UpdateLoginEmailAction | UpdateLoginPasswordAction

export type UserAction =
    | UpdateUserData
    | UpdateTotalUser
    | UpdateUserFollowing
    | UpdateUserLiked
    | UpdateUserTheme

export type NotifyAction = UpdateNotifyText

export type TotalDataAction = SetTotalAccounts

export type SearchAction = UpdateSearchData | UpdateSearchValue

export type BooleanAction =
    | UpdateLoadingTweet
    | UpdateLoadingInititalData
    | UpdateIsSidebarOpen
    | UpdateIsTweetModalOpen
