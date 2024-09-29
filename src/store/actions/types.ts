import { ActionTypes } from '@constants'
import { ActionInterface, SignUpDate } from '@types'

export type UpdateSignUpEmailAction = ActionInterface<
    typeof ActionTypes.SignUpEmail,
    string
>

export type UpdateSignUpNameAction = ActionInterface<
    typeof ActionTypes.SignUpName,
    string
>

export type UpdateSignUpPhoneAction = ActionInterface<
    typeof ActionTypes.SignUpPhone,
    string
>

export type UpdateSignUpPasswordAction = ActionInterface<
    typeof ActionTypes.SignUpPassword,
    string
>

export type UpdateSignUpConfrimPasswordAction = ActionInterface<
    typeof ActionTypes.SignUpConfrimPassword,
    string
>
export type UpdateSignUpError = ActionInterface<
    typeof ActionTypes.SignUpError,
    string
>

export type UpdateSignUpDate = ActionInterface<
    typeof ActionTypes.SignUpDate,
    SignUpDate
>

export type UpdateLoginPhoneAction = ActionInterface<
    typeof ActionTypes.LoginPhone,
    string
>

export type UpdateLoginError = ActionInterface<
    typeof ActionTypes.LoginError,
    string
>

export type UpdateLoginCode = ActionInterface<
    typeof ActionTypes.LoginCode,
    string
>
