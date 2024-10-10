import { follow, showMore, title } from '../config'
import {
    AccountCard,
    AccountInfo,
    Accounts,
    AccountsSection,
    FollowButton,
    ShowMoreLink,
    Title,
} from '../styled'
import { SkeletonAvatar, SkeletonName, SkeletonSocial } from './styled'

export const Loader = () => {
    return (
        <AccountsSection>
            <>
                <Title>{title}</Title>
                <Accounts>
                    <AccountCard>
                        <SkeletonAvatar />
                        <AccountInfo>
                            <SkeletonName />
                            <SkeletonSocial />
                        </AccountInfo>
                        <FollowButton>{follow}</FollowButton>
                    </AccountCard>
                    <AccountCard>
                        <SkeletonAvatar />
                        <AccountInfo>
                            <SkeletonName />
                            <SkeletonSocial />
                        </AccountInfo>
                        <FollowButton>{follow}</FollowButton>
                    </AccountCard>
                </Accounts>
                <ShowMoreLink>{showMore}</ShowMoreLink>
            </>
        </AccountsSection>
    )
}
