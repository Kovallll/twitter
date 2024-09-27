import { ErrorText, InputModule } from './styled'
import { InputProps } from './types'

import { basePhoneCode } from '@constants'

const startBracket = 3
const endBracket = 5
const startDash = 7
const endDash = 9
const endLine = 12

export const Input = ({
    value,
    label,
    register,
    error,
    onChangeInput,
    ...props
}: InputProps) => {
    const isPhone = label === 'phone'

    const handleChangePhoneInput = (value: string) => {
        const input = value.replace(/\D/g, '')
        let formattedPhone = basePhoneCode

        const areaCode = input.slice(startBracket, endBracket)
        const firstPart = input.slice(endBracket, startDash)
        const secondPart = input.slice(startDash, endDash)
        const thirdPart = input.slice(endDash, endLine)

        if (areaCode) formattedPhone += ` (${areaCode}`
        if (firstPart) formattedPhone += `) ${firstPart}`
        if (secondPart) formattedPhone += `-${secondPart}`
        if (thirdPart) formattedPhone += `-${thirdPart}`

        return formattedPhone
    }

    const handleFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        if (isPhone)
            e.target.setSelectionRange(startBracket + 1, startBracket + 1)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        if (isPhone) {
            const phoneValue = handleChangePhoneInput(value)
            onChangeInput(phoneValue)
        } else onChangeInput(value)
    }
    const validRegister = !!register && !!label ? register(label) : []

    return (
        <>
            <ErrorText role="alert">{error}</ErrorText>
            <InputModule
                {...validRegister}
                {...props}
                value={value}
                onChange={handleInputChange}
                onFocus={handleFocus}
            />
        </>
    )
}
