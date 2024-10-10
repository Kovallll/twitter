import styled, { css } from 'styled-components'

import { Button } from '@styles/global'
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
export const ConfrimButton = styled(Button)`
    ${({ theme }) => {
        return css`
            color: ${theme.palette.text};
            background-color: ${theme.palette.bgColor};
        `
    }}
`
