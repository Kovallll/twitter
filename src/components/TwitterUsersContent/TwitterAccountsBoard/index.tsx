import { useState } from 'react'

import { avatarIconAltText, follow, showMore, title, unfollow } from './config'
import { Loader } from './Loader'
import {
    AccountAvatar,
    AccountCard,
    AccountInfo,
    AccountName,
    Accounts,
    AccountSocial,
    AccountsSection,
    FollowButton,
    ShowMoreLink,
    Title,
} from './styled'

import { followOrUnfollowAccount } from '@firebase'
import { useAppDispatch, useAppSelector } from '@hooks'
import { UserData } from '@types'

export const TwitterAccountsBoard = () => {
    const [isShow, setIsShow] = useState(false)

    const dispatch = useAppDispatch()
    const { accounts } = useAppSelector((state) => state.total)
    const { user } = useAppSelector((state) => state.user)
    const { isLoadingInitialData } = useAppSelector((state) => state.boolean)

    const handleFollowAccount = (account: UserData) => () => {
        followOrUnfollowAccount(user, account, dispatch)
    }

    const handleClickShowMore = () => {
        setIsShow((prev) => !prev)
    }

    return (
        <>
            {isLoadingInitialData ? (
                <Loader />
            ) : (
                <AccountsSection>
                    <Title>{title}</Title>
                    <Accounts $isShow={isShow}>
                        {accounts.map((account) => (
                            <AccountCard key={account.userId}>
                                <AccountAvatar
                                    src={account.avatar.url}
                                    alt={avatarIconAltText}
                                />
                                <AccountInfo>
                                    <AccountName>{account.name}</AccountName>
                                    <AccountSocial>
                                        {account.social}
                                    </AccountSocial>
                                </AccountInfo>
                                <FollowButton
                                    onClick={handleFollowAccount(account)}
                                >
                                    {user.following.includes(account.userId!)
                                        ? unfollow
                                        : follow}
                                </FollowButton>
                            </AccountCard>
                        ))}
                    </Accounts>
                    <ShowMoreLink onClick={handleClickShowMore}>
                        {showMore}
                    </ShowMoreLink>
                </AccountsSection>
            )}
        </>
    )
}
