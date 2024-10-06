import { useCallback, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import {
    confirmPasswordLabel,
    confirmPasswordPlaceholder,
    dateDayError,
    dateSubtitle,
    dateText,
    dayType,
    defaultValueDay,
    emailLabel,
    emailPlaceholder,
    linkText,
    logoAltText,
    monthType,
    nameLabel,
    namePlaceholder,
    passwordPlaceholder,
    phonePlaceholder,
    signUpSubmitText,
    singUpTitleText,
    yearType,
} from './config'
import { signUpSchema } from './schema'
import {
    Container,
    DateBlock,
    LogoWrap,
    Spinner,
    Subtitle,
    Text,
    Title,
    Wrap,
} from './styled'

import { Input } from '@components/Input'
import Notify from '@components/Notify'
import { PasswordInput } from '@components/PasswordInput'
import { PhoneInput } from '@components/PhoneInput'
import Select from '@components/Select'
import {
    basePhoneCode,
    defaultDate,
    images,
    months,
    notifyTimeout,
    Paths,
} from '@constants'
import { emailAndPasswordAuth } from '@firebase'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAppDispatch, useAppSelector } from '@hooks'
import {
    updateNotifyText,
    updateSignUpConfrimPassword,
    updateSignUpDate,
    updateSignUpEmail,
    updateSignUpName,
    updateSignUpPassword,
    updateSignUpPhone,
} from '@store'
import { Button, Form, LinkStyle, Logo } from '@styles/global'
import { theme } from '@styles/theme'
import { DateType, SignUpFormInput } from '@types'
import {
    getIsValidDate,
    getNotifyError,
    getSelectDays,
    getSelectYears,
} from '@utils'

const SingUpCredential = () => {
    const [isLoading, setIsLoading] = useState(false)
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<SignUpFormInput>({
        resolver: yupResolver(signUpSchema),
        mode: 'onChange',
    })

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { name, email, phone, password, confirmPassword, date } =
        useAppSelector((state) => state.signUp)
    const { text } = useAppSelector((state) => state.notify)
    useEffect(() => {
        let timeout: NodeJS.Timeout
        if (text) {
            timeout = setTimeout(() => {
                dispatch(updateNotifyText(''))
            }, notifyTimeout)
        }

        return () => clearTimeout(timeout)
    }, [dispatch, text])

    const handleChangeIsLoading = (isLoading: boolean) => {
        setIsLoading(isLoading)
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

    const handleResetForm = () => {
        dispatch(updateSignUpConfrimPassword(''))
        dispatch(updateSignUpPassword(''))
        dispatch(updateSignUpPhone(basePhoneCode))
        dispatch(updateSignUpName(''))
        dispatch(updateSignUpEmail(''))
        dispatch(updateSignUpDate(defaultDate))
    }

    const handleChangeDate = useCallback(
        (value: string, type: DateType) => {
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

            const isValidDate = getIsValidDate(resultDate)
            if (isValidDate) {
                dispatch(updateSignUpDate(resultDate))
                dispatch(updateNotifyText(''))
            } else {
                dispatch(updateNotifyText(dateDayError))
                dispatch(
                    updateSignUpDate({ ...resultDate, day: defaultValueDay })
                )
            }
        },
        [date, dispatch]
    )

    const onSubmit: SubmitHandler<SignUpFormInput> = (data) => {
        setIsLoading(true)
        if (!text) {
            emailAndPasswordAuth(
                dispatch,
                navigate,
                data,
                date,
                handleChangeIsLoading,
                handleResetForm
            )
        }
    }

    const {
        name: nameError,
        phone: phoneError,
        email: emailError,
        password: passwordError,
        confirmPassword: confirmPasswordError,
        date: dateError,
    } = errors

    const notifyError = getNotifyError(text)
    const years = getSelectYears()
    const days = getSelectDays()

    if (isLoading) {
        return <Spinner />
    }

    return (
        <Container>
            <Wrap>
                <LogoWrap>
                    <Logo src={images.logoIcon} alt={logoAltText} />
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
                    <PhoneInput
                        type="text"
                        placeholder={phonePlaceholder}
                        value={phone}
                        onChangeInput={handleChangePhoneInput}
                        register={register}
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
                    <PasswordInput
                        placeholder={passwordPlaceholder}
                        value={password}
                        onChangeInput={handleChangePasswordInput}
                        register={register}
                        error={passwordError?.message}
                        aria-invalid={passwordError ? 'true' : 'false'}
                    />
                    <PasswordInput
                        placeholder={confirmPasswordPlaceholder}
                        value={confirmPassword}
                        onChangeInput={handleChangeConfrimPasswordInput}
                        register={register}
                        label={confirmPasswordLabel}
                        error={confirmPasswordError?.message}
                        aria-invalid={confirmPasswordError ? 'true' : 'false'}
                    />
                    <Link to={Paths.SignUp} style={LinkStyle}>
                        {linkText}
                    </Link>
                    <Subtitle>{dateSubtitle}</Subtitle>
                    <Text>{dateText}</Text>
                    <DateBlock>
                        <Select
                            value={date.month}
                            data={months}
                            type={monthType}
                            register={register}
                            error={dateError?.month?.message}
                            onChangeDate={handleChangeDate}
                        />
                        <Select
                            value={date.year}
                            data={years}
                            type={yearType}
                            register={register}
                            error={dateError?.year?.message}
                            onChangeDate={handleChangeDate}
                        />
                        <Select
                            value={date.day}
                            data={days}
                            type={dayType}
                            register={register}
                            error={dateError?.day?.message}
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
            {text !== '' && <Notify text={notifyError} />}
        </Container>
    )
}

export default SingUpCredential
