export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string
    error?: string | undefined
    onChangeInput: (value: string) => void
}
