import { FieldValues } from 'react-hook-form'

import { InputModule } from './styled'
import { InputProps } from './types'

import { ErrorText } from '@styles/global'

export const Input = <T extends FieldValues>(props: InputProps<T>) => {
    const { value, label, register, error, onChangeInput, ...otherProps } =
        props

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        onChangeInput(value)
    }
    const validRegister =
        !!register && !!label
            ? register(label, { onChange: handleInputChange })
            : []

    return (
        <>
            {!!register && <ErrorText role="alert">{error}</ErrorText>}
            <InputModule
                onChange={handleInputChange}
                {...validRegister}
                {...otherProps}
                value={value}
            />
        </>
    )
}
