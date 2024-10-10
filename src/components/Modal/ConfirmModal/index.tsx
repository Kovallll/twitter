import Modal from '..'
import { cancelText, checkTitleText } from './config'
import { Buttons, ConfrimButton, Title } from './styled'
import { ConfirmModalProps } from './types'

export const ConfirmModal = ({
    onClose,
    onConfirm,
    confirmText,
}: ConfirmModalProps) => {
    return (
        <Modal onCloseModal={onClose}>
            <Title>{checkTitleText}</Title>
            <Buttons>
                <ConfrimButton onClick={onConfirm}>{confirmText}</ConfrimButton>
                <ConfrimButton onClick={onClose}>{cancelText}</ConfrimButton>
            </Buttons>
        </Modal>
    )
}
