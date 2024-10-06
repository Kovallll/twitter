import { useState } from 'react'
import { v4 } from 'uuid'

import {
    ProfileIcon,
    TweetButton,
    TweetButtonBlock,
    TweetCreatorBlock,
} from './styled'
import { TweetCreatorProps } from './types'

import FileUploader from '@components/FilesUploader'
import { months } from '@constants'
import { uploadTweetsToStorage } from '@firebase'
import { useAppDispatch, useAppSelector } from '@hooks'
import { theme } from '@styles/theme'
import { TweetImageType, TweetStorageType } from '@types'

export const TweetCreator = ({}: TweetCreatorProps) => {
    const [tweetText, setTweetText] = useState('')
    const [createdTweetImages, setCreatedTweetImages] = useState<
        TweetImageType[] | null
    >(null)
    const isTweetDisabled = tweetText === '' ? true : false
    const tweetButtonBg = isTweetDisabled
        ? theme.palette.gray
        : theme.palette.lightBlue
    const dispatch = useAppDispatch()
    const { user, docId } = useAppSelector((state) => state.user)
    const uploadTweets = () => {
        const uploadTweet: TweetStorageType = getTweet()
        uploadTweetsToStorage(uploadTweet, user, docId, dispatch)
    }
    const addTweetImage = (
        event: ProgressEvent<FileReader>,
        file: File,
        id?: string
    ) => {
        const url = event.target?.result as string
        const tweetImage = {
            id: id ?? '',
            url,
            file,
        }
        setCreatedTweetImages((prev) =>
            prev ? [...prev, tweetImage] : [tweetImage]
        )
    }

    const handleDeleteTweetImage = (id: string) => {
        setCreatedTweetImages((prev) => prev!.filter((file) => file.id !== id))
    }

    const handleChangeTweetText = (value: string) => {
        setTweetText(value)
    }
    const getTweet = () => {
        const timePost = getTimePost()
        const tweetId = v4()
        const tweet: TweetStorageType = {
            tweetId,
            imagesData: createdTweetImages,
            text: tweetText,
            timePost: timePost,
        }

        return tweet
    }

    const getTimePost = () => {
        const date = new Date()
        const timePost = `${months[date.getMonth()]} ${date.getDay() - 1}`

        return timePost
    }

    const resetCreateTweet = () => {
        setCreatedTweetImages(null)
        setTweetText('')
    }

    const handleCreateTweet = () => {
        uploadTweets()
        resetCreateTweet()
    }
    return (
        <TweetCreatorBlock>
            <ProfileIcon src={user.avatar.url} />
            <FileUploader
                isTweet={true}
                tweetText={tweetText}
                tweetImages={createdTweetImages}
                handleChangeTweetText={handleChangeTweetText}
                handleDeleteTweetImage={handleDeleteTweetImage}
                handleUpdateImage={addTweetImage}
            />
            <TweetButtonBlock>
                <TweetButton
                    $backgroundColor={tweetButtonBg}
                    $color={theme.palette.common.white}
                    onClick={handleCreateTweet}
                    disabled={isTweetDisabled}
                >
                    Tweet
                </TweetButton>
            </TweetButtonBlock>
        </TweetCreatorBlock>
    )
}
