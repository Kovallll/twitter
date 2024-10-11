import { showMore, title } from '../config'
import { Accounts, AccountsSection, ShowMoreLink, Title } from '../styled'
import { SkeletonAvatar, SkeletonName, SkeletonSocial } from './styled'

import { follow } from '@components/AccountCard/config'
import { AccountInfo, Card, FollowButton } from '@components/AccountCard/styled'

export const Loader = () => {
    return (
        <AccountsSection>
            <>
                <Title>{title}</Title>
                <Accounts>
                    <Card>
                        <SkeletonAvatar />
                        <AccountInfo>
                            <SkeletonName />
                            <SkeletonSocial />
                        </AccountInfo>
                        <FollowButton>{follow}</FollowButton>
                    </Card>
                    <Card>
                        <SkeletonAvatar />
                        <AccountInfo>
                            <SkeletonName />
                            <SkeletonSocial />
                        </AccountInfo>
                        <FollowButton>{follow}</FollowButton>
                    </Card>
                </Accounts>
                <ShowMoreLink>{showMore}</ShowMoreLink>
            </>
        </AccountsSection>
    )
}
