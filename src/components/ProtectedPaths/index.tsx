import { Navigate } from 'react-router-dom'

import { PathProps } from './types'

import { InitializerUserData } from '@components/InitializerUserData'
import { tokenLocalStorage } from '@constants'
import { LocalStorage } from '@utils'

const localStorage = new LocalStorage()
export function ProtectedRoute({ children, redirectTo }: PathProps) {
    const token = localStorage.getItem(tokenLocalStorage)

    return token !== null ? (
        <InitializerUserData>{children}</InitializerUserData>
    ) : (
        <Navigate to={redirectTo} />
    )
}

export function UnauthorizedRoute({ children, redirectTo }: PathProps) {
    const token = localStorage.getItem(tokenLocalStorage)

    return token === null ? children : <Navigate to={redirectTo} />
}
