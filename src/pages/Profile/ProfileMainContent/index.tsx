import { useEffect } from 'react'

import { imageAltText, tweetsText } from './config'
import { ProfileInfo } from './ProfileInfo'
import { ProfileTweets } from './ProfileTweets'
import { Image, ProfileContent, Tweets, TweetsHeader } from './styled'
import { ProfileMainContentProps } from './types'

import { Header } from '@components/Header'
import Modal from '@components/Modal'
import Notify from '@components/Notify'
import { TweetCreator } from '@components/TweetCreator'
import { images, notifyTimeout } from '@constants'
import { useAppDispatch, useAppSelector } from '@hooks'
import {
    notifySelector,
    openedStatesSelector,
    updateIsTweetModalOpen,
    updateNotifyText,
    userSelector,
} from '@store'

export const ProfileMainContent = ({ user }: ProfileMainContentProps) => {
    const dispatch = useAppDispatch()
    const { user: currentUser } = useAppSelector(userSelector)
    const { text } = useAppSelector(notifySelector)
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

    const handleOpenModalTweet = () => {
        dispatch(updateIsTweetModalOpen(false))
    }

    const isUserTweet = currentUser.userId === user.userId
    return (
        <>
            <ProfileContent>
                <Header user={user} />
                <Image src={images.profileBackground} alt={imageAltText} />
                <ProfileInfo user={user} />
                {isUserTweet && <TweetCreator />}
                <Tweets>
                    <TweetsHeader>{tweetsText}</TweetsHeader>
                    <ProfileTweets user={user} />
                </Tweets>
            </ProfileContent>
            {isTweetModalOpen && (
                <Modal onCloseModal={handleOpenModalTweet}>
                    <TweetCreator isModal={true} />
                </Modal>
            )}
            {text && <Notify text={text} isSuccess={true} />}
        </>
    )
}
