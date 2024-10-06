import { useState } from 'react'

import {
    Container,
    ForgotPassword,
    Image,
    InfoBlock,
    ModalButton,
    ModalInput,
    Text,
    Title,
} from './styled'
import { EditProfileModalProps } from './types'

import FileUploader from '@components/FilesUploader'
import Modal from '@components/Modal'
import { resetPassword } from '@firebase'
import { useAppDispatch, useAppSelector } from '@hooks'
import { updateUserData } from '@store'
import { theme } from '@styles/theme'

export const EditProfileModal = (props: EditProfileModalProps) => {
    const [file, setFile] = useState<File | null>(null)
    const { handleChangeIsOpenModal, handleEditProfile, email } = props
    const { editData } = useAppSelector((state) => state.user)
    const { description, social, name, photoUrl } = editData
    const dispatch = useAppDispatch()

    const handleChangeDescription = (value: string) => {
        dispatch(updateUserData({ ...editData, description: value }))
    }

    const handleChangeName = (value: string) => {
        dispatch(updateUserData({ ...editData, name: value }))
    }

    const handleChangeSocial = (value: string) => {
        dispatch(updateUserData({ ...editData, social: value }))
    }

    const handleChangePhoto = (e: ProgressEvent<FileReader>, file: File) => {
        const url = e.target?.result as string
        setFile(file)
        dispatch(updateUserData({ ...editData, photoUrl: url }))
    }

    const handleClickEditButton = () => {
        const data = { description, name, social }
        handleEditProfile(data, file)
    }

    const handleClickResetPassword = () => {
        resetPassword(email)
    }

    return (
        <Modal onCloseModal={handleChangeIsOpenModal}>
            <Container>
                <Title>Edit profile</Title>
                <FileUploader
                    isTweet={false}
                    handleUpdateImage={handleChangePhoto}
                >
                    <Image src={photoUrl} />
                </FileUploader>

                <InfoBlock>
                    <Text>Name:</Text>
                    <ModalInput value={name} onChangeInput={handleChangeName} />
                </InfoBlock>
                <InfoBlock>
                    <Text>Description:</Text>
                    <ModalInput
                        value={description ?? ''}
                        onChangeInput={handleChangeDescription}
                    />
                </InfoBlock>
                <InfoBlock>
                    <Text>Social:</Text>
                    <ModalInput
                        value={social ?? ''}
                        onChangeInput={handleChangeSocial}
                    />
                </InfoBlock>
                <ForgotPassword onClick={handleClickResetPassword}>
                    Reset password
                </ForgotPassword>
                <ModalButton
                    $backgroundColor={theme.palette.blue}
                    $color={theme.palette.common.white}
                    onClick={handleClickEditButton}
                >
                    Edit
                </ModalButton>
            </Container>
        </Modal>
    )
}
