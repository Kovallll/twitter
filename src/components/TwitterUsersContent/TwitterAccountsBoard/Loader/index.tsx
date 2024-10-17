import { showMore, title } from '../config'
import { Accounts, AccountsSection, ShowMoreLink, Title } from '../styled'
import { SkeletonAvatar, SkeletonName, SkeletonSocial } from './styled'

import { AccountInfo, Card } from '@components/AccountCard/styled'
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
                        <AccountInfo>
                            <SkeletonName />
                            <SkeletonSocial />
                        </AccountInfo>
                        <FollowButton account={defaultUser} />
                    </Card>
                    <Card>
                        <SkeletonAvatar />
                        <AccountInfo>
                            <SkeletonName />
                            <SkeletonSocial />
                        </AccountInfo>
                        <FollowButton account={defaultUser} />
                    </Card>
                </Accounts>
                <ShowMoreLink>{showMore}</ShowMoreLink>
            </>
        </AccountsSection>
    )
}
