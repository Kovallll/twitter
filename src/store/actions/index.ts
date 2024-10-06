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
} from './types'

import { ActionTypes } from '@constants'
import { AccountData, EditModalData, SignUpDate, UserData } from '@types'

export const updateSignUpEmail = (data: string): UpdateSignUpEmailAction => {
    return {
        type: ActionTypes.SignUpEmail,
        payload: data,
    }
}

export const updateSignUpName = (data: string): UpdateSignUpNameAction => {
    return {
        type: ActionTypes.SignUpName,
        payload: data,
    }
}

export const updateSignUpPhone = (data: string): UpdateSignUpPhoneAction => {
    return {
        type: ActionTypes.SignUpPhone,
        payload: data,
    }
}

export const updateSignUpPassword = (
    data: string
): UpdateSignUpPasswordAction => {
    return {
        type: ActionTypes.SignUpPassword,
        payload: data,
    }
}

export const updateSignUpConfrimPassword = (
    data: string
): UpdateSignUpConfrimPasswordAction => {
    return {
        type: ActionTypes.SignUpConfrimPassword,
        payload: data,
    }
}

export const updateSignUpDate = (data: SignUpDate): UpdateSignUpDate => {
    return {
        type: ActionTypes.SignUpDate,
        payload: data,
    }
}

export const updateLoginEmail = (data: string): UpdateLoginEmailAction => {
    return {
        type: ActionTypes.LoginEmail,
        payload: data,
    }
}

export const updateLoginPassword = (
    data: string
): UpdateLoginPasswordAction => {
    return {
        type: ActionTypes.LoginPassword,
        payload: data,
    }
}

export const updateUserData = (data: EditModalData): UpdateUserData => {
    return {
        type: ActionTypes.UserData,
        payload: data,
    }
}

export const updateTotalUser = (data: UserData): UpdateTotalUser => {
    return {
        type: ActionTypes.UserTotal,
        payload: data,
    }
}

export const updateUserDocId = (data: string): UpdateUserDocId => {
    return {
        type: ActionTypes.UserDocId,
        payload: data,
    }
}

export const updateUserFollowing = (data: string[]): UpdateUserFollowing => {
    return {
        type: ActionTypes.UserFollowing,
        payload: data,
    }
}

export const updateNotifyText = (data: string): UpdateNotifyText => {
    return {
        type: ActionTypes.NotifyText,
        payload: data,
    }
}

export const setTotalAccounts = (
    data: AccountData | never[]
): SetTotalAccounts => {
    return {
        type: ActionTypes.TotalAccounts,
        payload: data,
    }
}
