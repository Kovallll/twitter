import { useEffect, useState } from 'react'

import {
    DeleteOption,
    InfoBlock,
    MoreBlock,
    MoreIcon,
    MorePopup,
    ProfileIcon,
    TopInfoBlock,
    TweetArticle,
    TweetAuthor,
    TweetDate,
    TweetImage,
    TweetImageBlock,
    TweetInfoBlock,
    TweetSocial,
    TweetText,
} from './styled'
import { TweetProps } from './types'

import { ConfirmModal } from '@components/Modal/ConfirmModal'
import { images } from '@constants'
import { dowloadImagesFromStorage } from '@firebase'
import { useAppSelector } from '@hooks'
import { CreatedTweetImageType } from '@types'

export const Tweet = ({ data, handleDeleteTweet }: TweetProps) => {
    const [isMoreOpen, setIsMoreOpen] = useState(false)
    const [isDelete, setIsDelete] = useState(false)
    const [tweetImages, setTweetImages] = useState<
        CreatedTweetImageType[] | null
    >(null)
    const { imagesData, text, timePost, tweetId } = data
    const { user } = useAppSelector((state) => state.user)
    const handleChangeTweetImages = (tweetImages: CreatedTweetImageType) => {
        console.log(tweetImages, 'tweetImages')
        setTweetImages((prev) =>
            prev ? [...prev, tweetImages] : [tweetImages]
        )
    }
    console.log(imagesData, 'imagesData')
    useEffect(() => {
        dowloadImagesFromStorage(imagesData, handleChangeTweetImages)

        return () => setTweetImages(null)
    }, [imagesData])

    const handleChangeIsMore = () => {
        setIsMoreOpen((prev) => !prev)
    }

    const handleChangeIsDelete = () => {
        setIsDelete((prev) => !prev)
    }

    const handleClickDeleteTweet = () => {
        handleDeleteTweet(tweetId)
    }

    return (
        <TweetArticle>
            <TweetInfoBlock>
                <ProfileIcon src={user.avatar.url} />
                <InfoBlock>
                    <TopInfoBlock>
                        <TweetAuthor>{user.name}</TweetAuthor>
                        <TweetSocial>{user.social}</TweetSocial>
                        <TweetDate>{timePost}</TweetDate>
                    </TopInfoBlock>
                    <TweetText>{text}</TweetText>
                </InfoBlock>
                <MoreBlock onClick={handleChangeIsMore}>
                    <MoreIcon src={images.dotsIcon} />
                    {isMoreOpen && (
                        <MorePopup>
                            <DeleteOption onClick={handleChangeIsDelete}>
                                Delete
                            </DeleteOption>
                        </MorePopup>
                    )}
                </MoreBlock>
            </TweetInfoBlock>
            <TweetImageBlock>
                {tweetImages?.map(({ id, url }) => (
                    <TweetImage key={id} src={url} />
                ))}
            </TweetImageBlock>
            {isDelete && (
                <ConfirmModal
                    onClose={handleChangeIsDelete}
                    onConfirm={handleClickDeleteTweet}
                    confirmText="Delete"
                />
            )}
        </TweetArticle>
    )
}
