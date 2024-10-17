import styled, { css } from 'styled-components'

import { MainPageContent, mixins } from '@styles'

export const Container = styled.div`
    ${mixins.flexRowCenter}

    align-items: start;
`

export const HomeSection = styled(MainPageContent)`
    ${({ theme }) => {
        return css`
            width: ${theme.fullSize + '%'};

            @media (${theme.media.lg}) {
                min-width: 0;
            }
        `
    }}
`
