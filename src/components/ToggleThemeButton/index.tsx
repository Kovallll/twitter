import { useState } from 'react'

import { Container } from './styled'

import { Themes } from '@constants'
import { useAppDispatch, useAppSelector } from '@hooks'
import { updateUserTheme } from '@store'
import { LocalStorage } from '@utils'

const localStorage = new LocalStorage()

export const ToggleButton = ({ ...props }) => {
    const dispatch = useAppDispatch()
    const { theme } = useAppSelector((state) => state.user)

    const [isToggle, setIsToggle] = useState(theme === Themes.Dark)

    const currentTheme = theme === Themes.Light ? Themes.Dark : Themes.Light

    const handleToggleTheme = () => {
        setIsToggle((prev) => !prev)
        dispatch(updateUserTheme(currentTheme))
        localStorage.setItem('theme', currentTheme)
    }

    return (
        <Container
            {...props}
            $isToggle={isToggle}
            onClick={handleToggleTheme}
        />
    )
}
