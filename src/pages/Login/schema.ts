import * as yup from 'yup'

import { emailRegex, passwordRules } from '@constants'
import { emailError, passwordError } from '@pages/SingUpCredential/config'

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
