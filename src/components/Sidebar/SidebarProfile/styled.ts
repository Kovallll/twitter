import styled, { css } from 'styled-components'

import { mixins, ProfileIcon } from '@styles'

export const Profile = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexRowStart}

            width: ${theme.fullSize + '%'};
            margin-top: ${theme.spaces.xxxl + 'px'};
            margin-bottom: ${theme.spaces.xl + 'px'};

            @media (${theme.media.xl}) {
                margin-top: ${theme.spaces.xxl + 'px'};
                margin-bottom: ${theme.spaces.lg + 'px'};
            }

            @media (${theme.media.md}) {
                ${mixins.flexRowCenter}
            }

            @media (${theme.media.xs}) {
                margin-top: ${theme.spaces.xl + 'px'};
                margin-bottom: ${theme.spaces.md + 'px'};
            }

            @media (${theme.media.xxs}) {
                display: none;
            }
        `
    }}
`

export const SidebarImage = styled(ProfileIcon)`
    ${({ theme }) => {
        return css`
            width: ${theme.sidebarStyles.lg.profileImagesize + 'px'};
            height: ${theme.sidebarStyles.lg.profileImagesize + 'px'};

            @media (${theme.media.xl}) {
                width: ${theme.sidebarStyles.md.profileImagesize + 'px'};
                height: ${theme.sidebarStyles.md.profileImagesize + 'px'};
            }

            @media (${theme.media.xs}) {
                width: ${theme.sidebarStyles.sm.profileImagesize + 'px'};
                height: ${theme.sidebarStyles.sm.profileImagesize + 'px'};
            }
        `
    }}
`

export const TextBlock = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexColumnStart}

            margin-left: ${theme.spaces.xxl + 'px'};

            @media (${theme.media.xl}) {
                margin-left: ${theme.spaces.xl + 'px'};
            }

            @media (${theme.media.lg}) {
                margin-left: ${theme.spaces.md + 'px'};
            }

            @media (${theme.media.md}) {
                display: none;
            }
        `
    }}
`

export const NameText = styled.p`
    ${({ theme }) => {
        return css`
            font-weight: ${theme.boldFont};
            font-size: ${theme.fontSizes.xs + 'px'};
            word-wrap: break-word;
            width: ${theme.sidebarStyles.nameWidth + 'px'};
        `
    }}
`

export const SocialText = styled.p`
    ${({ theme }) => {
        return css`
            font-size: ${theme.fontSizes.xxs + 'px'};
            word-wrap: break-word;
            width: ${theme.sidebarStyles.socialWidth + 'px'};
        `
    }}
`
