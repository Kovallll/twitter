import { useState } from 'react'
import { FieldValues, Path } from 'react-hook-form'

import { eyeIconAltText } from './config'
import { Container, EyeBlock, EyeIcon } from './styled'

import { Input } from '@components/Input'
import { InputProps } from '@components/Input/types'
import { images } from '@constants'

export const PasswordInput = <T extends FieldValues>(props: InputProps<T>) => {
    const [isShow, setIsShow] = useState(false)
    const { value, register, error, onChangeInput, label, ...otherProps } =
        props

    const eyeIcon = isShow ? images.eyeSlash : images.eyeSee
    const type = isShow ? 'text' : 'password'

    const handleEyeIconClick = () => {
        setIsShow((prev) => !prev)
    }

    const passwordLabel = label ? label : ('password' as Path<T>)
    return (
        <Container>
            <Input
                {...otherProps}
                onChangeInput={onChangeInput}
                label={passwordLabel}
                register={register}
                type={type}
                value={value}
                error={error}
            />
            <EyeBlock onClick={handleEyeIconClick}>
                <EyeIcon src={eyeIcon} alt={eyeIconAltText} />
            </EyeBlock>
        </Container>
    )
}
