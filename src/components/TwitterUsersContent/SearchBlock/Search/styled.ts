import styled, { css } from 'styled-components'

export const Container = styled.div`
    ${({ theme }) => {
        return css`
            position: relative;
            width: ${theme.fullSize + '%'};
        `
    }}
`

export const SearchInput = styled.input`
    ${({ theme }) => {
        return css`
            padding: ${theme.spaces.lg + 'px ' + theme.spaces.xxl + 'px'};
            border-radius: ${theme.spaces.xxl + 'px'};
            background-color: ${theme.palette.searchBgColor};
            border: 0;
            width: ${theme.fullSize + '%'};
            font-size: ${theme.fontSizes.md + 'px'};

            @media (${theme.media.lg}) {
                font-size: ${theme.fontSizes.sm + 'px'};
            }

            @media (${theme.media.md}) {
                font-size: ${theme.fontSizes.xs + 'px'};
            }
        `
    }}
`

export const SearchIcon = styled.img`
    ${({ theme }) => {
        return css`
            position: absolute;
            top: ${theme.spaces.lg + 'px'};
            left: ${theme.spaces.sm + 'px'};
        `
    }}
`
