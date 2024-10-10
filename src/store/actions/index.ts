import {
    SetTotalAccounts,
    UpdateIsSidebarOpen,
    UpdateIsTweetModalOpen,
    UpdateLoadingInititalData,
    UpdateLoadingTweet,
    UpdateLoginEmailAction,
    UpdateLoginPasswordAction,
    UpdateNotifyText,
    UpdateSearchData,
    UpdateSearchValue,
    UpdateSignUpConfrimPasswordAction,
    UpdateSignUpDate,
    UpdateSignUpEmailAction,
    UpdateSignUpNameAction,
    UpdateSignUpPasswordAction,
    UpdateSignUpPhoneAction,
    UpdateTotalUser,
    UpdateUserData,
    UpdateUserFollowing,
    UpdateUserLiked,
    UpdateUserTheme,
} from './types'

import { ActionTypes, Themes } from '@constants'
import { EditModalData, SignUpDate, UserData } from '@types'

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

export const updateUserFollowing = (data: string[]): UpdateUserFollowing => {
    return {
        type: ActionTypes.UserFollowing,
        payload: data,
    }
}

export const updateUserTweetLiked = (data: string[]): UpdateUserLiked => {
    return {
        type: ActionTypes.UserLiked,
        payload: data,
    }
}

export const updateUserTheme = (data: Themes): UpdateUserTheme => {
    return {
        type: ActionTypes.UserTheme,
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
    data: UserData | never[]
): SetTotalAccounts => {
    return {
        type: ActionTypes.TotalAccounts,
        payload: data,
    }
}

export const updateSearchValue = (data: string): UpdateSearchValue => {
    return {
        type: ActionTypes.SeacrhValue,
        payload: data,
    }
}

export const updateSearchData = (data: JSX.Element[]): UpdateSearchData => {
    return {
        type: ActionTypes.SearchData,
        payload: data,
    }
}

export const updateTotalUser = (data: UserData): UpdateTotalUser => {
    return {
        type: ActionTypes.UserTotal,
        payload: data,
    }
}

export const updateLoadingTweet = (data: boolean): UpdateLoadingTweet => {
    return {
        type: ActionTypes.LoadingTweet,
        payload: data,
    }
}

export const updateLoadingInitialData = (
    data: boolean
): UpdateLoadingInititalData => {
    return {
        type: ActionTypes.LoadingInititalData,
        payload: data,
    }
}

export const updateIsSidebarOpen = (data: boolean): UpdateIsSidebarOpen => {
    return {
        type: ActionTypes.isSidebarOpen,
        payload: data,
    }
}

export const updateIsTweetModalOpen = (
    data: boolean
): UpdateIsTweetModalOpen => {
    return {
        type: ActionTypes.isTweetModalOpen,
        payload: data,
    }
}
