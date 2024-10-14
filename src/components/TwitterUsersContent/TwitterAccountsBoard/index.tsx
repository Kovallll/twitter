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
import { loaderStatesSelector, totalSelector, userSelector } from '@store'
import { UserData } from '@types'

export const TwitterAccountsBoard = () => {
    const [isShow, setIsShow] = useState(false)

    const dispatch = useAppDispatch()
    const { accounts } = useAppSelector(totalSelector)
    const { user } = useAppSelector(userSelector)
    const { isLoadingInitialData } = useAppSelector(loaderStatesSelector)

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
                        {accounts.map((account) => {
                            const { userId, avatar, name, social } = account
                            return (
                                <AccountCard key={userId}>
                                    <AccountAvatar
                                        src={avatar.url}
                                        alt={avatarIconAltText}
                                    />
                                    <AccountInfo>
                                        <AccountName>{name}</AccountName>
                                        <AccountSocial>{social}</AccountSocial>
                                    </AccountInfo>
                                    <FollowButton
                                        onClick={handleFollowAccount(account)}
                                    >
                                        {user.following.includes(userId)
                                            ? unfollow
                                            : follow}
                                    </FollowButton>
                                </AccountCard>
                            )
                        })}
                    </Accounts>
                    <ShowMoreLink onClick={handleClickShowMore}>
                        {showMore}
                    </ShowMoreLink>
                </AccountsSection>
            )}
        </>
    )
}
