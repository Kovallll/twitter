import { useRef } from 'react'

import { DeleteOption, MorePopupBlock } from './styled'
import { MorePopupProps } from './types'

import { useClickOutside } from '@hooks'

export const MorePopup = ({ onDelete, onClose }: MorePopupProps) => {
    const popupRef = useRef(null)

    useClickOutside(popupRef, () => onClose())

    return (
        <MorePopupBlock ref={popupRef}>
            <DeleteOption onClick={onDelete}>Delete</DeleteOption>
        </MorePopupBlock>
    )
}
