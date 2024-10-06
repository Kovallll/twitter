import {
    LoginAction,
    NotifyAction,
    SingUpAction,
    TotalDataAction,
    UserAction,
} from './types'

import {
    ActionTypes,
    loginDefaultData,
    notifyDefaultData,
    signUpDefaultData,
    totalDefaultData,
    userDefaultData,
} from '@constants'

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
        default:
            return state
    }
}

export const updateUserData = (state = userDefaultData, action: UserAction) => {
    switch (action.type) {
        case ActionTypes.UserTotal:
            return { ...state, user: action.payload }
        case ActionTypes.UserData:
            return { ...state, editData: action.payload }
        case ActionTypes.UserDocId:
            return { ...state, docId: action.payload }
        case ActionTypes.UserFollowing:
            return { ...state, following: [...state.following, action.payload] }
        default:
            return state
    }
}

export const updateNotifyData = (
    state = notifyDefaultData,
    action: NotifyAction
) => {
    switch (action.type) {
        case ActionTypes.NotifyText:
            return { ...state, text: action.payload }
        default:
            return state
    }
}

export const setTotalData = (
    state = totalDefaultData,
    action: TotalDataAction
) => {
    switch (action.type) {
        case ActionTypes.TotalAccounts:
            return {
                ...state,
                accounts: Array.isArray(action.payload)
                    ? action.payload
                    : [...state.accounts, action.payload],
            }
        default:
            return state
    }
}
