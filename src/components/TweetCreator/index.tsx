import { useState } from 'react'
import { v4 } from 'uuid'

import { avtarIconAltText, tweetButtonText } from './config'
import {
    ButtonWrap,
    CreatorSpinner,
    ImageWrap,
    TweetButton,
    TweetButtonBlock,
    TweetCreatorBlock,
    TweetIcon,
} from './styled'
import { TweetCreatorProps } from './types'

import FileUploader from '@components/TweetCreator/FilesUploader'
import { uploadTweetsToStorage } from '@firebase'
import { useAppDispatch, useAppSelector } from '@hooks'
import { updateLoadingTweet } from '@store'
import { TweetImageType, TweetStorageType } from '@types'

export const TweetCreator = ({ isModal = false }: TweetCreatorProps) => {
    const [tweetText, setTweetText] = useState('')
    const [createdTweetImages, setCreatedTweetImages] = useState<
        TweetImageType[] | null
    >(null)

    const dispatch = useAppDispatch()
    const { user } = useAppSelector((state) => state.user)
    const { isLoadingTweet } = useAppSelector((state) => state.boolean)

    const handleChangeTweetText = (value: string) => {
        setTweetText(value)
    }

    const handleDeleteTweetImage = (id: string) => {
        setCreatedTweetImages((prev) => prev!.filter((file) => file.id !== id))
    }

    const uploadTweets = () => {
        const uploadTweet: TweetStorageType = getTweet()
        dispatch(updateLoadingTweet(true))
        uploadTweetsToStorage(uploadTweet, user, dispatch)
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

    const resetCreateTweet = () => {
        setCreatedTweetImages(null)
        setTweetText('')
    }

    const handleCreateTweet = () => {
        uploadTweets()
        resetCreateTweet()
    }

    const isTweetDisabled = tweetText === '' ? true : false

    return (
        <TweetCreatorBlock $isModal={isModal}>
            <ImageWrap>
                <TweetIcon src={user.avatar.url} alt={avtarIconAltText} />
            </ImageWrap>
            <FileUploader
                isTweet={true}
                tweetText={tweetText}
                tweetImages={createdTweetImages}
                handleChangeTweetText={handleChangeTweetText}
                handleDeleteTweetImage={handleDeleteTweetImage}
                handleUpdateImage={addTweetImage}
                isModal={isModal}
            />
            <TweetButtonBlock>
                {isLoadingTweet ? (
                    <CreatorSpinner />
                ) : (
                    <ButtonWrap>
                        <TweetButton
                            onClick={handleCreateTweet}
                            disabled={isTweetDisabled}
                            $isTweetDisabled={isTweetDisabled}
                        >
                            {tweetButtonText}
                        </TweetButton>
                    </ButtonWrap>
                )}
            </TweetButtonBlock>
        </TweetCreatorBlock>
    )
}
