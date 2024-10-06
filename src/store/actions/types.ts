import { ActionTypes } from '@constants'
import {
    AccountData,
    ActionInterface,
    EditModalData,
    SignUpDate,
    UserData,
} from '@types'

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

export type UpdateSignUpDate = ActionInterface<
    typeof ActionTypes.SignUpDate,
    SignUpDate
>

export type UpdateLoginEmailAction = ActionInterface<
    typeof ActionTypes.LoginEmail,
    string
>

export type UpdateLoginPasswordAction = ActionInterface<
    typeof ActionTypes.LoginPassword,
    string
>

export type UpdateUserData = ActionInterface<
    typeof ActionTypes.UserData,
    EditModalData
>

export type UpdateTotalUser = ActionInterface<
    typeof ActionTypes.UserTotal,
    UserData
>

export type UpdateUserDocId = ActionInterface<
    typeof ActionTypes.UserDocId,
    string
>

export type UpdateUserFollowing = ActionInterface<
    typeof ActionTypes.UserFollowing,
    string[]
>

export type UpdateNotifyText = ActionInterface<
    typeof ActionTypes.NotifyText,
    string
>

export type SetTotalAccounts = ActionInterface<
    typeof ActionTypes.TotalAccounts,
    AccountData | never[]
>
