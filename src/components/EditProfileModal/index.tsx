import { useState } from 'react'

import {
    descriptionText,
    editText,
    nameText,
    profileImageAltText,
    resetNotifyMessage,
    resetText,
    socialText,
    title,
} from './config'
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

import Modal from '@components/Modal'
import FileUploader from '@components/TweetCreator/FilesUploader'
import {
    maxLengthDescription,
    maxLengthName,
    maxLengthSocial,
} from '@constants'
import { resetPassword } from '@firebase'
import { useAppDispatch, useAppSelector } from '@hooks'
import { updateNotifyText, updateUserData, userSelector } from '@store'
import { theme } from '@styles'

export const EditProfileModal = (props: EditProfileModalProps) => {
    const [file, setFile] = useState<File | null>(null)

    const { handleChangeIsOpenModal, handleEditProfile, email } = props

    const dispatch = useAppDispatch()
    const { editData } = useAppSelector(userSelector)

    const { description, social, name, photoUrl } = editData

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
        dispatch(updateNotifyText(resetNotifyMessage))
    }

    return (
        <Modal onCloseModal={handleChangeIsOpenModal}>
            <Container>
                <Title>{title}</Title>
                <FileUploader
                    isTweet={false}
                    handleUpdateImage={handleChangePhoto}
                >
                    <Image src={photoUrl} alt={profileImageAltText} />
                </FileUploader>

                <InfoBlock>
                    <Text>{nameText}</Text>
                    <ModalInput
                        value={name}
                        onChangeInput={handleChangeName}
                        maxLength={maxLengthName}
                    />
                </InfoBlock>
                <InfoBlock>
                    <Text>{descriptionText}</Text>
                    <ModalInput
                        value={description ?? ''}
                        onChangeInput={handleChangeDescription}
                        maxLength={maxLengthDescription}
                    />
                </InfoBlock>
                <InfoBlock>
                    <Text>{socialText}</Text>
                    <ModalInput
                        value={social ?? ''}
                        onChangeInput={handleChangeSocial}
                        maxLength={maxLengthSocial}
                    />
                </InfoBlock>
                <ForgotPassword onClick={handleClickResetPassword}>
                    {resetText}
                </ForgotPassword>
                <ModalButton
                    $backgroundColor={theme.palette.blue}
                    $color={theme.palette.common.white}
                    onClick={handleClickEditButton}
                >
                    {editText}
                </ModalButton>
            </Container>
        </Modal>
    )
}
