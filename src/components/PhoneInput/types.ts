import { FieldValues, UseFormRegister } from 'react-hook-form'

export interface PhoneInputProps<T extends FieldValues>
    extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string
    error?: string | undefined
    register?: UseFormRegister<T>
    onChangeInput: (value: string) => void
}
