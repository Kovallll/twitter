import styled, { css } from 'styled-components'

import mixins from '@styles/mixins'

export const Container = styled.article`
    ${({ theme }) => {
        return css`
            ${mixins.flexRowSB}

            flex-wrap: wrap;
            margin-top: ${theme.spaces.xl + 'px'};
        `
    }}
`

export const InfoLink = styled.a`
    ${({ theme }) => {
        return css`
            cursor: pointer;
            margin-right: ${theme.spaces.xs + 'px'};
            color: ${theme.palette.gray};

            &:last-child {
                color: ${theme.palette.common.black};
            }
        `
    }}
`
