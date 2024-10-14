import { useEffect, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import {
    confirmPasswordControlName,
    confirmPasswordPlaceholder,
    dateSubtitle,
    dateText,
    dayControlName,
    dayType,
    emailControlName,
    emailPlaceholder,
    linkText,
    logoAltText,
    monthControlName,
    monthType,
    nameControlName,
    namePlaceholder,
    passwordControlName,
    passwordPlaceholder,
    phoneControlName,
    phonePlaceholder,
    signUpSubmitText,
    singUpTitleText,
    yearControlName,
    yearType,
} from './config'
import { signUpSchema } from './schema'
import {
    Container,
    DateBlock,
    LogoWrap,
    SignUpLink,
    Subtitle,
    SumbitButton,
    Text,
    Title,
    Wrap,
} from './styled'

import { Input } from '@components/Input'
import { PasswordInput } from '@components/Input/PasswordInput'
import { PhoneInput } from '@components/Input/PhoneInput'
import Notify from '@components/Notify'
import Select from '@components/Select'
import {
    basePhoneCode,
    images,
    maxLengthName,
    maxLengthPassword,
    months,
    notifyTimeout,
    Paths,
} from '@constants'
import { emailAndPasswordAuth } from '@firebase'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAppDispatch, useAppSelector } from '@hooks'
import { notifySelector, updateNotifyText, userSelector } from '@store'
import { Form, Logo, Spinner } from '@styles'
import { SignUpFormInput } from '@types'
import { getNotifyError, getSelectDays, getSelectYears } from '@utils'

const SingUpCredential = () => {
    const [isLoading, setIsLoading] = useState(false)
    const {
        reset,
        formState: { errors },
        handleSubmit,
        control,
    } = useForm<SignUpFormInput>({
        resolver: yupResolver(signUpSchema),
        mode: 'onChange',
        defaultValues: { phone: basePhoneCode },
    })

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { text } = useAppSelector(notifySelector)
    const { date } = useAppSelector(userSelector)
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

    const onSubmit: SubmitHandler<SignUpFormInput> = (data) => {
        setIsLoading(true)
        if (!text) {
            emailAndPasswordAuth(
                dispatch,
                navigate,
                data,
                date,
                handleChangeIsLoading,
                reset
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
                    <Controller
                        control={control}
                        name={nameControlName}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                type="text"
                                placeholder={namePlaceholder}
                                value={value}
                                onChangeInput={onChange}
                                error={nameError?.message ?? ''}
                                aria-invalid={errors.name ? 'true' : 'false'}
                                maxLength={maxLengthName}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name={phoneControlName}
                        render={({ field: { onChange, value } }) => (
                            <PhoneInput
                                type="text"
                                placeholder={phonePlaceholder}
                                value={value}
                                onChangeInput={onChange}
                                error={phoneError?.message ?? ''}
                                aria-invalid={errors.phone ? 'true' : 'false'}
                            />
                        )}
                    />
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
                    <Controller
                        control={control}
                        name={confirmPasswordControlName}
                        render={({ field: { onChange, value } }) => (
                            <PasswordInput
                                placeholder={confirmPasswordPlaceholder}
                                value={value}
                                onChangeInput={onChange}
                                error={confirmPasswordError?.message ?? ''}
                                aria-invalid={
                                    confirmPasswordError ? 'true' : 'false'
                                }
                                maxLength={maxLengthPassword}
                            />
                        )}
                    />
                    <SignUpLink to={Paths.SignUp}>{linkText}</SignUpLink>
                    <Subtitle>{dateSubtitle}</Subtitle>
                    <Text>{dateText}</Text>
                    <DateBlock>
                        <Controller
                            control={control}
                            name={monthControlName}
                            render={({ field: { onChange, value } }) => (
                                <Select
                                    data={months}
                                    type={monthType}
                                    error={dateError?.month?.message}
                                    onChangeDate={onChange}
                                    value={value}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name={yearControlName}
                            render={({ field: { onChange, value } }) => (
                                <Select
                                    value={value}
                                    data={years}
                                    type={yearType}
                                    error={dateError?.year?.message}
                                    onChangeDate={onChange}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name={dayControlName}
                            render={({ field: { onChange, value } }) => (
                                <Select
                                    value={value}
                                    data={days}
                                    type={dayType}
                                    error={dateError?.day?.message}
                                    onChangeDate={onChange}
                                />
                            )}
                        />
                    </DateBlock>
                    <SumbitButton type="submit">
                        {signUpSubmitText}
                    </SumbitButton>
                </Form>
            </Wrap>
            {text !== '' && <Notify text={notifyError} />}
        </Container>
    )
}

export default SingUpCredential
