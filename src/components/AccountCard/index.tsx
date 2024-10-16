import { useNavigate } from 'react-router-dom'

import { avatarIconAltText } from './config'
import {
    AccountAvatar,
    AccountInfo,
    AccountName,
    AccountSocial,
    Card,
} from './styled'
import { AccountCardProps } from './types'

import { FollowButton } from '@components/FollowButton'
import { userPath } from '@constants'

export const AccountCard = ({
    account,
    withButton = true,
}: AccountCardProps) => {
    const { userId, avatar, name, social } = account

    const navigate = useNavigate()

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
            <AccountInfo onClick={handleClickAccount}>
                <AccountName>{name}</AccountName>
                <AccountSocial>{social}</AccountSocial>
            </AccountInfo>
            {withButton && <FollowButton account={account} />}
        </Card>
    )
}
