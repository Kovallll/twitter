import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

import { PathProps } from './types'

import { tokensLocalStorage } from '@constants'
import { initUserData, setTotalAccountsFromStorage } from '@firebase'
import { useAppDispatch, useAppSelector } from '@hooks'
import { setTotalAccounts, updateSearchData } from '@store'
import { getTweetsTexts, LocalStorage } from '@utils'

const localStorage = new LocalStorage()
export function RequireAuth({ children, redirectTo }: PathProps) {
    const [prevSearchValue, setPrevSearchValue] = useState<string | null>(null)

    const dispatch = useAppDispatch()
    const { user } = useAppSelector((state) => state.user)
    const { accounts } = useAppSelector((state) => state.total)
    const { value: searchValue } = useAppSelector((state) => state.search)

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

    const tokens = localStorage.getItem(tokensLocalStorage)

    return tokens !== null ? children : <Navigate to={redirectTo} />
}

export function AuthenticatedProtect({ children, redirectTo }: PathProps) {
    const tokens = localStorage.getItem(tokensLocalStorage)

    return tokens === null ? children : <Navigate to={redirectTo} />
}
