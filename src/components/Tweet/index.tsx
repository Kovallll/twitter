import { useEffect, useState } from 'react'

import {
    avatarIconAltText,
    deleteText,
    imageIconAltText,
    likeIconAltText,
    moreIconAltText,
} from './config'
import { MorePopup } from './MorePopup'
import {
    InfoBlock,
    LikeCount,
    LikeIcon,
    MoreBlock,
    MoreIcon,
    TopInfoBlock,
    TweetArticle,
    TweetAuthor,
    TweetDate,
    TweetIcon,
    TweetImage,
    TweetImageBlock,
    TweetInfoBlock,
    TweetLike,
    TweetSocial,
    TweetText,
} from './styled'
import { TweetProps } from './types'

import { ConfirmModal } from '@components/Modal/ConfirmModal'
import { images } from '@constants'
import { clickLikeTweet, dowloadImagesFromStorage } from '@firebase'
import { useAppDispatch, useAppSelector, useDebounce } from '@hooks'
import { userSelector } from '@store'
import { CreatedTweetImageType } from '@types'
import { getTimePostTweet } from '@utils'

export const Tweet = (props: TweetProps) => {
    const { data, handleDeleteTweet, isUserTweet = false } = props

    const { user } = useAppSelector(userSelector)
    const { tweetData, account } = data
    const { imagesData, text, timePost, tweetId, liked } = tweetData

    const [isMoreOpen, setIsMoreOpen] = useState(false)
    const [isDelete, setIsDelete] = useState(false)
    const [tweetImages, setTweetImages] = useState<
        CreatedTweetImageType[] | null
    >(null)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dowloadImagesFromStorage(imagesData, handleChangeTweetImages)

        return () => setTweetImages(null)
    }, [imagesData])

    const handleChangeTweetImages = (tweetImages: CreatedTweetImageType) => {
        setTweetImages((prev) =>
            prev ? [...prev, tweetImages] : [tweetImages]
        )
    }

    const handleChangeIsMore = () => {
        setIsMoreOpen((prev) => !prev)
    }

    const handleChangeIsDelete = () => {
        setIsDelete((prev) => !prev)
    }

    const handleClickDeleteTweet = () => {
        if (handleDeleteTweet) handleDeleteTweet(tweetId)
    }

    const isLiked = !!liked.find((likeId) => user.userId === likeId)
    const handleClickLike = useDebounce(() => {
        clickLikeTweet(account, tweetId, isLiked, dispatch)
    }, 200)

    const likeIcon = isLiked ? images.likeFill : images.likeOutline
    const timePostTweet = getTimePostTweet(timePost)
    return (
        <TweetArticle>
            <TweetInfoBlock>
                <TweetIcon src={account.avatar.url} alt={avatarIconAltText} />
                <InfoBlock>
                    <TopInfoBlock>
                        <TweetAuthor>{account.name}</TweetAuthor>
                        <TweetSocial>{account.social}</TweetSocial>
                        <TweetDate>{timePostTweet}</TweetDate>
                    </TopInfoBlock>
                    <TweetText>{text}</TweetText>
                </InfoBlock>
                {isUserTweet && (
                    <MoreBlock onClick={handleChangeIsMore}>
                        <MoreIcon src={images.dotsIcon} alt={moreIconAltText} />
                        {isMoreOpen && (
                            <MorePopup
                                onDelete={handleChangeIsDelete}
                                onClose={handleChangeIsMore}
                            />
                        )}
                    </MoreBlock>
                )}
            </TweetInfoBlock>
            <TweetImageBlock>
                {tweetImages?.map(({ id, url }) => (
                    <TweetImage key={id} src={url} alt={imageIconAltText} />
                ))}
            </TweetImageBlock>
            <TweetLike onClick={handleClickLike}>
                <LikeIcon src={likeIcon} alt={likeIconAltText} />
                <LikeCount>{liked.length}</LikeCount>
            </TweetLike>
            {isDelete && (
                <ConfirmModal
                    onClose={handleChangeIsDelete}
                    onConfirm={handleClickDeleteTweet}
                    confirmText={deleteText}
                />
            )}
        </TweetArticle>
    )
}
