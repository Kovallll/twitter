import { combineReducers, createStore } from 'redux'

import {
    setTotalData,
    updateLoginData,
    updateNotifyData,
    updateSignUpData,
    updateUserData,
} from './redusers'

const rootReduser = combineReducers({
    signUp: updateSignUpData,
    login: updateLoginData,
    user: updateUserData,
    notify: updateNotifyData,
    total: setTotalData,
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
    updateUserDocId,
    setTotalAccounts,
    updateUserFollowing,
} from './actions'

export {
    type LoginAction,
    type SingUpAction,
    type UserAction,
    type TotalDataAction,
    type AllActionsType,
} from './redusers/types'
