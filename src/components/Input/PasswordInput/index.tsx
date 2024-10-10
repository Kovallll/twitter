import { useState } from 'react'

import { eyeIconAltText } from './config'
import { Container, EyeBlock, EyeIcon } from './styled'

import { Input } from '@components/Input'
import { InputProps } from '@components/Input/types'
import { images } from '@constants'

export const PasswordInput = (props: InputProps) => {
    const [isShowPassword, setIsShowPassword] = useState(false)
    const { value, error, onChangeInput, ...otherProps } = props

    const eyeIcon = isShowPassword ? images.eyeSlash : images.eyeOpen
    const type = isShowPassword ? 'text' : 'password'

    const handleEyeIconClick = () => {
        setIsShowPassword((prev) => !prev)
    }

    return (
        <Container>
            <Input
                {...otherProps}
                onChangeInput={onChangeInput}
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
