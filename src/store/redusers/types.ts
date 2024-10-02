import {
    UpdateLoginEmailAction,
    UpdateLoginError,
    UpdateLoginPasswordAction,
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
    | UpdateLoginEmailAction
    | UpdateLoginError
    | UpdateLoginPasswordAction
