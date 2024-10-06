import {
    SetTotalAccounts,
    UpdateLoginEmailAction,
    UpdateLoginPasswordAction,
    UpdateNotifyText,
    UpdateSignUpConfrimPasswordAction,
    UpdateSignUpDate,
    UpdateSignUpEmailAction,
    UpdateSignUpNameAction,
    UpdateSignUpPasswordAction,
    UpdateSignUpPhoneAction,
    UpdateTotalUser,
    UpdateUserData,
    UpdateUserDocId,
    UpdateUserFollowing,
} from '../actions/types'

export type AllActionsType =
    | SingUpAction
    | LoginAction
    | UserAction
    | NotifyAction
    | TotalDataAction

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
    | UpdateUserDocId
    | UpdateUserFollowing

export type NotifyAction = UpdateNotifyText

export type TotalDataAction = SetTotalAccounts
