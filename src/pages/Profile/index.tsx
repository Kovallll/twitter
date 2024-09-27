import { useEffect, useState } from 'react'
import { useAuth } from 'firebase.config'
import { onAuthStateChanged, User } from 'firebase/auth'

import { Container } from './styled'

const Profile = () => {
    const [user, setUser] = useState<User>()
    const auth = useAuth()
    useEffect(() => {
        const listener = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        })

        return () => listener()
    }, [auth])
    return (
        <Container>
            <>Profile</>
            <br></br>
            <>{user?.email}</>
        </Container>
    )
}

export default Profile
