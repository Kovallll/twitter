import * as yup from 'yup'

import { passwordError } from './config'

import { emailRegex, passwordRules } from '@constants'
import { emailError } from '@pages/SingUpCredential/config'

export const loginSchema = yup
    .object({
        email: yup
            .string()
            .required()
            .email(emailError)
            .test('', emailError, (value) => emailRegex.test(value)),
        password: yup.string().required().matches(passwordRules, {
            message: passwordError,
        }),
    })
    .required()
