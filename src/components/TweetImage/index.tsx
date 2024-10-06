import { useState } from 'react'

import { CloseImage, Image, TweetImageBlock } from './styled'
import { TweetImageProps } from './types'

import { images } from '@constants'

export const TweetImage = ({ id, url, handleDeleteImage }: TweetImageProps) => {
    const [isHover, setIsHover] = useState(false)

    const handleMouseOver = () => {
        setIsHover(true)
    }

    const handleMouseLeave = () => {
        setIsHover(false)
    }

    const handleClose = () => {
        handleDeleteImage(id)
    }

    return (
        <TweetImageBlock
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
        >
            <CloseImage
                src={images.closeIcon}
                $isHover={isHover}
                onClick={handleClose}
            />
            <Image src={url} />
        </TweetImageBlock>
    )
}
