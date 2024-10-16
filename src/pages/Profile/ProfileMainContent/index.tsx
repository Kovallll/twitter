import { useEffect, useState } from 'react'

import {
    defaultDescription,
    defaultSocial,
    editText,
    followersText,
    followingText,
    imageAltText,
    profileIconAltText,
    successText,
    tweetsText,
} from './config'
import { ProfileLoader } from './Loader'
import {
    EditBlock,
    EditButton,
    Follow,
    FollowCount,
    Image,
    ImageWrap,
    InfoBlock,
    ProfileBottomInfo,
    ProfileContent,
    ProfileDescription,
    ProfileFollowBlock,
    ProfileImage,
    ProfileName,
    ProfileSocial,
    ProfileTopInfo,
    Tweets,
    TweetsHeader,
    TweetSpinner,
} from './styled'

import { EditProfileModal } from '@components/EditProfileModal'
import { Header } from '@components/Header'
import Modal from '@components/Modal'
import Notify from '@components/Notify'
import { Tweet } from '@components/Tweet'
import { TweetCreator } from '@components/TweetCreator'
import { images, notifyTimeout } from '@constants'
import {
    deleteTweetFromStorage,
    uploadProfileAvatar,
    uploadUserDataToStorage,
} from '@firebase'
import { useAppDispatch, useAppSelector } from '@hooks'
import {
    booleanStatesSelector,
    notifySelector,
    updateIsTweetModalOpen,
    updateLoadingInitialData,
    updateNotifyText,
    userSelector,
} from '@store'
import { EditModalData } from '@types'

export const ProfileMainContent = () => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)

    const dispatch = useAppDispatch()
    const { user } = useAppSelector(userSelector)
    const { text } = useAppSelector(notifySelector)
    const { isLoadingInitialData, isTweetModalOpen } = useAppSelector(
        booleanStatesSelector
    )
    console.log(user, 'user')
    useEffect(() => {
        let timeout: NodeJS.Timeout
        if (text) {
            timeout = setTimeout(() => {
                dispatch(updateNotifyText(''))
            }, notifyTimeout)
        }

        return () => {
            clearTimeout(timeout)
        }
    }, [dispatch, text])

    const handleChangeIsOpenModal = () => {
        setIsEditModalOpen((prev) => !prev)
    }

    const uploadUserData = (data: EditModalData) => {
        uploadUserDataToStorage(data, user.docId, dispatch)
    }

    if (user.userId === '' && !isLoadingInitialData) {
        dispatch(updateLoadingInitialData(true))
    }

    if (user.userId !== '' && isLoadingInitialData) {
        dispatch(updateLoadingInitialData(false))
    }

    const handleEditProfile = (data: EditModalData, file: File | null) => {
        handleChangeIsOpenModal()
        if (file) {
            const image = {
                id: user.avatar.id,
                file,
            }
            uploadProfileAvatar(image, user, dispatch)
        }
        uploadUserData(data)
        dispatch(updateNotifyText(successText))
    }

    const handleDeleteTweet = (tweetId: string) => {
        deleteTweetFromStorage(user.tweets!, tweetId, user.docId, dispatch)
    }

    const handleOpenModalTweet = () => {
        dispatch(updateIsTweetModalOpen(false))
    }

    const userSocial =
        user.social && user.social !== '' ? user.social : defaultSocial
    const userDescription =
        user.description && user.description !== ''
            ? user.description
            : defaultDescription
    return (
        <>
            <ProfileContent>
                <Header />
                <Image src={images.profileBackground} alt={imageAltText} />
                {isLoadingInitialData ? (
                    <ProfileLoader />
                ) : (
                    <InfoBlock>
                        <ProfileTopInfo>
                            <ImageWrap>
                                <ProfileImage
                                    src={user.avatar.url}
                                    alt={profileIconAltText}
                                />
                            </ImageWrap>
                            <EditBlock>
                                <EditButton
                                    $withBorder={true}
                                    onClick={handleChangeIsOpenModal}
                                    data-cy="edit-button"
                                >
                                    {editText}
                                </EditButton>
                            </EditBlock>
                        </ProfileTopInfo>
                        <ProfileBottomInfo>
                            <ProfileName data-cy="profile-name">
                                {user.name}
                            </ProfileName>
                            <ProfileSocial data-cy="profile-social">
                                {userSocial}
                            </ProfileSocial>
                            <ProfileDescription data-cy="profile-description">
                                {userDescription}
                            </ProfileDescription>
                            <ProfileFollowBlock>
                                <Follow>
                                    <FollowCount>
                                        {user.following.length}
                                    </FollowCount>
                                    {followingText}
                                </Follow>
                                <Follow>
                                    <FollowCount>
                                        {user.followers.length}
                                    </FollowCount>
                                    {followersText}
                                </Follow>
                            </ProfileFollowBlock>
                        </ProfileBottomInfo>
                    </InfoBlock>
                )}
                <TweetCreator />
                <Tweets>
                    <TweetsHeader>{tweetsText}</TweetsHeader>
                    {isLoadingInitialData ? (
                        <TweetSpinner />
                    ) : (
                        user.tweets?.map((data) => (
                            <Tweet
                                data={{ tweetData: data, account: user }}
                                handleDeleteTweet={handleDeleteTweet}
                                isUserTweet={true}
                            />
                        ))
                    )}
                </Tweets>
            </ProfileContent>
            {isEditModalOpen && (
                <EditProfileModal
                    email={user.email}
                    handleChangeIsOpenModal={handleChangeIsOpenModal}
                    handleEditProfile={handleEditProfile}
                />
            )}
            {isTweetModalOpen && (
                <Modal onCloseModal={handleOpenModalTweet}>
                    <TweetCreator isModal={true} />
                </Modal>
            )}
            {text && <Notify text={text} isSuccess={true} />}
        </>
    )
}
