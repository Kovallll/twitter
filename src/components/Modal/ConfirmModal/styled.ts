import styled, { css } from 'styled-components'

import { Button, mixins, theme } from '@styles'

export const Title = styled.h2`
    ${({ theme }) => {
        return css`
            margin: ${theme.spaces.xl + 'px 0'};
        `
    }}
`

export const ButtonsWrap = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexRowSE}

            width: ${theme.fullSize + '%'};
        `
    }}
`

export const CloseButton = styled(Button)`
    background-color: ${theme.palette.blue};
    color: ${theme.palette.common.white};
    width: ${theme.modalStyles.lg.buttonWidth + 'px'};
    cursor: pointer;

    @media (${theme.media.md}) {
        width: ${theme.modalStyles.md.buttonWidth + 'px'};
    }

    @media (${theme.media.xs}) {
        width: ${theme.modalStyles.sm.buttonWidth + 'px'};
    }
`

export const ConfirmButton = styled(CloseButton)`
    background-color: ${theme.palette.red};
`
