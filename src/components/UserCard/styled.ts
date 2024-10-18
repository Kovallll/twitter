import styled, { css } from 'styled-components'

import { mixins, ProfileIcon } from '@styles'

export const Card = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexRowStart}

            height: ${theme.twitterAccountStyles.cardWidth + 'px'};
            margin: ${theme.spaces.xs + 'px'} 0;
        `
    }}
`

export const UserAvatar = styled(ProfileIcon)`
    ${({ theme }) => {
        return css`
            margin-right: ${theme.spaces.md + 'px'};
            min-width: ${theme.profileIconStyles.lg.size + 'px'};
            cursor: pointer;

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

export const UserInfo = styled.div`
    ${({ theme }) => {
        return css`
            min-width: ${theme.twitterAccountStyles.lg.infoWidth + 'px'};
            margin-right: ${theme.spaces.md + 'px'};
            cursor: pointer;

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

export const UserName = styled.p`
    ${({ theme }) => {
        return css`
            font-size: ${theme.fontSizes.sm + 'px'};
            word-wrap: break-word;

            @media (${theme.media.lg}) {
                font-size: ${theme.fontSizes.xs + 'px'};
            }

            @media (${theme.media.md}) {
            }
        `
    }}
`

export const UserSocial = styled.p`
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
