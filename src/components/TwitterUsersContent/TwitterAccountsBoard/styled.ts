import styled, { css } from 'styled-components'

import { AccountsProps } from './types'

import { Button, mixins, ProfileIcon } from '@styles'

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

export const AccountCard = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexRowStart}

            height: ${theme.twitterAccountStyles.cardWidth + 'px'};
        `
    }}
`

export const AccountAvatar = styled(ProfileIcon)`
    ${({ theme }) => {
        return css`
            margin-right: ${theme.spaces.md + 'px'};
            min-width: ${theme.profileIconStyles.lg.size + 'px'};

            @media (${theme.media.lg}) {
                margin-right: ${theme.spaces.xs + 'px'};
                min-width: ${theme.profileIconStyles.md.size + 'px'};
            }

            @media (${theme.media.md}) {
                display: none;
            }
        `
    }}
`

export const AccountInfo = styled.div`
    ${({ theme }) => {
        return css`
            min-width: ${theme.twitterAccountStyles.lg.infoWidth + 'px'};
            margin-right: ${theme.spaces.md + 'px'};

            @media (${theme.media.xl}) {
                margin-right: ${theme.spaces.sm + 'px'};
            }

            @media (${theme.media.lg}) {
                min-width: ${theme.twitterAccountStyles.md.infoWidth + 'px'};
                margin-right: ${theme.spaces.xs + 'px'};
            }
        `
    }}
`

export const AccountName = styled.p`
    ${({ theme }) => {
        return css`
            font-size: ${theme.fontSizes.sm + 'px'};
            word-wrap: break-word;

            @media (${theme.media.lg}) {
                font-size: ${theme.fontSizes.xs + 'px'};
            }
        `
    }}
`

export const AccountSocial = styled.p`
    ${({ theme }) => {
        return css`
            word-wrap: break-word;
            font-size: ${theme.fontSizes.xs + 'px'};

            @media (${theme.media.lg}) {
                display: none;
            }
        `
    }}
`

export const FollowButton = styled(Button)`
    ${({ theme }) => {
        return css`
            margin-bottom: 0;
            max-width: ${theme.twitterAccountStyles.lg.buttonWidth + 'px'};
            width: ${theme.fullSize + '%'};
            font-size: ${theme.fontSizes.md + 'px'};

            @media (${theme.media.lg}) {
                max-width: ${theme.twitterAccountStyles.md.buttonWidth + 'px'};
                font-size: ${theme.fontSizes.sm + 'px'};
            }

            @media (${theme.media.md}) {
                font-size: ${theme.fontSizes.xs + 'px'};
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
