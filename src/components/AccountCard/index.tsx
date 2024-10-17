import { memo } from 'react'
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
            <AccountAvatar
                src={avatar.url}
                alt={avatarIconAltText}
                onClick={handleClickAccount}
            />
            <AccountInfo onClick={handleClickAccount}>
                <AccountName>{name}</AccountName>
                <AccountSocial>{social}</AccountSocial>
            </AccountInfo>
            {withFollowButton && <FollowButton account={account} />}
        </Card>
    )
}

export default memo(AccountCard)
