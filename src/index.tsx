import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { router } from './routes'

import ErrorBoundary from '@components/ErrorBoundary'
import { store } from '@store'
import { GlobalStyle, theme } from '@styles'

createRoot(document.getElementById('root')!).render(
    <ErrorBoundary>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <RouterProvider router={router} />
                <GlobalStyle />
            </ThemeProvider>
        </Provider>
    </ErrorBoundary>
)
