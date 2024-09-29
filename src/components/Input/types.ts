import { UseFormRegister } from 'react-hook-form'

import { LoginFormInput, SignUpFormInput } from '@types'

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string
    label?: keyof LoginFormInput | keyof SignUpFormInput
    error?: string | undefined
    register?: UseFormRegister<any>
    onChangeInput: (value: string) => void
}
