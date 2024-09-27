import { combineReducers, createStore } from 'redux'

import { updateLoginData, updateSignUpData } from './redusers'

const rootReduser = combineReducers({
    signUp: updateSignUpData,
    login: updateLoginData,
})

export const store = createStore(rootReduser)

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export {
    updateLoginCode,
    updateLoginError,
    updateLoginPhone,
    updateSignUpConfrimPassword,
    updateSignUpDate,
    updateSignUpEmail,
    updateSignUpError,
    updateSignUpName,
    updateSignUpPassword,
    updateSignUpPhone,
} from './actions'
