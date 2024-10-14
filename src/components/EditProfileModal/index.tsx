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
import { updateNotifyText, userSelector } from '@store'
import { isEditDataChanged } from '@utils'

export const EditProfileModal = (props: EditProfileModalProps) => {
    const dispatch = useAppDispatch()
    const { user } = useAppSelector(userSelector)

    const editInitialData = {
        description: user.description,
        social: user.social,
        name: user.name,
        avatarUrl: user.avatar.url,
    }

    const [editData, setEditData] = useState(editInitialData)
    const [file, setFile] = useState<File | null>(null)

    const { handleChangeIsOpenModal, handleEditProfile } = props

    const handleChangeDescription = (value: string) => {
        setEditData((prev) => ({ ...prev, description: value }))
    }

    const handleChangeName = (value: string) => {
        setEditData((prev) => ({ ...prev, name: value }))
    }

    const handleChangeSocial = (value: string) => {
        setEditData((prev) => ({ ...prev, social: value }))
    }

    const handleChangePhoto = (e: ProgressEvent<FileReader>, file: File) => {
        const url = e.target?.result as string
        setFile(file)
        setEditData((prev) => ({ ...prev, avatarUrl: url }))
    }

    const handleClickEditButton = () => {
        const data = {
            description: editData.description,
            name: editData.name,
            social: editData.social,
        }
        handleEditProfile(data, file)
    }

    const handleClickResetPassword = () => {
        resetPassword(user.email)
        dispatch(updateNotifyText(resetNotifyMessage))
    }

    const isEditButtonDisabled = isEditDataChanged(editInitialData, editData)

    return (
        <Modal onCloseModal={handleChangeIsOpenModal}>
            <Container>
                <Title>{title}</Title>
                <FileUploader
                    isTweet={false}
                    handleUpdateImage={handleChangePhoto}
                >
                    <Image src={editData.avatarUrl} alt={profileImageAltText} />
                </FileUploader>

                <InfoBlock>
                    <Text>{nameText}</Text>
                    <ModalInput
                        value={editData.name}
                        onChangeInput={handleChangeName}
                        maxLength={maxLengthName}
                    />
                </InfoBlock>
                <InfoBlock>
                    <Text>{descriptionText}</Text>
                    <ModalInput
                        value={editData.description ?? ''}
                        onChangeInput={handleChangeDescription}
                        maxLength={maxLengthDescription}
                    />
                </InfoBlock>
                <InfoBlock>
                    <Text>{socialText}</Text>
                    <ModalInput
                        value={editData.social ?? ''}
                        onChangeInput={handleChangeSocial}
                        maxLength={maxLengthSocial}
                    />
                </InfoBlock>
                <ForgotPassword onClick={handleClickResetPassword}>
                    {resetText}
                </ForgotPassword>
                <ModalButton
                    onClick={handleClickEditButton}
                    disabled={isEditButtonDisabled}
                    $isDisabled={isEditButtonDisabled}
                >
                    {editText}
                </ModalButton>
            </Container>
        </Modal>
    )
}
