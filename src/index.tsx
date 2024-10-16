import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { AppThemeProvider } from './providers/ThemeProvider'
import { router } from './routes'

import ErrorBoundary from '@components/ErrorBoundary'
import { store } from '@store'
import { GlobalStyle } from '@styles'

createRoot(document.getElementById('root')!).render(
    <ErrorBoundary>
        <Provider store={store}>
            <AppThemeProvider>
                <RouterProvider router={router} />
                <GlobalStyle />
            </AppThemeProvider>
        </Provider>
    </ErrorBoundary>
)
