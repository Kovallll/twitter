import styled, { css } from 'styled-components'

import { mixins } from '@styles'

export const Container = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexColumnStart}

            position: absolute;
            background-color: ${theme.palette.searchBgColor};
            border-radius: ${theme.spaces.lg + 'px'};
            max-height: ${theme.searchStyles.maxHeight + 'px'};
            width: ${theme.fullSize + '%'};
            z-index: ${theme.searchStyles.zIndex};
            padding: ${theme.spaces.sm + 'px'};
            overflow-x: hidden;
            overflow-y: auto;
        `
    }}
`

export const TweetText = styled.p`
    ${({ theme }) => {
        return css`
            text-align: center;
            cursor: default;
            border-bottom: 0;
            color: ${theme.palette.text};
            width: ${theme.fullSize + '%'};
            cursor: pointer;
            font-size: ${theme.fontSizes.md + 'px'};
            margin-top: ${theme.spaces.sm + 'px'};

            @media (${theme.media.lg}) {
                font-size: ${theme.fontSizes.sm + 'px'};
                margin-top: ${theme.spaces.xs + 'px'};
            }

            @media (${theme.media.md}) {
                font-size: ${theme.fontSizes.xs + 'px'};
                margin-top: ${theme.spaces.xxs + 'px'};
            }
        `
    }}
`
