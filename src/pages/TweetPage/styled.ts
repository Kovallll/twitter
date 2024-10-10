import styled, { css } from 'styled-components'

import mixins from '@styles/mixins'

export const Container = styled.div`
    ${mixins.flexRowCenter}

    align-items: start;
`

export const TweetSection = styled.section`
    ${({ theme }) => {
        return css`
            ${mixins.flexColumnCenter}

            min-width: ${theme.profileMainContentStyles.lg.maxWidth + 'px'};
            position: relative;
            border: ${theme.profileMainContentStyles.border +
            theme.palette.lineBoardColor};
            border-bottom: 0;

            @media (${theme.media.xl}) {
                min-width: ${theme.profileMainContentStyles.md.maxWidth + 'px'};
            }

            @media (${theme.media.lg}) {
                min-width: ${theme.profileMainContentStyles.sm.maxWidth + 'px'};
            }

            @media (${theme.media.xxs}) {
                min-width: 0;
            }
        `
    }}
`
