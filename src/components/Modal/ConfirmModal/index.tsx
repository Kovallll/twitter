import Modal from '..'
import { cancelText, checkTitleText } from './config'
import { Buttons, Title } from './styled'
import { ConfirmModalProps } from './types'

import { Button } from '@styles/global'

export const ConfirmModal = ({
    onClose,
    onConfirm,
    confirmText,
}: ConfirmModalProps) => {
    return (
        <Modal onCloseModal={onClose}>
            <Title>{checkTitleText}</Title>
            <Buttons>
                <Button onClick={onConfirm}>{confirmText}</Button>
                <Button onClick={onClose}>{cancelText}</Button>
            </Buttons>
        </Modal>
    )
}
