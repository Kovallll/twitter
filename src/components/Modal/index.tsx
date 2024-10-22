import { memo, useRef } from 'react'
import { createPortal } from 'react-dom'

import { closeAltText } from './config'
import { CloseButton, Container, Image, Window } from './styled'
import { ModalProps } from './types'

import { images } from '@constants'
import { useClickOutside } from '@hooks'

const Modal = ({ onCloseModal, children }: ModalProps) => {
    const modalRef = useRef(null)
    useClickOutside(modalRef, () => onCloseModal())

    return createPortal(
        <Container data-cy="modal">
            <Window ref={modalRef}>
                <CloseButton onClick={onCloseModal}>
                    <Image src={images.closeIcon} alt={closeAltText} />
                </CloseButton>
                {children}
            </Window>
        </Container>,
        document.body
    )
}

export default memo(Modal)
