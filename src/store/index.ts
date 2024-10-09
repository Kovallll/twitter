import { combineReducers, createStore } from 'redux'

import {
    setTotalData,
    updateBooleanStates,
    updateLoginData,
    updateNotifyData,
    updateSearch,
    updateSignUpData,
    updateUserData,
} from './redusers'

const rootReduser = combineReducers({
    signUp: updateSignUpData,
    login: updateLoginData,
    user: updateUserData,
    notify: updateNotifyData,
    total: setTotalData,
    search: updateSearch,
    boolean: updateBooleanStates,
})

export const store = createStore(rootReduser)

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export {
    updateLoginEmail,
    updateLoginPassword,
    updateSignUpConfrimPassword,
    updateSignUpDate,
    updateSignUpEmail,
    updateSignUpName,
    updateSignUpPassword,
    updateSignUpPhone,
    updateUserData,
    updateNotifyText,
    updateTotalUser,
    setTotalAccounts,
    updateUserFollowing,
    updateSearchValue,
    updateSearchData,
    updateUserTweetLiked,
    updateLoadingTweet,
    updateLoadingInitialData,
    updateIsSidebarOpen,
    updateIsTweetModalOpen,
} from './actions'

export { type AllActionsType } from './redusers/types'
