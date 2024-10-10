import { EditModalData } from '@types'

export interface EditProfileModalProps {
    email: string
    handleChangeIsOpenModal: () => void
    handleEditProfile: (data: EditModalData, file: File | null) => void
}
