import { Container } from './styled'

import { Sidebar } from '@components/Sidebar'
import { TwitterUsersContent } from '@components/TwitterUsersContent'
import { useAppDispatch, useAppSelector } from '@hooks'
import { ProfileMainContent } from '@pages/Profile/ProfileMainContent'
import { updateCurrentUser, userSelector } from '@store'

const Profile = () => {
    const dispatch = useAppDispatch()
    const { user, currentUser } = useAppSelector(userSelector)
    
    if (user.userId !== '' && currentUser.userId !== user.userId) {
        dispatch(updateCurrentUser(user))
    }
    return (
        <Container>
            <Sidebar />
            <ProfileMainContent />
            <TwitterUsersContent />
        </Container>
    )
}

export default Profile
