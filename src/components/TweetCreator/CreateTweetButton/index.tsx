import { v4 } from 'uuid'

import { tweetErrorText, tweetSuccesText } from '../config'
import { ButtonWrap, CreatorSpinner, TweetButton } from './styled'
import { CreateTweetButtonProps } from './types'

import { uploadTweetsToStorage } from '@firebase'
import { useAppDispatch, useAppSelector } from '@hooks'
import {
    loaderStatesSelector,
    updateIsTweetModalOpen,
    updateLoadingTweet,
    userSelector,
} from '@store'
import { TweetStorageType } from '@types'

export const CreateTweetButton = (props: CreateTweetButtonProps) => {
    const dispatch = useAppDispatch()
    const { isLoadingTweet } = useAppSelector(loaderStatesSelector)
    const { user } = useAppSelector(userSelector)

    const {
        tweetText,
        createdTweetImages,
        handleChangeCreatedTweetImages,
        handleChangeTweetText,
    } = props

    const handleCreateTweet = () => {
        uploadTweets()
        resetCreateTweet()
        dispatch(updateIsTweetModalOpen(false))
    }

    const resetCreateTweet = () => {
        handleChangeCreatedTweetImages(null)
        handleChangeTweetText('')
    }

    const getTweet = () => {
        const timePost = Date.now()
        const tweetId = v4()
        const tweet: TweetStorageType = {
            tweetId,
            imagesData: createdTweetImages,
            text: tweetText,
            timePost: timePost,
            liked: [],
        }

        return tweet
    }

    const uploadTweets = () => {
        const uploadTweet: TweetStorageType = getTweet()
        dispatch(updateLoadingTweet(true))
        uploadTweetsToStorage(uploadTweet, user, dispatch)
    }

    const isTweetDisabled = tweetText === '' ? true : false
    const tweetButtonText = isTweetDisabled ? tweetErrorText : tweetSuccesText

    if (isLoadingTweet) {
        return <CreatorSpinner />
    }
    return (
        <ButtonWrap>
            <TweetButton
                onClick={handleCreateTweet}
                disabled={isTweetDisabled}
                $isTweetDisabled={isTweetDisabled}
                data-cy="tweet-button"
            >
                {tweetButtonText}
            </TweetButton>
        </ButtonWrap>
    )
}
