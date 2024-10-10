import styled, { css } from 'styled-components'

export const MorePopupBlock = styled.div`
    ${({ theme }) => {
        return css`
            position: absolute;
            top: ${theme.spaces.sm + 'px'};
            right: ${theme.spaces.xs + 'px'};
            background-color: ${theme.palette.accountsBgColor};
            padding: ${theme.spaces.md + 'px'};
            border-radius: ${theme.spaces.md + 'px'};
        `
    }}
`

export const DeleteOption = styled.p`
    ${({ theme }) => {
        return css`
            color: ${theme.palette.errorColor};
        `
    }}
`
