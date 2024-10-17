import {
    SetTotalAccounts,
    UpdateCurrentUser,
    UpdateHomeTweets,
    UpdateIsSidebarOpen,
    UpdateIsTweetModalOpen,
    UpdateLoadingInititalData,
    UpdateLoadingTweet,
    UpdateNotifyText,
    UpdateSearchData,
    UpdateSearchValue,
    UpdateTotalUser,
    UpdateUserDate,
    UpdateUserFollowing,
    UpdateUserLiked,
    UpdateUserTheme,
} from './types'

import { ActionTypes, Themes } from '@constants'
import { SignUpDate, SortedTweet, UserData } from '@types'

export const updateUserDate = (data: SignUpDate): UpdateUserDate => {
    return {
        type: ActionTypes.UserDate,
        payload: data,
    }
}

export const updateTotalUser = (data: UserData): UpdateTotalUser => {
    return {
        type: ActionTypes.UserTotal,
        payload: data,
    }
}

export const updateCurrentUser = (data: UserData): UpdateCurrentUser => {
    return {
        type: ActionTypes.UserCurrent,
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

export const updateHomeTweets = (
    data: SortedTweet[] | SortedTweet
): UpdateHomeTweets => {
    return {
        type: ActionTypes.HomeTweets,
        payload: data,
    }
}
