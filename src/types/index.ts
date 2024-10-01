import { UseFormRegister } from 'react-hook-form'

export { type Theme } from './theme'

export interface ButtonProps {
    $withBorder?: boolean
    $backgroundColor?: string
    $color?: string
}

export interface LoginFormInput {
    email: string
    password: string
}

export interface SignUpFormInput {
    name: string
    phone: string
    email: string
    password: string
    confirmPassword: string
    date: SignUpDate
}

export type DateType = 'year' | 'month' | 'day'

export type DateLabel = 'date.year' | 'date.month' | 'date.day'

export type SignUpDate = Record<DateType, string>

export interface SelectProps {
    data: string[]
    error: string | undefined
    type: DateType
    register?: UseFormRegister<SignUpFormInput>
    onChangeDate: (value: string, type: DateType) => void
    value: string
}

export interface ActionInterface<T, P> {
    readonly type: T
    readonly payload: P
}
