import { useEffect, useState } from 'react'

import { Image, ImagesRow, ImagesSection } from './styled'

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

    useEffect(() => {
        if (user.userId) {
            uploadTweetImagesFromStorage(user.userId, handleChangeTweetImages)
        }

        return () => {
            setTweetsImages(null)
        }
    }, [user.userId])
    return (
        <ImagesSection>
            <ImagesRow>
                {tweetsImages
                    ?.slice(0, 3)
                    .map((image) => (
                        <Image
                            key={image.id}
                            src={image.url}
                            alt="tweetImage"
                        />
                    ))}
            </ImagesRow>
            <ImagesRow>
                {tweetsImages
                    ?.slice(3, 6)
                    .map((image) => (
                        <Image
                            key={image.id}
                            src={image.url}
                            alt="tweetImage"
                        />
                    ))}
            </ImagesRow>
        </ImagesSection>
    )
}
