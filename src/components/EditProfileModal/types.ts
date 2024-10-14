import { EditModalData } from '@types'

export interface EditProfileModalProps {
    handleChangeIsOpenModal: () => void
    handleEditProfile: (data: EditModalData, file: File | null) => void
}

export interface ModalButtonProps {
    $isDisabled: boolean
}
