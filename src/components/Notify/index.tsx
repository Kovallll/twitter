import { NotifyModule } from './styled'
import { NotifyProps } from './types'

export const Notify = ({ error }: NotifyProps) => {
    let text = 'Error'
    if (error === 'auth/email-already-in-use') {
        text = 'Email already exist'
    }
    if (error === 'auth/invalid-verification-code') {
        text = 'Incorrect code'
    }
    if (error === 'auth/network-request-failed') {
        text = 'Network error'
    }
    if (error === 'user not found') {
        text = "Profile don't exist"
    }
    return (
        <NotifyModule>
            <>{error && text}</>
        </NotifyModule>
    )
}
