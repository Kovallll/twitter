import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth, useFirestore } from 'firebase.config'
import {
    ConfirmationResult,
    RecaptchaVerifier,
    signInWithPhoneNumber,
} from 'firebase/auth'
import { collection, getDocs } from 'firebase/firestore'
import * as yup from 'yup'

import {
    codePlaceholder,
    loginButtonText,
    loginTitleText,
    logoAltText,
    modalButtonText,
    modalTitle,
    phoneLabel,
    phonePlaceholder,
    phoneValidError,
    recaptchaId,
    signUpText,
} from './config'
import { Container, ModalBlock, SignUpLink, Title, Wrap } from './styled'

import logo from '@assets/icons/twitterLogo.svg'
import { Input } from '@components/Input'
import { Modal } from '@components/Modal'
import { Notify } from '@components/Notify'
import { notifyTimeout, Paths, phoneRegex, usersCollection } from '@constants'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAppDispatch, useAppSelector } from '@hooks'
import { updateLoginCode, updateLoginError, updateLoginPhone } from '@store'
import { Button, Form, LinkStyle, Logo, ModalTitle } from '@styles/global'
import { theme } from '@styles/theme'
import { LoginFormInput } from '@types'

const loginSchema = yup
    .object({
        phone: yup.string().required().matches(phoneRegex, phoneValidError),
    })
    .required()

const Login = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [confirmationResult, setConfirmationResult] =
        useState<ConfirmationResult | null>(null)

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<LoginFormInput>({ resolver: yupResolver(loginSchema) })

    const navigate = useNavigate()
    const auth = useAuth()
    const database = useFirestore()
    const dispatch = useAppDispatch()
    const { phone, error, code } = useAppSelector((state) => state.login)
    window.recaptchaVerifier = new RecaptchaVerifier(auth, recaptchaId, {
        size: 'invisible',
    })

    const loginWithPhone = ({ phone }: LoginFormInput) => {
        const appVerifier = window.recaptchaVerifier
        signInWithPhoneNumber(auth, phone, appVerifier)
            .then((confirmationResult) => {
                setIsModalOpen(true)
                setConfirmationResult(confirmationResult)
            })
            .catch((error) => {
                const errorCode = error.code
                dispatch(updateLoginError(errorCode))
                const timeout = setTimeout(() => {
                    dispatch(updateLoginError(''))
                    clearTimeout(timeout)
                }, notifyTimeout)
            })
    }

    const handleSubmitButtonModal = () => {
        handleSubmitCode()
        setIsModalOpen(false)
    }

    const handleSubmitCode = () => {
        if (code !== '' && confirmationResult) {
            confirmationResult
                .confirm(code)
                .then(async () => {
                    const users = await getDocs(
                        collection(database, usersCollection)
                    )
                    let currentUser
                    users?.forEach((user) => {
                        if (user.data().phone === phone) {
                            currentUser = user.data()
                        }
                    })
                    if (currentUser) {
                        navigate(Paths.Profile)
                    } else {
                        dispatch(updateLoginError('user not found'))
                        const timeout = setTimeout(() => {
                            dispatch(updateLoginError(''))
                            clearTimeout(timeout)
                        }, notifyTimeout)
                    }
                })
                .catch((error) => {
                    const errorCode = error.code
                    dispatch(updateLoginError(errorCode))
                    const timeout = setTimeout(() => {
                        dispatch(updateLoginError(''))
                        clearTimeout(timeout)
                    }, notifyTimeout)
                    window.recaptchaVerifier.reset()
                })
        }
    }

    const onSubmit: SubmitHandler<LoginFormInput> = async (data) => {
        loginWithPhone(data)
    }

    const handleChangePhoneInput = (value: string) => {
        dispatch(updateLoginPhone(value))
    }
    const handleCloseModal = () => {
        setIsModalOpen(false)
    }
    const handleChangeCode = (value: string) => {
        dispatch(updateLoginCode(value))
    }

    const { phone: phoneError } = errors
    return (
        <Container>
            <Wrap>
                <Logo src={logo} alt={logoAltText} />
                <Title>{loginTitleText}</Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        type="text"
                        placeholder={phonePlaceholder}
                        error={phoneError?.message}
                        value={phone}
                        onChangeInput={handleChangePhoneInput}
                        register={register}
                        label={phoneLabel}
                        aria-invalid={errors.phone ? 'true' : 'false'}
                        maxLength={19}
                    />
                    <Button
                        $backgroundColor={theme.palette.blue}
                        $color={theme.palette.common.white}
                        type="submit"
                    >
                        {loginButtonText}
                    </Button>
                </Form>
                <SignUpLink>
                    <Link to={Paths.SignUp} style={LinkStyle}>
                        {signUpText}
                    </Link>
                </SignUpLink>
            </Wrap>
            {error !== '' && <Notify error={error} />}
            {isModalOpen && (
                <Modal onCloseModal={handleCloseModal}>
                    <ModalBlock>
                        <ModalTitle>{modalTitle}</ModalTitle>
                        <Input
                            type="text"
                            placeholder={codePlaceholder}
                            value={code}
                            onChangeInput={handleChangeCode}
                        />
                        <Button
                            $backgroundColor={theme.palette.blue}
                            $color={theme.palette.common.white}
                            onClick={handleSubmitButtonModal}
                        >
                            {modalButtonText}
                        </Button>
                    </ModalBlock>
                </Modal>
            )}
        </Container>
    )
}

export default Login
