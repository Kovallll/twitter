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
import { CreatedTweetImageType } from '@types'
import { getIsLightTheme, getTimePostTweet } from '@utils'

export const Tweet = ({
    data,
    handleDeleteTweet,
    isUserTweet = false,
}: TweetProps) => {
    const { tweetData, user } = data
    const { imagesData, text, timePost, tweetId, liked } = tweetData

    const [isMoreOpen, setIsMoreOpen] = useState(false)
    const [isDelete, setIsDelete] = useState(false)
    const [isLiked, setIsLiked] = useState(false)
    const [tweetImages, setTweetImages] = useState<
        CreatedTweetImageType[] | null
    >(null)

    const dispatch = useAppDispatch()
    const { theme } = useAppSelector((state) => state.user)

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

    const handleClickLike = useDebounce(() => {
        setIsLiked((prev) => !prev)
        clickLikeTweet(user, tweetId, isLiked, dispatch)
    }, 200)
    const likeIcon = isLiked ? images.likeFillIcon : images.likeOutlineIcon
    const timePostTweet = getTimePostTweet(timePost)
    const moreIcon = getIsLightTheme(theme)
        ? images.dotsLightIcon
        : images.dotsDarkIcon
    return (
        <TweetArticle>
            <TweetInfoBlock>
                <TweetIcon src={user.avatar.url} alt={avatarIconAltText} />
                <InfoBlock>
                    <TopInfoBlock>
                        <TweetAuthor>{user.name}</TweetAuthor>
                        <TweetSocial>{user.social}</TweetSocial>
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
