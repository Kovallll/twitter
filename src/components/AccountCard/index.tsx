import { memo } from 'react'
import { useNavigate } from 'react-router-dom'

import { avatarIconAltText } from './config'
import { Card, UserAvatar, UserInfo, UserName, UserSocial } from './styled'
import { AccountCardProps } from './types'

import { FollowButton } from '@components/FollowButton'
import { userPath } from '@constants'

const AccountCard = ({
    account,
    withFollowButton = true,
}: AccountCardProps) => {
    const { avatar, name, social } = account

    const navigate = useNavigate()

    const handleClickAccount = () => {
        navigate(`${userPath}/${account.userId}`)
    }

    return (
        <Card>
            <UserAvatar
                src={avatar.url}
                alt={avatarIconAltText}
                onClick={handleClickAccount}
            />
            <UserInfo onClick={handleClickAccount}>
                <UserName>{name}</UserName>
                <UserSocial>{social}</UserSocial>
            </UserInfo>
            {withFollowButton && <FollowButton account={account} />}
        </Card>
    )
}

export default memo(AccountCard)
