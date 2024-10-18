import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { InitializerUserDataProps } from './types'

import AccountCard from '@components/AccountCard'
import { Paths } from '@constants'
import { initUserData, setTotalAccountsFromStorage } from '@firebase'
import { useAppDispatch, useAppSelector } from '@hooks'
import {
    loaderStatesSelector,
    searchSelector,
    setTotalAccounts,
    totalSelector,
    updateLoadingInitialData,
    updateSearchData,
    userSelector,
} from '@store'
import { UserData } from '@types'
import { getTweetsTexts } from '@utils'

export const getUsersNames = (accounts: UserData[], searchValue: string) => {
    return accounts
        .map((account) => {
            if (
                account.name.toLowerCase().includes(searchValue.toLowerCase())
            ) {
                return (
                    <AccountCard
                        account={account}
                        key={account.userId}
                        withFollowButton={false}
                    />
                )
            }
        })
        .filter((userName) => !!userName)
}

export const InitializerUserData = ({ children }: InitializerUserDataProps) => {
    const [prevSearchValue, setPrevSearchValue] = useState<string | null>(null)

    const location = useLocation()
    const isProfilePage = location.pathname === Paths.Profile

    const dispatch = useAppDispatch()
    const { user: currentUser } = useAppSelector(userSelector)
    const { accounts: users } = useAppSelector(totalSelector)
    const { value: searchValue } = useAppSelector(searchSelector)
    const { isLoadingInitialData } = useAppSelector(loaderStatesSelector)

    useEffect(() => {
        initUserData(currentUser.userId, dispatch)
        setTotalAccountsFromStorage(currentUser.userId, dispatch)

        return () => {
            dispatch(setTotalAccounts([]))
        }
    }, [dispatch, currentUser.userId])

    if (currentUser.userId === '' && !isLoadingInitialData) {
        dispatch(updateLoadingInitialData(true))
    }

    if (currentUser.userId !== '' && isLoadingInitialData) {
        dispatch(updateLoadingInitialData(false))
    }

    if (prevSearchValue !== searchValue && isProfilePage) {
        const tweetsTexts = getTweetsTexts(users, searchValue)
        dispatch(updateSearchData(tweetsTexts))
        setPrevSearchValue(searchValue)
    }
    if (prevSearchValue !== searchValue && !isProfilePage) {
        const usersNames = getUsersNames(users, searchValue)
        dispatch(updateSearchData(usersNames))
        setPrevSearchValue(searchValue)
    }

    return <>{children}</>
}
