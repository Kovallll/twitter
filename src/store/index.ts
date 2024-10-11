import { combineReducers, createStore } from 'redux'

import {
    setTotalData,
    updateBooleanStates,
    updateNotifyData,
    updateSearch,
    updateUserData,
} from './redusers'

const rootReduser = combineReducers({
    user: updateUserData,
    notify: updateNotifyData,
    total: setTotalData,
    search: updateSearch,
    booleanStates: updateBooleanStates,
})

export const store = createStore(rootReduser)

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export {
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
    updateUserDate,
} from './actions'

export {
    userSelector,
    booleanStatesSelector,
    notifySelector,
    searchSelector,
    totalSelector,
} from './selectors'

export { type AllActionsType } from './redusers/types'
