import { showMore, title } from '../config'
import { Accounts, AccountsSection, ShowMoreLink, Title } from '../styled'
import { SkeletonAvatar, SkeletonName, SkeletonSocial } from './styled'

import { Card, UserInfo } from '@components/AccountCard/styled'
import { FollowButton } from '@components/FollowButton'
import { defaultUser } from '@constants'

export const Loader = () => {
    return (
        <AccountsSection>
            <>
                <Title>{title}</Title>
                <Accounts>
                    <Card>
                        <SkeletonAvatar />
                        <UserInfo>
                            <SkeletonName />
                            <SkeletonSocial />
                        </UserInfo>
                        <FollowButton account={defaultUser} />
                    </Card>
                    <Card>
                        <SkeletonAvatar />
                        <UserInfo>
                            <SkeletonName />
                            <SkeletonSocial />
                        </UserInfo>
                        <FollowButton account={defaultUser} />
                    </Card>
                </Accounts>
                <ShowMoreLink>{showMore}</ShowMoreLink>
            </>
        </AccountsSection>
    )
}
