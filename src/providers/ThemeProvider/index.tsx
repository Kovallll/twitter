import { ThemeProvider } from 'styled-components'

import { AppThemeProviderProps } from './types'

import { Themes } from '@constants'
import { useAppSelector } from '@hooks'
import { darkTheme, lightTheme } from '@styles/theme'

export const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
    const { theme } = useAppSelector((state) => state.user)

    let providerTheme = lightTheme
    if (theme === Themes.Dark) {
        providerTheme = darkTheme
    }

    return <ThemeProvider theme={providerTheme}>{children}</ThemeProvider>
}
