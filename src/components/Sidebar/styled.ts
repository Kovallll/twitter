import styled, { css } from 'styled-components'

import mixins from '@styles/mixins'

export const Container = styled.section`
    ${({ theme }) => {
        return css`
            ${mixins.flexColumnStart}
            max-width: ${theme.sidebarStyles.lg.width + 'px'};
            width: ${theme.fullSize + '%'};

            @media (${theme.media.md}) {
                max-width: ${theme.sidebarStyles.md.width + 'px'};
            }
            @media (${theme.media.xs}) {
                max-width: ${theme.sidebarStyles.sm.width + 'px'};
            }
        `
    }}
`

export const LogoWrap = styled.div`
    ${({ theme }) => {
        return css`
            margin-bottom: ${theme.spaces.xxxl + 'px'};

            @media (${theme.media.md}) {
                margin-bottom: ${theme.spaces.xxl + 'px'};
            }
            @media (${theme.media.sm}) {
                margin-bottom: ${theme.spaces.xl + 'px'};
            }
        `
    }}
`

export const SidebarLink = styled.a`
    ${({ theme }) => {
        return css`
            ${mixins.flexRowStart}
            width: ${theme.fullSize + '%'};
            margin-bottom: ${theme.spaces.xxl + 'px'};
            text-decoration: none;

            @media (${theme.media.md}) {
                margin-bottom: ${theme.spaces.xl + 'px'};
            }
            @media (${theme.media.sm}) {
                margin-bottom: ${theme.spaces.lg + 'px'};
            }
        `
    }}
`

export const Icon = styled.img``

export const Title = styled.p`
    ${({ theme }) => {
        return css`
            margin-left: ${theme.spaces.lg + 'px'};
            color: ${theme.palette.common.black};
            font-size: ${theme.fontSizes.sm + 'px'};
            font-weight: 700;

            @media (${theme.media.md}) {
                margin-left: ${theme.spaces.md + 'px'};
                font-size: ${theme.fontSizes.xs + 'px'};
            }
            @media (${theme.media.xs}) {
                display: none;
            }
        `
    }}
`

export const Profile = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexRowCenter}
            margin-top: ${theme.spaces.xxxl + 'px'};
            margin-bottom: ${theme.spaces.xl + 'px'};

            @media (${theme.media.md}) {
                margin-top: ${theme.spaces.xxl + 'px'};
                margin-bottom: ${theme.spaces.lg + 'px'};
            }
            @media (${theme.media.xs}) {
                margin-top: ${theme.spaces.xl + 'px'};
                margin-bottom: ${theme.spaces.md + 'px'};
            }
        `
    }}
`

export const Image = styled.img`
    ${({ theme }) => {
        return css`
            width: ${theme.sidebarStyles.lg.profileImagesize + 'px'};
            height: ${theme.sidebarStyles.lg.profileImagesize + 'px'};
            border-radius: ${theme.sidebarStyles.profileImageBorderRadius +
            '%'};

            @media (${theme.media.md}) {
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

            @media (${theme.media.md}) {
                margin-left: ${theme.spaces.xl + 'px'};
            }
            @media (${theme.media.xs}) {
                margin-left: ${theme.spaces.lg + 'px'};
            }
        `
    }}
`

export const NameText = styled.p`
    ${({ theme }) => {
        return css`
            font-weight: 700;
            font-size: ${theme.fontSizes.xs + 'px'};

            @media (${theme.media.xs}) {
                font-size: ${theme.fontSizes.xxs + 'px'};
            }
        `
    }}
`

export const SocialText = styled.p`
    ${({ theme }) => {
        return css`
            font-size: ${theme.fontSizes.xs + 'px'};

            @media (${theme.media.xs}) {
                font-size: ${theme.fontSizes.xxs + 'px'};
            }
        `
    }}
`
