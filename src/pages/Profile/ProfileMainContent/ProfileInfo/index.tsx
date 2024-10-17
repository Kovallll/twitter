import { useState } from 'react'

import {
    defaultDescription,
    defaultSocial,
    editText,
    followersText,
    followingText,
    profileIconAltText,
    successText,
} from './config'
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

import { EditProfileModal } from '@components/EditProfileModal'
import { uploadUserDataToStorage } from '@firebase'
import { useAppDispatch, useAppSelector } from '@hooks'
import { loaderStatesSelector, updateNotifyText, userSelector } from '@store'
import { AvatarImage, EditModalData } from '@types'

export const ProfileInfo = () => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)

    const dispatch = useAppDispatch()
    const { isLoadingInitialData } = useAppSelector(loaderStatesSelector)
    const { currentUser, user } = useAppSelector(userSelector)

    const {
        avatar,
        docId,
        description,
        social,
        userId,
        followers,
        following,
        name,
    } = currentUser

    const handleChangeIsOpenModal = () => {
        setIsEditModalOpen((prev) => !prev)
    }

    const uploadUserData = (data: EditModalData, image: AvatarImage) => {
        uploadUserDataToStorage(data, docId, image, dispatch)
    }

    const handleEditProfile = (data: EditModalData, file: File | null) => {
        handleChangeIsOpenModal()
        const image = {
            id: avatar.id,
            file,
        }
        uploadUserData(data, image)
        dispatch(updateNotifyText(successText))
    }

    const isUserTweet = user.userId === userId
    const userSocial =
        (social && social !== '') || !isUserTweet ? social : defaultSocial
    const userDescription =
        (description && description !== '') || !isUserTweet
            ? description
            : defaultDescription

    if (isLoadingInitialData) {
        return <ProfileLoader />
    }

    return (
        <InfoBlock>
            <ProfileTopInfo>
                <ImageWrap>
                    <ProfileImage src={avatar.url} alt={profileIconAltText} />
                </ImageWrap>
                <EditBlock>
                    {isUserTweet && (
                        <EditButton
                            $withBorder={true}
                            onClick={handleChangeIsOpenModal}
                            data-cy="edit-button"
                        >
                            {editText}
                        </EditButton>
                    )}
                </EditBlock>
            </ProfileTopInfo>
            <ProfileBottomInfo>
                <ProfileName data-cy="edit-button">{name}</ProfileName>
                <ProfileSocial data-cy="edit-button">
                    {userSocial}
                </ProfileSocial>
                <ProfileDescription data-cy="profile-description">
                    {userDescription}
                </ProfileDescription>
                <ProfileFollowBlock>
                    <Follow>
                        <FollowCount>{following.length}</FollowCount>
                        {followingText}
                    </Follow>
                    <Follow>
                        <FollowCount>{followers.length}</FollowCount>
                        {followersText}
                    </Follow>
                </ProfileFollowBlock>
            </ProfileBottomInfo>
            {isEditModalOpen && (
                <EditProfileModal
                    handleChangeIsOpenModal={handleChangeIsOpenModal}
                    handleEditProfile={handleEditProfile}
                />
            )}
        </InfoBlock>
    )
}
