import { useState } from 'react'

import {
    EditBlock,
    EditButton,
    Followers,
    Following,
    HeaderSubtitle,
    HeaderTextBlock,
    HeaderTitle,
    Image,
    InfoBlock,
    InfoText,
    ProfileContent,
    ProfileDescription,
    ProfileFollowBlock,
    ProfileHeader,
    ProfileImage,
    ProfileInfo,
    ProfileName,
    ProfileSocial,
    Tweets,
    TweetsHeader,
} from './styled'
import { ProfileMainContentProps } from './types'

import { EditProfileModal } from '@components/EditProfileModal'
import { ToggleButton } from '@components/ToggleThemeButton'
import { Tweet } from '@components/Tweet'
import { TweetLoader } from '@components/Tweet/TweetLoader'
import { TweetCreator } from '@components/TweetCreator'
import { images } from '@constants'
import {
    deleteTweetFromStorage,
    uploadProfileAvatar,
    uploadUserDataToStorage,
} from '@firebase'
import { useAppDispatch, useAppSelector } from '@hooks'
import { EditModalData } from '@types'

export const ProfileMainContent = ({}: ProfileMainContentProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isLoading, _] = useState(false)
    const handleChangeIsOpenModal = () => {
        setIsOpen((prev) => !prev)
    }
    const dispatch = useAppDispatch()
    const { docId, user } = useAppSelector((state) => state.user)
    const uploadUserData = (data: EditModalData) => {
        uploadUserDataToStorage(data, docId, dispatch)
    }

    const handleEditProfile = (data: EditModalData, file: File | null) => {
        handleChangeIsOpenModal()
        if (file) {
            const image = {
                id: user.avatar.id,
                file,
            }
            uploadProfileAvatar(image, docId, user, dispatch)
        }
        uploadUserData(data)
    }

    const handleDeleteTweet = (tweetId: string) => {
        deleteTweetFromStorage(user.tweets!, tweetId, docId, dispatch)
    }

    return (
        <>
            <ProfileContent>
                <ProfileHeader>
                    <HeaderTextBlock>
                        <HeaderTitle>{user?.name}</HeaderTitle>
                        <HeaderSubtitle>
                            {user?.tweets?.length ?? 0} Tweets
                        </HeaderSubtitle>
                    </HeaderTextBlock>
                    <ToggleButton />
                </ProfileHeader>
                <Image src={images.profileBackground} />
                <ProfileInfo>
                    <InfoBlock>
                        <ProfileImage src={user?.avatar.url} />
                        <InfoText>
                            <ProfileName>{user?.name}</ProfileName>
                            <ProfileSocial>{user?.social ?? ''}</ProfileSocial>
                            <ProfileDescription>
                                {user?.description ?? ''}
                            </ProfileDescription>
                            <ProfileFollowBlock>
                                <Following>
                                    <strong>{user?.following.length}</strong>
                                    Following
                                </Following>
                                <Followers>
                                    <strong>{user?.followers.length}</strong>
                                    Followers
                                </Followers>
                            </ProfileFollowBlock>
                        </InfoText>
                    </InfoBlock>
                    <EditBlock>
                        <EditButton
                            $withBorder={true}
                            onClick={handleChangeIsOpenModal}
                        >
                            Edit profile
                        </EditButton>
                    </EditBlock>
                </ProfileInfo>
                <TweetCreator />
                <Tweets>
                    <TweetsHeader>Tweets</TweetsHeader>
                    {user.tweets?.map((data) => {
                        return isLoading ? (
                            <TweetLoader />
                        ) : (
                            <Tweet
                                data={data}
                                handleDeleteTweet={handleDeleteTweet}
                            />
                        )
                    })}
                </Tweets>
            </ProfileContent>
            {isOpen && (
                <EditProfileModal
                    email={user.email}
                    handleChangeIsOpenModal={handleChangeIsOpenModal}
                    handleEditProfile={handleEditProfile}
                />
            )}
        </>
    )
}
