import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Container, SidebarWrap } from './styled'

import { ProfileMainContent } from '@components/ProfileMainContent'
import { Sidebar } from '@components/Sidebar'
import { TwitterUsersContent } from '@components/TwitterUsersContent'
import { initUserData, signOutFirebaseAccount } from '@firebase'
import { useAppDispatch, useAppSelector } from '@hooks'

const Profile = () => {
    const { user } = useAppSelector((state) => state.user)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    useEffect(() => {
        initUserData(user.userId, dispatch)
    }, [dispatch, user.userId])

    const handleSignOutClick = () => {
        signOutFirebaseAccount(navigate, dispatch)
    }

    return (
        <Container>
            <SidebarWrap>
                <Sidebar onSignOut={handleSignOutClick} />
            </SidebarWrap>
            <ProfileMainContent />
            <TwitterUsersContent />
        </Container>
    )
}

export default Profile
