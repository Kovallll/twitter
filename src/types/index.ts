export { type Theme } from './theme'

export interface ButtonProps {
    $withBorder?: boolean
    $backgroundColor?: string
    $color?: string
}

export interface LoginFormInput {
    phone: string
}

export interface SignUpFormInput {
    name: string
    phone: string
    email: string
    password: string
    confirmPassword: string
}

export type DateType = 'year' | 'month' | 'day'

export type SignUpDate = Record<DateType, string>

export interface SelectProps {
    data: string[]
    type: DateType
    onChangeDate: (value: string, type: DateType) => void
    value: string
}

export interface ActionInterface<T, P> {
    readonly type: T
    readonly payload: P
}
