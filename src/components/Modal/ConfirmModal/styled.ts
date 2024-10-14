import styled, { css } from 'styled-components'

import { Button, mixins } from '@styles'

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
    ${({ theme }) => {
        return css`
            color: ${theme.palette.text};
            background-color: ${theme.palette.bgColor};
            width: ${theme.modalStyles.lg.buttonWidth + 'px'};
            cursor: pointer;

            @media (${theme.media.md}) {
                width: ${theme.modalStyles.md.buttonWidth + 'px'};
            }

            @media (${theme.media.xs}) {
                width: ${theme.modalStyles.sm.buttonWidth + 'px'};
            }
        `
    }}
`

export const ConfirmButton = styled(CloseButton)`
    ${({ theme }) => {
        return css`
            background-color: ${theme.palette.errorColor};
        `
    }}
`
