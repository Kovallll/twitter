import { useRef } from 'react'

import { baseText, noContentText } from './config'
import { Container, PupupText } from './styled'
import { SearchPopupProps } from './types'

import { useAppSelector, useClickOutside } from '@hooks'

export const SearchPopup = ({ onClose }: SearchPopupProps) => {
    const popupRef = useRef(null)
    const { data, value } = useAppSelector((state) => state.search)

    useClickOutside(popupRef, () => onClose())

    return (
        <Container ref={popupRef}>
            {data.length !== 0 ? (
                data.map((item) => item)
            ) : value === '' ? (
                <PupupText>{baseText}</PupupText>
            ) : (
                <PupupText>{noContentText}</PupupText>
            )}
        </Container>
    )
}
