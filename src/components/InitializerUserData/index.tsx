import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { InitializerUserDataProps } from './types'

import { Paths } from '@constants'
import { initUserData, setTotalAccountsFromStorage } from '@firebase'
import { useAppDispatch, useAppSelector } from '@hooks'
import {
    searchSelector,
    setTotalAccounts,
    totalSelector,
    updateSearchData,
    userSelector,
} from '@store'
import { getTweetsTexts, getUsersNames } from '@utils'

export const InitializerUserData = ({ children }: InitializerUserDataProps) => {
    const [prevSearchValue, setPrevSearchValue] = useState<string | null>(null)

    const location = useLocation()
    const isProfilePage = location.pathname === Paths.Profile

    const dispatch = useAppDispatch()
    const { user } = useAppSelector(userSelector)
    const { accounts } = useAppSelector(totalSelector)
    const { value: searchValue } = useAppSelector(searchSelector)

    useEffect(() => {
        initUserData(user.userId, dispatch)
        setTotalAccountsFromStorage(user.userId, dispatch)

        return () => {
            dispatch(setTotalAccounts([]))
        }
    }, [dispatch, user.userId])

    if (prevSearchValue !== searchValue && isProfilePage) {
        const tweetsTexts = getTweetsTexts(accounts, searchValue)
        dispatch(updateSearchData(tweetsTexts))
        setPrevSearchValue(searchValue)
    }
    if (prevSearchValue !== searchValue && !isProfilePage) {
        const usersNames = getUsersNames(accounts, searchValue)
        dispatch(updateSearchData(usersNames))
        setPrevSearchValue(searchValue)
    }

    return <>{children}</>
}
