import { RootState } from '@store'

export const userSelector = (state: RootState) => state.user
export const notifySelector = (state: RootState) => state.notify
export const totalSelector = (state: RootState) => state.total
export const searchSelector = (state: RootState) => state.search
export const loaderStatesSelector = (state: RootState) => state.loaderStates
export const openedStatesSelector = (state: RootState) => state.openedStates
export const homeDataSelector = (state: RootState) => state.homeData
