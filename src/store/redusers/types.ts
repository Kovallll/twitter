import {
    UpdateLoginCode,
    UpdateLoginError,
    UpdateLoginPhoneAction,
    UpdateSignUpConfrimPasswordAction,
    UpdateSignUpDate,
    UpdateSignUpEmailAction,
    UpdateSignUpError,
    UpdateSignUpNameAction,
    UpdateSignUpPasswordAction,
    UpdateSignUpPhoneAction,
} from '../actions/types'

export type SingUpAction =
    | UpdateSignUpEmailAction
    | UpdateSignUpNameAction
    | UpdateSignUpPhoneAction
    | UpdateSignUpPasswordAction
    | UpdateSignUpConfrimPasswordAction
    | UpdateSignUpError
    | UpdateSignUpDate

export type LoginAction =
    | UpdateLoginPhoneAction
    | UpdateLoginError
    | UpdateLoginCode
