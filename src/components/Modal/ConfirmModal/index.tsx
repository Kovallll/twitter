import Modal from '..'
import { cancelText, checkTitleText } from './config'
import { ButtonsWrap, ConfirmButton, Title } from './styled'
import { ConfirmModalProps } from './types'

export const ConfirmModal = (props: ConfirmModalProps) => {
    const { onClose, onConfirm, confirmText } = props

    return (
        <Modal onCloseModal={onClose}>
            <Title>{checkTitleText}</Title>
            <ButtonsWrap>
                <ConfirmButton onClick={onConfirm}>{confirmText}</ConfirmButton>
                <ConfirmButton onClick={onClose}>{cancelText}</ConfirmButton>
            </ButtonsWrap>
        </Modal>
    )
}
