import { useEffect, useState } from 'react'

import { InitializerUserDataProps } from './types'

import { initUserData, setTotalAccountsFromStorage } from '@firebase'
import { useAppDispatch, useAppSelector } from '@hooks'
import {
    searchSelector,
    setTotalAccounts,
    totalSelector,
    updateSearchData,
    userSelector,
} from '@store'
import { getTweetsTexts } from '@utils'

export const InitializerUserData = ({ children }: InitializerUserDataProps) => {
    const [prevSearchValue, setPrevSearchValue] = useState<string | null>(null)

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

    if (prevSearchValue !== searchValue) {
        const tweetsTexts = getTweetsTexts(accounts, searchValue)
        dispatch(updateSearchData(tweetsTexts))
        setPrevSearchValue(searchValue)
    }

    return <>{children}</>
}
