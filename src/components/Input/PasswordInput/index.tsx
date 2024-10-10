import { useState } from 'react'
import { FieldValues, Path } from 'react-hook-form'

import { eyeIconAltText } from './config'
import { Container, EyeBlock, EyeIcon } from './styled'

import { Input } from '@components/Input'
import { InputProps } from '@components/Input/types'
import { images } from '@constants'
import { useAppSelector } from '@hooks'
import { getIsLightTheme } from '@utils'

export const PasswordInput = <T extends FieldValues>(props: InputProps<T>) => {
    const [isShow, setIsShow] = useState(false)
    const { value, register, error, onChangeInput, label, ...otherProps } =
        props
    const { theme } = useAppSelector((state) => state.user)

    const showIcon = getIsLightTheme(theme)
        ? images.eyeSeeLightIcon
        : images.eyeSeeDarkIcon
    const hideIcon = getIsLightTheme(theme)
        ? images.eyeSlashLightIcon
        : images.eyeSlashDarkIcon

    const eyeIcon = isShow ? hideIcon : showIcon
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
