import styled, { css } from 'styled-components'

import { Button as DefaultButton } from '@styles'

export const Button = styled(DefaultButton)`
    ${({ theme }) => {
        return css`
            margin-bottom: 0;
            max-width: ${theme.twitterAccountStyles.lg.buttonWidth + 'px'};
            width: ${theme.fullSize + '%'};
            font-size: ${theme.fontSizes.md + 'px'};

            @media (${theme.media.lg}) {
                max-width: ${theme.twitterAccountStyles.md.buttonWidth + 'px'};
                font-size: ${theme.fontSizes.sm + 'px'};
            }

            @media (${theme.media.md}) {
                font-size: ${theme.fontSizes.xs + 'px'};
            }
        `
    }}
`
