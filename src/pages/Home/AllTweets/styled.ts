import styled, { css } from 'styled-components'

import { Spinner } from '@styles'

export const TweetsSpinner = styled(Spinner)`
    ${({ theme }) => {
        return css`
            align-items: start;
            margin-top: ${theme.spaces.xl + 'px'};
        `
    }}
`
