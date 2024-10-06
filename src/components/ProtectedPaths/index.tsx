// import { Navigate } from 'react-router-dom'

import { PathProps } from './types'

export function RequireAuth({ children }: PathProps) {
    return children //<Navigate to={redirectTo} />
}

export function AuthenticatedProtect({ children }: PathProps) {
    return children // <Navigate to={redirectTo} />
}
