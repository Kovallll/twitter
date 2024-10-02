import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getFirebaseAuth } from 'firebase.config'
import { onAuthStateChanged, User } from 'firebase/auth'

import { Container } from './styled'

import { Paths } from '@constants'
import { Button } from '@styles/global'
import { LocalStorage } from '@utils'

const Profile = () => {
    const [user, setUser] = useState<User | null>(null)
    const auth = getFirebaseAuth()
    const navigate = useNavigate()
    const localStorage = new LocalStorage()

    useEffect(() => {
        const listener = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        })

        return () => listener()
    }, [auth])

    const handleSignOutClick = () => {
        localStorage.setItem('isSignedIn', false)
        auth.signOut()
        setUser(null)
        navigate(Paths.SignUp)
    }

    return (
        <Container>
            <>Profile</>
            <br></br>
            <>{user?.email}</>
            <Button onClick={handleSignOutClick}>sign out</Button>
        </Container>
    )
}

export default Profile
