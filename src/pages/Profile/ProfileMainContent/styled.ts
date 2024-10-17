import styled, { css } from 'styled-components'

import { MainPageContent } from '@styles'

export const ProfileContent = styled(MainPageContent)``

export const Image = styled.img`
    ${({ theme }) => {
        return css`
            width: ${theme.fullSize + '%'};
        `
    }}
`

export const Tweets = styled.section`
    ${({ theme }) => {
        return css`
            width: ${theme.fullSize + '%'};
        `
    }}
`

export const TweetsHeader = styled.h3`
    ${({ theme }) => {
        return css`
            padding: ${theme.spaces.xl +
            'px ' +
            Number(theme.spaces.xxxl) * 2 +
            'px'};
            border-bottom: ${theme.profileMainContentStyles.border +
            theme.palette.lineBoardColor};
            width: ${theme.profileMainContentStyles.lg.twitterHeaderWidth +
            'px'};

            @media (${theme.media.lg}) {
                padding: ${theme.spaces.lg + 'px ' + theme.spaces.xxxxl + 'px'};
            }

            @media (${theme.media.xs}) {
                padding: ${theme.spaces.lg + 'px ' + theme.spaces.xxxl + 'px'};
                width: ${theme.profileMainContentStyles.md.twitterHeaderWidth +
                'px'};
            }
        `
    }}
`
