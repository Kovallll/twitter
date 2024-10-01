import { Navigate } from 'react-router-dom'
import { getFirebaseAuth, setupFirebase } from 'firebase.config'

import { PathProps } from './types'

setupFirebase()
const auth = getFirebaseAuth()

export function RequireAuth({ children, redirectTo }: PathProps) {
    const isAuthenticated = auth.currentUser
    return isAuthenticated ? children : <Navigate to={redirectTo} />
}

export function AuthenticatedProtect({ children, redirectTo }: PathProps) {
    const isAuthenticated = auth.currentUser
    return !isAuthenticated ? children : <Navigate to={redirectTo} />
}
