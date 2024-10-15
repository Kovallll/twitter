import { combineReducers, createStore } from 'redux'

import {
    setTotalData,
    updateLoaderStates,
    updateNotifyData,
    updateOpenedStates,
    updateSearch,
    updateUserData,
} from './redusers'

const rootReduser = combineReducers({
    user: updateUserData,
    notify: updateNotifyData,
    total: setTotalData,
    search: updateSearch,
    loaderStates: updateLoaderStates,
    openedStates: updateOpenedStates,
})

export const store = createStore(rootReduser)

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export {
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
    updateUserDate,
} from './actions'

export {
    userSelector,
    loaderStatesSelector,
    openedStatesSelector,
    notifySelector,
    searchSelector,
    totalSelector,
} from './selectors'

export { type AllActionsType } from './redusers/types'
