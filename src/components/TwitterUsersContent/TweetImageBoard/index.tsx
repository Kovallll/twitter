import { useEffect, useMemo, useState } from 'react'

import { imageAltText } from './config'
import { Loader } from './Loader'
import { Image, ImagesSection, ImageWrap } from './styled'

import { countTweetsImages } from '@constants'
import { uploadTweetImagesFromStorage } from '@firebase'
import { useAppSelector } from '@hooks'
import { loaderStatesSelector, userSelector } from '@store'
import { CreatedTweetImageType } from '@types'

export const TweetImageBoard = () => {
    const [tweetsImages, setTweetsImages] = useState<
        CreatedTweetImageType[] | null
    >(null)
    const handleChangeTweetImages = (tweetImage: CreatedTweetImageType) => {
        setTweetsImages((prev) => (prev ? [...prev, tweetImage] : [tweetImage]))
    }

    const { user } = useAppSelector(userSelector)
    const { isLoadingInitialData } = useAppSelector(loaderStatesSelector)

    useEffect(() => {
        if (user.userId) {
            uploadTweetImagesFromStorage(user.userId, handleChangeTweetImages)
        }

        return () => {
            setTweetsImages(null)
        }
    }, [user.userId])

    const tweetsBoardImages = useMemo(
        () => tweetsImages?.slice(0, countTweetsImages),
        [tweetsImages]
    )

    return (
        <>
            {isLoadingInitialData ? (
                <Loader />
            ) : (
                <ImagesSection>
                    {tweetsBoardImages?.map(({ id, url }) => (
                        <ImageWrap key={id}>
                            <Image src={url} alt={imageAltText} />
                        </ImageWrap>
                    ))}
                </ImagesSection>
            )}
        </>
    )
}
