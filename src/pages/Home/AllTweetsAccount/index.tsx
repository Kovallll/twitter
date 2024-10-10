import { AllTweetsAccountProps } from './types'

import { Tweet } from '@components/Tweet'

export const AllTweetsAccount = ({ account }: AllTweetsAccountProps) => {
    return (
        <>
            {account.tweets?.map((tweet) => (
                <Tweet data={{ tweetData: tweet, user: account }} />
            ))}
        </>
    )
}
