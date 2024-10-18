import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { imageAltText, tweetsText } from './config'
import { ProfileInfo } from './ProfileInfo'
import { ProfileTweets } from './ProfileTweets'
import { Image, ProfileContent, Tweets, TweetsHeader } from './styled'

import { Header } from '@components/Header'
import Modal from '@components/Modal'
import Notify from '@components/Notify'
import { TweetCreator } from '@components/TweetCreator'
import { images, notifyTimeout } from '@constants'
import { useAppDispatch, useAppSelector } from '@hooks'
import {
    notifySelector,
    openedStatesSelector,
    totalSelector,
    updateCurrentUser,
    updateIsTweetModalOpen,
    updateNotifyText,
    userSelector,
} from '@store'

export const ProfileMainContent = () => {
    const { userId } = useParams()

    const dispatch = useAppDispatch()
    const { text } = useAppSelector(notifySelector)
    const { user: activeUser } = useAppSelector(userSelector)
    const { isTweetModalOpen } = useAppSelector(openedStatesSelector)
    const { accounts } = useAppSelector(totalSelector)

    const user = userId
        ? accounts.find((user) => user.userId === userId)!
        : activeUser

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

    const isUserTweet = user.userId === activeUser.userId
    return (
        <>
            <ProfileContent>
                <Header />
                <Image src={images.profileBackground} alt={imageAltText} />
                <ProfileInfo />
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
