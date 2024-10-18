import { useMemo } from 'react'
import { useParams } from 'react-router-dom'

import { Container } from './styled'

import { Sidebar } from '@components/Sidebar'
import { TwitterUsersContent } from '@components/TwitterUsersContent'
import { useAppDispatch, useAppSelector } from '@hooks'
import { ProfileMainContent } from '@pages/Profile/ProfileMainContent'
import { totalSelector, updateCurrentUser } from '@store'

const UserPage = () => {
    const { userId } = useParams()

    const dispatch = useAppDispatch()
    const { accounts } = useAppSelector(totalSelector)

    const currentUser = useMemo(() => {
        return accounts.find((account) => account.userId === userId)!
    }, [accounts, userId])

    if (currentUser) {
        dispatch(updateCurrentUser(currentUser))
    }
    return (
        <>
            {currentUser && (
                <Container>
                    <Sidebar />
                    <ProfileMainContent />
                    <TwitterUsersContent />
                </Container>
            )}
        </>
    )
}

export default UserPage
