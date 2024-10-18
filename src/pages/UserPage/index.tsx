import { useMemo } from 'react'
import { useParams } from 'react-router-dom'

import { Container } from './styled'

import { Sidebar } from '@components/Sidebar'
import { TwitterUsersContent } from '@components/TwitterUsersContent'
import { useAppSelector } from '@hooks'
import { ProfileMainContent } from '@pages/Profile/ProfileMainContent'
import { totalSelector } from '@store'

const UserPage = () => {
    const { userId } = useParams()
    const { accounts } = useAppSelector(totalSelector)

    const currentUser = useMemo(() => {
        return accounts.find((account) => account.userId === userId)!
    }, [accounts, userId])

    return (
        <>
            {currentUser && (
                <Container>
                    <Sidebar />
                    <ProfileMainContent user={currentUser} />
                    <TwitterUsersContent />
                </Container>
            )}
        </>
    )
}

export default UserPage