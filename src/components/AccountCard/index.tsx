import { useNavigate } from 'react-router-dom'

import { avatarIconAltText, follow, unfollow } from './config'
import {
    AccountAvatar,
    AccountInfo,
    AccountName,
    AccountSocial,
    Card,
    FollowButton,
} from './styled'
import { AccountCardProps } from './types'

import { userPath } from '@constants'
import { followOrUnfollowAccount } from '@firebase'
import { useAppDispatch, useAppSelector } from '@hooks'
import { userSelector } from '@store'
import { UserData } from '@types'

export const AccountCard = ({ account }: AccountCardProps) => {
    const { userId, avatar, name, social } = account

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { user } = useAppSelector(userSelector)

    const handleFollowAccount = (account: UserData) => () => {
        followOrUnfollowAccount(user, account, dispatch)
    }

    const handleClickAccount = () => {
        navigate(`${userPath}/${account.userId}`)
    }

    return (
        <Card key={userId}>
            <AccountAvatar
                src={avatar.url}
                alt={avatarIconAltText}
                onClick={handleClickAccount}
            />
            <AccountInfo>
                <AccountName>{name}</AccountName>
                <AccountSocial>{social}</AccountSocial>
            </AccountInfo>
            <FollowButton onClick={handleFollowAccount(account)}>
                {user.following.includes(userId) ? unfollow : follow}
            </FollowButton>
        </Card>
    )
}
