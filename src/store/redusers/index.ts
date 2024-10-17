import { homePageDefaultData } from 'src/constants/defaultValues'
import {
    HomeAction,
    LoaderAction,
    NotifyAction,
    OpenedAction,
    SearchAction,
    TotalDataAction,
    UserAction,
} from './types'

import {
    ActionTypes,
    loaderStatesDefaultData,
    notifyDefaultData,
    openedStatesDefaultData,
    searchDefaultData,
    totalDefaultData,
    userDefaultData,
} from '@constants'

export const updateUserData = (state = userDefaultData, action: UserAction) => {
    switch (action.type) {
        case ActionTypes.UserTotal:
            return { ...state, user: action.payload }
        case ActionTypes.UserCurrent:
            return { ...state, currentUser: action.payload }
        case ActionTypes.UserFollowing:
            return { ...state, following: [...state.following, action.payload] }
        case ActionTypes.UserLiked:
            return { ...state, liked: action.payload }
        case ActionTypes.UserTheme:
            return { ...state, currentTheme: action.payload }
        case ActionTypes.UserDate:
            return { ...state, date: action.payload }
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

export const updateLoaderStates = (
    state = loaderStatesDefaultData,
    action: LoaderAction
) => {
    switch (action.type) {
        case ActionTypes.LoadingTweet:
            return { ...state, isLoadingTweet: action.payload }
        case ActionTypes.LoadingInititalData:
            return { ...state, isLoadingInitialData: action.payload }
        default:
            return state
    }
}

export const updateOpenedStates = (
    state = openedStatesDefaultData,
    action: OpenedAction
) => {
    switch (action.type) {
        case ActionTypes.isSidebarOpen:
            return { ...state, isSidebarOpen: action.payload }
        case ActionTypes.isTweetModalOpen:
            return { ...state, isTweetModalOpen: action.payload }
        default:
            return state
    }
}

export const updateHomePageData = (
    state = homePageDefaultData,
    action: HomeAction
) => {
    switch (action.type) {
        case ActionTypes.HomeTweets: {
            if (state.tweets && Array.isArray(action.payload)) {
                return {
                    ...state,
                    tweets: [...state.tweets, ...action.payload],
                }
            } else if (!state.tweets && Array.isArray(action.payload)) {
                return { ...state, tweets: [...action.payload] }
            } else if (state.tweets && !Array.isArray(action.payload)) {
                return { ...state, tweets: [action.payload, ...state.tweets] }
            } else if (!state.tweets && !Array.isArray(action.payload)) {
                return { ...state, tweets: [action.payload] }
            } else return state
        }
        default:
            return state
    }
}
