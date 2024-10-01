import * as yup from 'yup'

import {
    confirmPasswordError,
    dayError,
    defaultValueDay,
    defaultValueMonth,
    defaultValueYear,
    emailError,
    monthError,
    passwordError,
    phoneValidError,
    selectError,
    yearError,
} from './config'

import { emailRegex, passwordRules, phoneRegex } from '@constants'

export const signUpSchema = yup
    .object({
        name: yup.string().required(),
        phone: yup.string().required().matches(phoneRegex, phoneValidError),
        email: yup
            .string()
            .required()
            .email(emailError)
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
        date: yup.object().shape({
            year: yup
                .string()
                .required(yearError)
                .test('', selectError, (value) => value !== defaultValueYear),
            month: yup
                .string()
                .required(monthError)
                .test('', selectError, (value) => value !== defaultValueMonth),
            day: yup
                .string()
                .required(dayError)
                .test('', selectError, (value) => value !== defaultValueDay),
        }),
    })
    .required()
