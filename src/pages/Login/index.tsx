import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import {
    loginButtonText,
    loginTitleText,
    logoAltText,
    signUpText,
} from './config'
import { loginSchema } from './schema'
import { Container, SignUpLink, Title, Wrap } from './styled'

import { Input } from '@components/Input'
import Notify from '@components/Notify'
import { images, notifyTimeout, Paths } from '@constants'
import { loginWithEmailAndPassword } from '@firebase'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAppDispatch, useAppSelector } from '@hooks'
import {
    emailLabel,
    emailPlaceholder,
    passwordLabel,
    passwordPlaceholder,
} from '@pages/SingUpCredential/config'
import { updateLoginEmail, updateLoginError, updateLoginPassword } from '@store'
import { Button, Form, LinkStyle, Logo } from '@styles/global'
import { theme } from '@styles/theme'
import { LoginFormInput } from '@types'
import { getNotifyError } from '@utils'

const Login = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<LoginFormInput>({
        resolver: yupResolver(loginSchema),
        mode: 'onChange',
    })

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { email, password, error } = useAppSelector((state) => state.login)

    useEffect(() => {
        let timeout: NodeJS.Timeout
        if (error) {
            timeout = setTimeout(() => {
                dispatch(updateLoginError(''))
            }, notifyTimeout)
        }

        return () => clearTimeout(timeout)
    }, [dispatch, error])

    const onSubmit: SubmitHandler<LoginFormInput> = async (data) => {
        loginWithEmailAndPassword(data.email, data.password, dispatch, navigate)
    }

    const handleChangeEmailInput = (value: string) => {
        dispatch(updateLoginEmail(value))
    }

    const handleChangePasswordInput = (value: string) => {
        dispatch(updateLoginPassword(value))
    }

    const { email: emailError, password: passwordError } = errors
    const notifyError = getNotifyError(error)

    return (
        <Container>
            <Wrap>
                <Logo src={images.logoIcon} alt={logoAltText} />
                <Title>{loginTitleText}</Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        type="text"
                        placeholder={emailPlaceholder}
                        value={email}
                        onChangeInput={handleChangeEmailInput}
                        register={register}
                        label={emailLabel}
                        error={emailError?.message}
                        aria-invalid={errors.email ? 'true' : 'false'}
                    />
                    <Input
                        type="password"
                        placeholder={passwordPlaceholder}
                        value={password}
                        onChangeInput={handleChangePasswordInput}
                        register={register}
                        label={passwordLabel}
                        error={passwordError?.message}
                        aria-invalid={passwordError ? 'true' : 'false'}
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
            {error !== '' && <Notify error={notifyError} />}
        </Container>
    )
}

export default Login
