import { useEffect, useState } from 'react'
import { getFirebaseAuth } from 'firebase.config'
import { onAuthStateChanged, User } from 'firebase/auth'

import { Container } from './styled'

const Profile = () => {
    const [user, setUser] = useState<User | null>(null)
    const auth = getFirebaseAuth()

    useEffect(() => {
        const listener = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser(null)
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
