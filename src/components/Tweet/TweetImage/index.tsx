import { useState } from 'react'

import { closeIconAltText, imageAltText } from './config'
import { CloseIcon, Image, TweetImageBlock } from './styled'
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
            <CloseIcon
                src={images.closeIcon}
                $isHover={isHover}
                onClick={handleClose}
                alt={closeIconAltText}
            />
            <Image src={url} alt={imageAltText} />
        </TweetImageBlock>
    )
}
