import { useState } from 'react'

import {
    defaultDescription,
    defaultSocial,
    editText,
    followersText,
    followingText,
    profileIconAltText,
    successText,
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

import { EditProfileModal } from '@components/EditProfileModal'
import { uploadUserDataToStorage } from '@firebase'
import { useAppDispatch, useAppSelector } from '@hooks'
import { loaderStatesSelector, updateNotifyText, userSelector } from '@store'
import { AvatarImage, EditModalData } from '@types'

export const ProfileInfo = ({ user }: ProfileInfoProps) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)

    const dispatch = useAppDispatch()
    const { isLoadingInitialData } = useAppSelector(loaderStatesSelector)
    const { user: currentuUser } = useAppSelector(userSelector)

    const handleChangeIsOpenModal = () => {
        setIsEditModalOpen((prev) => !prev)
    }

    const uploadUserData = (data: EditModalData, image: AvatarImage) => {
        uploadUserDataToStorage(data, user.docId, image, dispatch)
    }

    const handleEditProfile = (data: EditModalData, file: File | null) => {
        handleChangeIsOpenModal()
        const image = {
            id: user.avatar.id,
            file,
        }
        uploadUserData(data, image)
        dispatch(updateNotifyText(successText))
    }

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
            {isEditModalOpen && (
                <EditProfileModal
                    handleChangeIsOpenModal={handleChangeIsOpenModal}
                    handleEditProfile={handleEditProfile}
                />
            )}
        </InfoBlock>
    )
}
