import { follow, unfollow } from './config'
import { Button } from './styled'
import { FollowButtonProps } from './tepes'

import { followOrUnfollowAccount } from '@firebase'
import { useAppDispatch, useAppSelector } from '@hooks'
import { userSelector } from '@store'
import { UserData } from '@types'

export const FollowButton = ({ account }: FollowButtonProps) => {
    const dispatch = useAppDispatch()
    const { user } = useAppSelector(userSelector)

    const handleFollowAccount = (account: UserData) => () => {
        followOrUnfollowAccount(user, account, dispatch)
    }

    return (
        <Button onClick={handleFollowAccount(account)}>
            {user.following.includes(account.userId) ? unfollow : follow}
        </Button>
    )
}
