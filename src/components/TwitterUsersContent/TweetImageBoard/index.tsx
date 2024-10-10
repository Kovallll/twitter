import { useEffect, useState } from 'react'

import { imageAltText } from './config'
import { Loader } from './Loader'
import { Image, ImagesSection, ImageWrap } from './styled'

import { countTweetsImages } from '@constants'
import { uploadTweetImagesFromStorage } from '@firebase'
import { useAppSelector } from '@hooks'
import { CreatedTweetImageType } from '@types'

export const TweetImageBoard = () => {
    const [tweetsImages, setTweetsImages] = useState<
        CreatedTweetImageType[] | null
    >(null)
    const handleChangeTweetImages = (tweetImage: CreatedTweetImageType) => {
        setTweetsImages((prev) => (prev ? [...prev, tweetImage] : [tweetImage]))
    }

    const { user } = useAppSelector((state) => state.user)
    const { isLoadingInitialData } = useAppSelector((state) => state.boolean)

    useEffect(() => {
        if (user.userId) {
            uploadTweetImagesFromStorage(user.userId, handleChangeTweetImages)
        }

        return () => {
            setTweetsImages(null)
        }
    }, [user.userId])

    return (
        <>
            {isLoadingInitialData ? (
                <Loader />
            ) : (
                <ImagesSection>
                    {tweetsImages?.slice(0, countTweetsImages).map((image) => (
                        <ImageWrap key={image.id}>
                            <Image src={image.url} alt={imageAltText} />
                        </ImageWrap>
                    ))}
                </ImagesSection>
            )}
        </>
    )
}
