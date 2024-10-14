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
import { useAppSelector, useDebounce } from '@hooks'
import { userSelector } from '@store'
import { CreatedTweetImageType } from '@types'
import { getIsLightTheme, getTimePostTweet } from '@utils'

export const Tweet = (props: TweetProps) => {
    const [isLiked, setIsLiked] = useState(false)
    const [countOfLikes, setCountOfLikes] = useState(0)

    const { data, handleDeleteTweet, isUserTweet = false } = props

    const { tweetData, account } = data
    const { imagesData, text, timePost, tweetId, liked } = tweetData

    const [isMoreOpen, setIsMoreOpen] = useState(false)
    const [isDelete, setIsDelete] = useState(false)
    const [tweetImages, setTweetImages] = useState<
        CreatedTweetImageType[] | null
    >(null)
    const { user, theme } = useAppSelector(userSelector)

    useEffect(() => {
        dowloadImagesFromStorage(imagesData, handleChangeTweetImages)
        setIsLiked(!!liked.find((likeId) => user.userId === likeId))
        setCountOfLikes(liked.length)

        return () => setTweetImages(null)
    }, [imagesData, liked, user.userId])

    const handleChangeTweetImages = (tweetImages: CreatedTweetImageType) => {
        setTweetImages((prev) =>
            prev ? [...prev, tweetImages] : [tweetImages]
        )
    }

    const handleChangeCountLikes = (value: number) => {
        setCountOfLikes(value)
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

    const handleClickLike = useDebounce(() => {
        setIsLiked((prev) => !prev)
        clickLikeTweet(user, account, tweetId, isLiked, handleChangeCountLikes)
    }, 200)
    const likeIcon = isLiked ? images.likeFillIcon : images.likeOutlineIcon
    const timePostTweet = getTimePostTweet(timePost)
    const moreIcon = getIsLightTheme(theme)
        ? images.dotsLightIcon
        : images.dotsDarkIcon
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
                        <MoreIcon src={moreIcon} alt={moreIconAltText} />
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
                <LikeCount>{countOfLikes}</LikeCount>
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
