import styled from 'styled-components'

import { ProfileContent } from '@pages/Profile/ProfileMainContent/styled'
import mixins from '@styles/mixins'

export const Container = styled.div`
    ${mixins.flexRowCenter}

    align-items: start;
`

export const TweetSection = styled(ProfileContent)``
