import { useRef } from 'react'

import { noContentText } from './config'
import { Container, TweetText } from './styled'
import { SearchPopupProps } from './types'

import { useAppSelector, useClickOutside } from '@hooks'
import { searchSelector } from '@store'

export const SearchPopup = ({ onClose }: SearchPopupProps) => {
    const popupRef = useRef(null)
    const { data, value } = useAppSelector(searchSelector)

    useClickOutside(popupRef, () => onClose())

    return (
        <>
            {value !== '' && (
                <Container ref={popupRef}>
                    {data.length !== 0 ? (
                        data.map((item) => item)
                    ) : (
                        <TweetText>{noContentText}</TweetText>
                    )}
                </Container>
            )}
        </>
    )
}
