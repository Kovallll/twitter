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
} from './types'

import { ActionTypes } from '@constants'
import { SignUpDate } from '@types'

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

export const updateSignUpError = (data: string): UpdateSignUpError => {
    return {
        type: ActionTypes.SignUpError,
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

export const updateLoginError = (data: string): UpdateLoginError => {
    return {
        type: ActionTypes.LoginError,
        payload: data,
    }
}
