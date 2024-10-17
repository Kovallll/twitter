import { Container } from './styled'

import { Sidebar } from '@components/Sidebar'
import { TwitterUsersContent } from '@components/TwitterUsersContent'
import { useAppSelector } from '@hooks'
import { ProfileMainContent } from '@pages/Profile/ProfileMainContent'
import { userSelector } from '@store'

const Profile = () => {
    const { user } = useAppSelector(userSelector)

    return (
        <Container>
            <Sidebar />
            <ProfileMainContent user={user} />
            <TwitterUsersContent />
        </Container>
    )
}

export default Profile
