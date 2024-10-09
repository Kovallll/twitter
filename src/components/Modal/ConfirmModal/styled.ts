import styled, { css } from 'styled-components'

import mixins from '@styles/mixins'

export const Title = styled.h2`
    ${({ theme }) => {
        return css`
            margin: ${theme.spaces.xl + 'px 0'};
        `
    }}
`

export const Buttons = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexRowSE}
            width: ${theme.fullSize + '%'};
        `
    }}
`
