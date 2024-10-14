import styled, { css } from 'styled-components'

import { mixins } from '@styles'

export const ContentSection = styled.section`
    ${({ theme }) => {
        return css`
            ${mixins.flexColumnStart}

            width: ${theme.fullSize + '%'};
            padding: ${theme.spaces.xl + 'px'};

            section {
                margin-top: ${theme.spaces.lg + 'px'};
            }

            @media (${theme.media.xl}) {
                padding: ${theme.spaces.lg + 'px'};
                max-width: ${theme.twittetUserContentStyles.lg.width + 'px'};
            }

            @media (${theme.media.lg}) {
                padding: ${theme.spaces.md + 'px'};
                max-width: ${theme.twittetUserContentStyles.md.width + 'px'};
            }

            @media (${theme.media.md}) {
                padding: ${theme.spaces.sm + 'px'};
                max-width: ${theme.twittetUserContentStyles.sm.width + 'px'};
            }

            @media (${theme.media.sm}) {
                display: none;
            }
        `
    }}
`
