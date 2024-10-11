import {
    defaultDescription,
    defaultSocial,
    editText,
    followersText,
    followingText,
    profileIconAltText,
} from '../config'
import { ProfileLoader } from './Loader'
import {
    EditBlock,
    EditButton,
    Follow,
    FollowCount,
    ImageWrap,
    InfoBlock,
    ProfileBottomInfo,
    ProfileDescription,
    ProfileFollowBlock,
    ProfileImage,
    ProfileName,
    ProfileSocial,
    ProfileTopInfo,
} from './styled'
import { ProfileInfoProps } from './types'

import { useAppSelector } from '@hooks'
import { booleanStatesSelector, userSelector } from '@store'

export const ProfileInfo = ({
    user,
    handleChangeIsOpenModal,
}: ProfileInfoProps) => {
    const { isLoadingInitialData } = useAppSelector(booleanStatesSelector)
    const { user: currentuUser } = useAppSelector(userSelector)

    const isUserTweet = currentuUser.userId === user.userId
    const userSocial =
        user.social && user.social !== '' ? user.social : defaultSocial
    const userDescription =
        user.description && user.description !== ''
            ? user.description
            : defaultDescription

    if (isLoadingInitialData) {
        return <ProfileLoader />
    }

    return (
        <InfoBlock>
            <ProfileTopInfo>
                <ImageWrap>
                    <ProfileImage
                        src={user.avatar.url}
                        alt={profileIconAltText}
                    />
                </ImageWrap>
                <EditBlock>
                    {isUserTweet && (
                        <EditButton
                            $withBorder={true}
                            onClick={handleChangeIsOpenModal}
                        >
                            {editText}
                        </EditButton>
                    )}
                </EditBlock>
            </ProfileTopInfo>
            <ProfileBottomInfo>
                <ProfileName>{user.name}</ProfileName>
                <ProfileSocial>{userSocial}</ProfileSocial>
                <ProfileDescription>{userDescription}</ProfileDescription>
                <ProfileFollowBlock>
                    <Follow>
                        <FollowCount>{user.following.length}</FollowCount>
                        {followingText}
                    </Follow>
                    <Follow>
                        <FollowCount>{user.followers.length}</FollowCount>
                        {followersText}
                    </Follow>
                </ProfileFollowBlock>
            </ProfileBottomInfo>
        </InfoBlock>
    )
}
