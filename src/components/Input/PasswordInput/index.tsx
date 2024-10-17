import { useState } from 'react'

import { eyeIconAltText } from './config'
import { Container, EyeBlock, EyeIconWrap } from './styled'

import { Input } from '@components/Input'
import { InputProps } from '@components/Input/types'
import { images, Themes } from '@constants'
import { useAppSelector } from '@hooks'
import { userSelector } from '@store'
import { theme } from '@styles'

export const PasswordInput = (props: InputProps) => {
    const [isShowPassword, setIsShowPassword] = useState(false)
    const { value, error, onChangeInput, ...otherProps } = props

    const { currentTheme } = useAppSelector(userSelector)
    const { EyeOpenIcon, EyeSlashIcon } = images
    const iconColor =
        currentTheme === Themes.Light
            ? theme.palette.common.black
            : theme.palette.common.white

    const EyeIcon = isShowPassword ? EyeSlashIcon : EyeOpenIcon
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
                <EyeIconWrap>
                    <EyeIcon title={eyeIconAltText} stroke={iconColor} />
                </EyeIconWrap>
            </EyeBlock>
        </Container>
    )
}
