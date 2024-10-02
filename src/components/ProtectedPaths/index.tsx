import { Navigate } from 'react-router-dom'
import { setupFirebase } from 'firebase.config'

import { PathProps } from './types'

import { LocalStorage } from '@utils'

setupFirebase()

const localStorage = new LocalStorage()

export function RequireAuth({ children, redirectTo }: PathProps) {
    const isAuthenticated = localStorage.getItem('isSignedIn')
    return isAuthenticated ? children : <Navigate to={redirectTo} />
}

export function AuthenticatedProtect({ children, redirectTo }: PathProps) {
    const isAuthenticated = localStorage.getItem('isSignedIn')
    return !isAuthenticated ? children : <Navigate to={redirectTo} />
}
