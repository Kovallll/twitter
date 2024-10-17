import { useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import {
    loginButtonText,
    loginTitleText,
    logoAltText,
    signUpText,
} from './config'
import { loginSchema } from './schema'
import {
    Container,
    SignUpLink,
    SignUpLinkWrap,
    SubmitButton,
    Title,
    Wrap,
} from './styled'

import { Input } from '@components/Input'
import { PasswordInput } from '@components/Input/PasswordInput'
import Notify from '@components/Notify'
import { images, maxLengthPassword, notifyTimeout, Paths } from '@constants'
import { loginWithEmailAndPassword } from '@firebase'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAppDispatch, useAppSelector } from '@hooks'
import {
    emailControlName,
    emailPlaceholder,
    passwordControlName,
    passwordPlaceholder,
} from '@pages/SingUpCredential/config'
import { notifySelector, updateNotifyText } from '@store'
import { Form, Logo } from '@styles'
import { LoginFormInput } from '@types'
import { getNotifyError } from '@utils'

const Login = () => {
    const {
        reset,
        control,
        formState: { errors },
        handleSubmit,
    } = useForm<LoginFormInput>({
        resolver: yupResolver(loginSchema),
        mode: 'onChange',
    })

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { text } = useAppSelector(notifySelector)

    useEffect(() => {
        let timeout: NodeJS.Timeout
        if (text) {
            timeout = setTimeout(() => {
                dispatch(updateNotifyText(''))
            }, notifyTimeout)
        }

        return () => {
            clearTimeout(timeout)
        }
    }, [dispatch, text])

    const onSubmit: SubmitHandler<LoginFormInput> = async (data) => {
        loginWithEmailAndPassword(
            data.email,
            data.password,
            dispatch,
            navigate,
            reset
        )
    }

    const { email: emailError, password: passwordError } = errors
    const notifyError = getNotifyError(text)

    return (
        <Container>
            <Wrap>
                <Logo src={images.logoIcon} alt={logoAltText} />
                <Title>{loginTitleText}</Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        control={control}
                        name={emailControlName}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                type="text"
                                placeholder={emailPlaceholder}
                                value={value}
                                onChangeInput={onChange}
                                error={emailError?.message ?? ''}
                                aria-invalid={errors.email ? 'true' : 'false'}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name={passwordControlName}
                        render={({ field: { onChange, value } }) => (
                            <PasswordInput
                                placeholder={passwordPlaceholder}
                                value={value}
                                onChangeInput={onChange}
                                error={passwordError?.message ?? ''}
                                aria-invalid={passwordError ? 'true' : 'false'}
                                maxLength={maxLengthPassword}
                            />
                        )}
                    />
                    <SubmitButton type="submit" data-cy="login">
                        {loginButtonText}
                    </SubmitButton>
                </Form>
                <SignUpLinkWrap>
                    <SignUpLink to={Paths.SignUp}>{signUpText}</SignUpLink>
                </SignUpLinkWrap>
            </Wrap>
            {text !== '' && <Notify text={notifyError} />}
        </Container>
    )
}

export default Login
