import { useState } from 'react'

import { avtarIconAltText } from './config'
import { CreateTweetButton } from './CreateTweetButton'
import {
    ImageWrap,
    TweetButtonBlock,
    TweetCreatorBlock,
    TweetIcon,
} from './styled'
import { TweetCreatorProps } from './types'

import FileUploader from '@components/TweetCreator/FilesUploader'
import { useAppSelector } from '@hooks'
import { userSelector } from '@store'
import { TweetImageType } from '@types'

export const TweetCreator = ({ isModal = false }: TweetCreatorProps) => {
    const [tweetText, setTweetText] = useState('')
    const [createdTweetImages, setCreatedTweetImages] = useState<
        TweetImageType[] | null
    >(null)

    const { user } = useAppSelector(userSelector)

    const handleChangeTweetText = (value: string) => {
        setTweetText(value)
    }

    const handleChangeCreatedTweetImage = (images: TweetImageType[] | null) => {
        setCreatedTweetImages(images)
    }

    const handleDeleteTweetImage = (id: string) => {
        setCreatedTweetImages((prev) =>
            prev ? prev.filter((file) => file.id !== id) : prev
        )
    }

    const addTweetImage = (
        event: ProgressEvent<FileReader>,
        file: File,
        id: string
    ) => {
        const url = event.target?.result as string
        const tweetImage = {
            id: id,
            url,
            file,
        }
        setCreatedTweetImages((prev) =>
            prev ? [...prev, tweetImage] : [tweetImage]
        )
    }

    return (
        <TweetCreatorBlock $isModal={isModal} data-cy="tweet-creator">
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
                <CreateTweetButton
                    tweetText={tweetText}
                    createdTweetImages={createdTweetImages}
                    handleChangeCreatedTweetImages={
                        handleChangeCreatedTweetImage
                    }
                    handleChangeTweetText={handleChangeTweetText}
                />
            </TweetButtonBlock>
        </TweetCreatorBlock>
    )
}
