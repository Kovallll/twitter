import { Container } from './styled'

import { Sidebar } from '@components/Sidebar'
import { TwitterUsersContent } from '@components/TwitterUsersContent'
import { ProfileMainContent } from '@pages/Profile/ProfileMainContent'

const Profile = () => {
    return (
        <Container>
            <Sidebar />
            <ProfileMainContent />
            <TwitterUsersContent />
        </Container>
    )
}

export default Profile
