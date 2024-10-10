import styled, { css } from 'styled-components'

import { ProfileContent } from '@pages/Profile/ProfileMainContent/styled'
import mixins from '@styles/mixins'

export const Container = styled.div`
    ${mixins.flexRowCenter}

    align-items: start;
`

export const HomeSection = styled(ProfileContent)`
    ${({ theme }) => {
        return css`
            width: ${theme.fullSize + '%'};

            @media (${theme.media.lg}) {
                min-width: 0;
            }
        `
    }}
`
