import styled, { css } from 'styled-components'

import mixins from '@styles/mixins'

export const Title = styled.h2`
    margin-bottom: 20px;
`

export const Buttons = styled.div`
    ${({}) => {
        return css`
            ${mixins.flexRowSE}
        `
    }}
`
