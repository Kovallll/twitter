import { LoginAction, SingUpAction } from './types'

import { ActionTypes, loginDefaultData, signUpDefaultData } from '@constants'

export const updateSignUpData = (
    state = signUpDefaultData,
    action: SingUpAction
) => {
    switch (action.type) {
        case ActionTypes.SignUpEmail:
            return { ...state, email: action.payload }
        case ActionTypes.SignUpName:
            return { ...state, name: action.payload }
        case ActionTypes.SignUpPhone:
            return { ...state, phone: action.payload }
        case ActionTypes.SignUpPassword:
            return { ...state, password: action.payload }
        case ActionTypes.SignUpConfrimPassword:
            return { ...state, confirmPassword: action.payload }
        case ActionTypes.SignUpError:
            return { ...state, error: action.payload }
        case ActionTypes.SignUpDate:
            return { ...state, date: action.payload }
        default:
            return state
    }
}

export const updateLoginData = (
    state = loginDefaultData,
    action: LoginAction
) => {
    switch (action.type) {
        case ActionTypes.LoginEmail:
            return { ...state, email: action.payload }
        case ActionTypes.LoginPassword:
            return { ...state, password: action.payload }
        case ActionTypes.LoginError:
            return { ...state, error: action.payload }
        default:
            return state
    }
}
