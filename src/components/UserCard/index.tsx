import { memo } from 'react'
import { useNavigate } from 'react-router-dom'

import { avatarIconAltText } from './config'
import { Card, UserAvatar, UserInfo, UserName, UserSocial } from './styled'
import { UserCardProps } from './types'

import { FollowButton } from '@components/FollowButton'
import { userPath } from '@constants'

const UserCard = ({ user, withFollowButton = true }: UserCardProps) => {
    const { avatar, name, social } = user

    const navigate = useNavigate()

    const handleClickUser = () => {
        navigate(`${userPath}/${user.userId}`)
    }

    return (
        <Card>
            <UserAvatar
                src={avatar.url}
                alt={avatarIconAltText}
                onClick={handleClickUser}
            />
            <UserInfo onClick={handleClickUser}>
                <UserName>{name}</UserName>
                <UserSocial>{social}</UserSocial>
            </UserInfo>
            {withFollowButton && <FollowButton account={user} />}
        </Card>
    )
}

export default memo(UserCard)
