import { useEffect, useState } from 'react'

import { imageAltText, successText, tweetsText } from './config'
import { ProfileInfo } from './ProfileInfo'
import { ProfileTweets } from './ProfileTweets'
import { Image, ProfileContent, Tweets, TweetsHeader } from './styled'
import { ProfileMainContentProps } from './types'

import { EditProfileModal } from '@components/EditProfileModal'
import { Header } from '@components/Header'
import Modal from '@components/Modal'
import Notify from '@components/Notify'
import { TweetCreator } from '@components/TweetCreator'
import { images, notifyTimeout } from '@constants'
import { uploadUserDataToStorage } from '@firebase'
import { useAppDispatch, useAppSelector } from '@hooks'
import {
    loaderStatesSelector,
    notifySelector,
    openedStatesSelector,
    updateIsTweetModalOpen,
    updateLoadingInitialData,
    updateNotifyText,
    userSelector,
} from '@store'
import { AvatarImage, EditModalData } from '@types'

export const ProfileMainContent = ({ user }: ProfileMainContentProps) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)

    const dispatch = useAppDispatch()
    const { user: currentUser } = useAppSelector(userSelector)
    const { text } = useAppSelector(notifySelector)
    const { isLoadingInitialData } = useAppSelector(loaderStatesSelector)
    const { isTweetModalOpen } = useAppSelector(openedStatesSelector)

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

    const uploadUserData = (data: EditModalData, image: AvatarImage) => {
        uploadUserDataToStorage(data, user.docId, image, dispatch)
    }

    if (user.userId === '' && !isLoadingInitialData) {
        dispatch(updateLoadingInitialData(true))
    }

    if (user.userId !== '' && isLoadingInitialData) {
        dispatch(updateLoadingInitialData(false))
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

    const handleOpenModalTweet = () => {
        dispatch(updateIsTweetModalOpen(false))
    }

    const isUserTweet = currentUser.userId === user.userId
    return (
        <>
            <ProfileContent>
                <Header user={user} />
                <Image src={images.profileBackground} alt={imageAltText} />
                <ProfileInfo
                    user={user}
                    handleChangeIsOpenModal={handleChangeIsOpenModal}
                />
                {isUserTweet && <TweetCreator />}
                <Tweets>
                    <TweetsHeader>{tweetsText}</TweetsHeader>
                    <ProfileTweets user={user} />
                </Tweets>
            </ProfileContent>
            {isEditModalOpen && (
                <EditProfileModal
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
