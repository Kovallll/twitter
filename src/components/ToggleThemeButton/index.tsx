import { useState } from 'react'

import { ToggleButton } from './styled'

import { Themes, themeStoragekey } from '@constants'
import { useAppDispatch, useAppSelector } from '@hooks'
import { updateUserTheme, userSelector } from '@store'
import { LocalStorage } from '@utils'

const localStorage = new LocalStorage()

export const ToggleThemeButton = ({ ...props }) => {
    const dispatch = useAppDispatch()
    const { currentTheme } = useAppSelector(userSelector)

    const [isDarkTheme, setIsDarkTheme] = useState(currentTheme === Themes.Dark)

    const changedTheme =
        currentTheme === Themes.Light ? Themes.Dark : Themes.Light

    const handleToggleTheme = () => {
        setIsDarkTheme((prev) => !prev)
        dispatch(updateUserTheme(changedTheme))
        localStorage.setItem(themeStoragekey, currentTheme)
    }

    return (
        <ToggleButton
            {...props}
            $isDarkTheme={isDarkTheme}
            onClick={handleToggleTheme}
        />
    )
}
