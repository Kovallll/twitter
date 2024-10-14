import { useState } from 'react'

import { eyeIconAltText } from './config'
import { Container, EyeBlock, EyeIcon } from './styled'

import { Input } from '@components/Input'
import { InputProps } from '@components/Input/types'
import { images } from '@constants'
import { useAppSelector } from '@hooks'
import { getIsLightTheme } from '@utils'

export const PasswordInput = (props: InputProps) => {
    const [isShowPassword, setIsShowPassword] = useState(false)
    const { value, error, onChangeInput, ...otherProps } = props

    const { theme } = useAppSelector((state) => state.user)

    const showIcon = getIsLightTheme(theme)
        ? images.eyeOpenLightIcon
        : images.eyeOpenDarkIcon
    const hideIcon = getIsLightTheme(theme)
        ? images.eyeSlashLightIcon
        : images.eyeSlashDarkIcon

    const eyeIcon = isShowPassword ? hideIcon : showIcon
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
