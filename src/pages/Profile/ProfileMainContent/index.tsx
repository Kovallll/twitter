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
    updateCurrentUser,
    updateIsTweetModalOpen,
    updateNotifyText,
    userSelector,
} from '@store'

export const ProfileMainContent = ({ user }: ProfileMainContentProps) => {
    const dispatch = useAppDispatch()
    const { text } = useAppSelector(notifySelector)
    const { user: activeUser, currentUser } = useAppSelector(userSelector)
    const { isTweetModalOpen } = useAppSelector(openedStatesSelector)

    useEffect(() => {
        let timeout: NodeJS.Timeout
        if (text) {
            timeout = setTimeout(() => {
                dispatch(updateNotifyText(''))
            }, notifyTimeout)
        }
        dispatch(updateCurrentUser(user))
        return () => {
            clearTimeout(timeout)
        }
    }, [dispatch, text, user])

    const handleOpenModalTweet = () => {
        dispatch(updateIsTweetModalOpen(false))
    }

    const isUserTweet = currentUser.userId === activeUser.userId
    return (
        <>
            <ProfileContent>
                <Header />
                <Image src={images.profileBackground} alt={imageAltText} />
                <ProfileInfo />
                {isUserTweet && <TweetCreator />}
                <Tweets>
                    <TweetsHeader>{tweetsText}</TweetsHeader>
                    <ProfileTweets user={user}/>
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
