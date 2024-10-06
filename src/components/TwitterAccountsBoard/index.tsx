import { useEffect } from 'react'

import {
    AccountAvatar,
    AccountCard,
    AccountInfo,
    AccountName,
    AccountSocial,
    AccountsSection,
    FollowButton,
    Title,
} from './styled'

import { followOrUnfollowAccount, setTotalAccountsFromStorage } from '@firebase'
import { useAppDispatch, useAppSelector } from '@hooks'
import { setTotalAccounts } from '@store'
import { AccountData } from '@types'

export const TwitterAccountsBoard = () => {
    const { accounts } = useAppSelector((state) => state.total)
    const { user, docId } = useAppSelector((state) => state.user)
    const dispatch = useAppDispatch()
    useEffect(() => {
        setTotalAccountsFromStorage(user.userId, dispatch)

        return () => {
            dispatch(setTotalAccounts([]))
        }
    }, [dispatch, user.userId])

    const handleFollowAccount = (account: AccountData) => () => {
        followOrUnfollowAccount(user, account, docId, dispatch)
    }

    return (
        <AccountsSection>
            <Title>You might like</Title>
            {accounts.map((account) => (
                <AccountCard key={account.userId}>
                    <AccountAvatar src={account.avatar.url} />
                    <AccountInfo>
                        <AccountName>{account.name}</AccountName>
                        <AccountSocial>{account.social}</AccountSocial>
                    </AccountInfo>
                    <FollowButton onClick={handleFollowAccount(account)}>
                        {user.following.length === 0
                            ? 'Follow'
                            : (user.following as string[]).includes(
                                    account.userId
                                )
                              ? 'Unfollow'
                              : 'Follow'}
                    </FollowButton>
                </AccountCard>
            ))}
        </AccountsSection>
    )
}
