import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

import mixins from '@styles/mixins'

export const Container = styled.main`
    ${({}) => {
        return css`
            ${mixins.flexRowCenter}

            align-items: start;
        `
    }}
`

export const SearchTweetText = styled(Link)`
    ${({ theme }) => {
        return css`
            text-decoration: none;
            color: ${theme.palette.common.black};
            width: ${theme.fullSize + '%'};
            cursor: pointer;
            font-size: ${theme.fontSizes.md + 'px'};
            margin-top: ${theme.spaces.sm + 'px'};
            border-bottom: ${theme.profileMainContentStyles.border +
            theme.palette.gray};

            &:last-child {
                border-bottom: 0;
            }

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
