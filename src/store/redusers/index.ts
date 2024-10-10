import {
    BooleanAction,
    LoginAction,
    NotifyAction,
    SearchAction,
    SingUpAction,
    TotalDataAction,
    UserAction,
} from './types'

import {
    ActionTypes,
    booleanStatesDefaultData,
    loginDefaultData,
    notifyDefaultData,
    searchDefaultData,
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
        case ActionTypes.UserFollowing:
            return { ...state, following: [...state.following, action.payload] }
        case ActionTypes.UserLiked:
            return { ...state, liked: action.payload }
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

export const updateSearch = (
    state = searchDefaultData,
    action: SearchAction
) => {
    switch (action.type) {
        case ActionTypes.SeacrhValue:
            return { ...state, value: action.payload }
        case ActionTypes.SearchData:
            return { ...state, data: action.payload }
        default:
            return state
    }
}

export const updateBooleanStates = (
    state = booleanStatesDefaultData,
    action: BooleanAction
) => {
    switch (action.type) {
        case ActionTypes.LoadingTweet:
            return { ...state, isLoadingTweet: action.payload }
        case ActionTypes.LoadingInititalData:
            return { ...state, isLoadingInitialData: action.payload }
        case ActionTypes.isSidebarOpen:
            return { ...state, isSidebarOpen: action.payload }
        case ActionTypes.isTweetModalOpen:
            return { ...state, isTweetModalOpen: action.payload }
        default:
            return state
    }
}
