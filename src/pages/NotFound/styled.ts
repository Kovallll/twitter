import styled, { css } from 'styled-components'

import { Button, mixins } from '@styles'

export const Container = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexRowCenter}

            margin: ${theme.spaces.md + 'px'};
        `
    }}
`

export const Content = styled.div`
    ${({ theme }) => {
        return css`
            width: ${theme.notFoundStyles.width + 'px'};
        `
    }}
`

export const Title = styled.h1`
    ${({ theme }) => {
        return css`
            text-align: center;
            margin-bottom: ${theme.spaces.md + 'px'};
        `
    }}
`

export const BackButton = styled(Button)`
    ${({ theme }) => {
        return css`
            background-color: ${theme.palette.blue};
            color: ${theme.palette.common.white};
        `
    }}
`
