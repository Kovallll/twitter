import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth, useFirestore } from 'firebase.config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import * as yup from 'yup'

import {
    confirmPasswordError,
    confirmPasswordLabel,
    confirmPasswordPlaceholder,
    dateSubtitle,
    dateText,
    emailError,
    emailLabel,
    emailPlaceholder,
    linkText,
    logoAltText,
    nameLabel,
    namePlaceholder,
    passwordError,
    passwordLabel,
    passwordPlaceholder,
    phoneLabel,
    phonePlaceholder,
    signUpSubmitText,
    singUpTitleText,
} from './config'
import {
    Container,
    DateBlock,
    LogoWrap,
    Subtitle,
    Text,
    Title,
    Wrap,
} from './styled'

import logo from '@assets/icons/twitterLogo.svg'
import { Input } from '@components/Input'
import { Notify } from '@components/Notify'
import { Select } from '@components/Select'
import {
    days,
    emailRegex,
    months,
    notifyTimeout,
    passwordRules,
    Paths,
    usersCollection,
    years,
} from '@constants'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAppDispatch, useAppSelector } from '@hooks'
import {
    updateSignUpConfrimPassword,
    updateSignUpDate,
    updateSignUpEmail,
    updateSignUpError,
    updateSignUpName,
    updateSignUpPassword,
    updateSignUpPhone,
} from '@store'
import { Button, Form, LinkStyle, Logo } from '@styles/global'
import { theme } from '@styles/theme'
import { DateType, SignUpFormInput } from '@types'

const signUpSchema = yup
    .object({
        name: yup.string().required(),
        phone: yup.string().required(),
        email: yup
            .string()
            .required()
            .email()
            .test('', emailError, (value) => emailRegex.test(value)),
        password: yup.string().required().matches(passwordRules, {
            message: passwordError,
        }),
        confirmPassword: yup
            .string()
            .required()
            .test('', confirmPasswordError, function (value) {
                return this.parent.password === value
            }),
    })
    .required()

const SingUpCredential = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<SignUpFormInput>({ resolver: yupResolver(signUpSchema) })

    const navigate = useNavigate()
    const database = useFirestore()
    const auth = useAuth()
    const dispatch = useAppDispatch()
    const { name, email, phone, password, confirmPassword, error, date } =
        useAppSelector((state) => state.signUp)

    const onSubmit: SubmitHandler<SignUpFormInput> = (data) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then(async (userCredential) => {
                const uid = userCredential.user.uid
                const userInfo = {
                    userId: uid,
                    name,
                    email,
                    phone,
                    dateBirthday: `${date.day} ${date.month} ${date.year}`,
                }
                await addDoc(collection(database, usersCollection), userInfo)
                navigate(Paths.Profile)
            })
            .catch((error) => {
                const errorCode = error.code
                dispatch(updateSignUpError(errorCode))
                const timeout = setTimeout(() => {
                    dispatch(updateSignUpError(''))
                    clearTimeout(timeout)
                }, notifyTimeout)
            })
    }

    const handleChangeEmailInput = (value: string) => {
        dispatch(updateSignUpEmail(value))
    }
    const handleChangeNameInput = (value: string) => {
        dispatch(updateSignUpName(value))
    }
    const handleChangePhoneInput = (value: string) => {
        dispatch(updateSignUpPhone(value))
    }
    const handleChangePasswordInput = (value: string) => {
        dispatch(updateSignUpPassword(value))
    }

    const handleChangeConfrimPasswordInput = (value: string) => {
        dispatch(updateSignUpConfrimPassword(value))
    }

    const handleChangeDate = (value: string, type: DateType) => {
        let resultDate = date
        if (type === 'day') {
            resultDate = { ...date, day: value }
        }
        if (type === 'month') {
            resultDate = { ...date, month: value }
        }
        if (type === 'year') {
            resultDate = { ...date, year: value }
        }
        dispatch(updateSignUpDate(resultDate))
    }

    const {
        name: nameError,
        phone: phoneError,
        email: emailError,
        password: passwordError,
        confirmPassword: confirmPasswordError,
    } = errors

    return (
        <Container>
            <Wrap>
                <LogoWrap>
                    <Logo src={logo} alt={logoAltText} />
                </LogoWrap>
                <Title>{singUpTitleText}</Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        type="text"
                        placeholder={namePlaceholder}
                        value={name}
                        onChangeInput={handleChangeNameInput}
                        register={register}
                        label={nameLabel}
                        error={nameError?.message}
                        aria-invalid={errors.name ? 'true' : 'false'}
                    />
                    <Input
                        type="text"
                        placeholder={phonePlaceholder}
                        value={phone}
                        onChangeInput={handleChangePhoneInput}
                        register={register}
                        label={phoneLabel}
                        error={phoneError?.message}
                        aria-invalid={errors.phone ? 'true' : 'false'}
                    />
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
                    <Input
                        type="password"
                        placeholder={confirmPasswordPlaceholder}
                        value={confirmPassword}
                        onChangeInput={handleChangeConfrimPasswordInput}
                        register={register}
                        label={confirmPasswordLabel}
                        error={confirmPasswordError?.message}
                        aria-invalid={confirmPasswordError ? 'true' : 'false'}
                    />
                    <Link to="" style={LinkStyle}>
                        {linkText}
                    </Link>
                    <Subtitle>{dateSubtitle}</Subtitle>
                    <Text>{dateText}</Text>
                    <DateBlock>
                        <Select
                            value={date.month}
                            data={months}
                            type="month"
                            onChangeDate={handleChangeDate}
                        />
                        <Select
                            value={date.year}
                            data={years}
                            type="year"
                            onChangeDate={handleChangeDate}
                        />
                        <Select
                            value={date.day}
                            data={days}
                            type="day"
                            onChangeDate={handleChangeDate}
                        />
                    </DateBlock>
                    <Button
                        $backgroundColor={theme.palette.blue}
                        $color={theme.palette.common.white}
                        type="submit"
                    >
                        {signUpSubmitText}
                    </Button>
                </Form>
            </Wrap>
            {error !== '' && <Notify error={error} />}
        </Container>
    )
}

export default SingUpCredential
