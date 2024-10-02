import { FieldValues, Path, UseFormRegister } from 'react-hook-form'

export interface InputProps<T extends FieldValues>
    extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string
    label?: Path<T>
    error?: string | undefined
    register?: UseFormRegister<T>
    onChangeInput: (value: string) => void
}
