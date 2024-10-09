import { FieldValues } from 'react-hook-form'

import { slashText } from './config'
import { InputModule, LettersCount, Wrap } from './styled'
import { InputProps } from './types'

import { ErrorText } from '@styles/global'

export const Input = <T extends FieldValues>(props: InputProps<T>) => {
    const {
        value,
        label,
        register,
        error,
        onChangeInput,
        maxLength,
        ...otherProps
    } = props

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        onChangeInput(value)
    }
    const validRegister =
        !!register && !!label
            ? register(label, { onChange: handleInputChange })
            : []

    const letterCountText = value.length + slashText + maxLength
    return (
        <>
            {!!register && <ErrorText role="alert">{error}</ErrorText>}
            <Wrap>
                <InputModule
                    onChange={handleInputChange}
                    {...validRegister}
                    {...otherProps}
                    value={value}
                    maxLength={maxLength}
                />
                {maxLength && <LettersCount>{letterCountText}</LettersCount>}
            </Wrap>
        </>
    )
}
