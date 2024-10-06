import styled from 'styled-components'

import { Button } from '@styles/global'
import mixins from '@styles/mixins'

export const AccountsSection = styled.section``

export const Title = styled.p``

export const AccountCard = styled.div`
    ${mixins.flexRowStart}
`

export const AccountAvatar = styled.img`
    width: 60px;
    height: 60px;
`

export const AccountInfo = styled.div``

export const AccountName = styled.p``

export const AccountSocial = styled.p``

export const FollowButton = styled(Button)`
    margin-bottom: 0;
`
