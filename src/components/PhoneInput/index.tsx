import { FieldValues, Path } from 'react-hook-form'

import { InputModule } from './styled'
import { PhoneInputProps } from './types'

import { basePhoneCode } from '@constants'
import { ErrorText } from '@styles/global'

const startBracket = 3
const endBracket = 5
const startDash = 7
const endDash = 9
const endLine = 12

export const PhoneInput = <T extends FieldValues>(
    props: PhoneInputProps<T>
) => {
    const { value, register, error, onChangeInput, ...otherProps } = props

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
        e.target.setSelectionRange(startBracket + 1, startBracket + 1)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target

        const phoneValue = handleChangePhoneInput(value)
        onChangeInput(phoneValue)
    }
    const validRegister = !!register
        ? register('phone' as Path<T>, {
              onChange: handleInputChange,
          })
        : []

    return (
        <>
            <ErrorText role="alert">{error}</ErrorText>
            <InputModule
                {...validRegister}
                {...otherProps}
                value={value}
                onFocus={handleFocus}
            />
        </>
    )
}
