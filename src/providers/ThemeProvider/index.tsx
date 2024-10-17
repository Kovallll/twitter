import { ThemeProvider } from 'styled-components'

import { AppThemeProviderProps } from './types'

import { Themes } from '@constants'
import { useAppSelector } from '@hooks'
import { userSelector } from '@store'
import { darkTheme, lightTheme } from '@styles'

export const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
    const { currentTheme } = useAppSelector(userSelector)

    const theme = currentTheme === Themes.Dark ? darkTheme : lightTheme

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
