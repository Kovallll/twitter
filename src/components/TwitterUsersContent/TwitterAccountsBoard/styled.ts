import styled, { css } from 'styled-components'

import { AccountsProps } from './types'

import { mixins } from '@styles'

export const AccountsSection = styled.section`
    ${({ theme }) => {
        return css`
            padding: ${theme.spaces.xl + 'px'};
            background-color: ${theme.palette.accountsBgColor};
            border-radius: ${theme.spaces.lg + 'px'};
            width: ${theme.fullSize + '%'};

            @media (${theme.media.xl}) {
                padding: ${theme.spaces.lg + 'px'};
            }

            @media (${theme.media.lg}) {
                padding: ${theme.spaces.sm + 'px'};
            }
        `
    }}
`

export const Accounts = styled.div<AccountsProps>`
    ${({ theme, $isShow }) => {
        return css`
            max-height: ${$isShow
                ? theme.twitterAccountStyles.showHeight + 'px'
                : theme.twitterAccountStyles.hideHeight + 'px'};
            overflow: ${$isShow ? 'auto' : 'hidden'};
            transition: ${theme.twitterAccountStyles.transition};
        `
    }}
`

export const Title = styled.p`
    ${({ theme }) => {
        return css`
            font-size: ${theme.fontSizes.lg + 'px'};
            font-weight: ${theme.boldFont};
            margin-bottom: ${theme.spaces.xl + 'px'};

            @media (${theme.media.lg}) {
                font-size: ${theme.fontSizes.md + 'px'};
                margin-bottom: ${theme.spaces.lg + 'px'};
            }

            @media (${theme.media.md}) {
                font-size: ${theme.fontSizes.sm + 'px'};
                margin-bottom: ${theme.spaces.md + 'px'};
            }
        `
    }}
`

export const ShowMoreLink = styled.button`
    ${({ theme }) => {
        return css`
            ${mixins.linkStyles(theme)};

            background: transparent;
            border: 0;
            margin-top: ${theme.spaces.md + 'px'};
            font-size: ${theme.fontSizes.sm + 'px'};
        `
    }};
`
