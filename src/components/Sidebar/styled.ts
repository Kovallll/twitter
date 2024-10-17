import styled, { css } from 'styled-components'

import { Button, mixins } from '@styles'

export const Wrap = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexColumnCenter}

            width: ${theme.fullSize + '%'};
            height: ${theme.fullSize + '%'};
            padding: ${theme.spaces.md + 'px'} ${theme.spaces.xl + 'px'} 0px
                ${theme.spaces.md + 'px'};

            @media (${theme.media.xl}) {
                max-width: ${theme.sidebarStyles.lg.maxWidth + 'px'};
                padding: ${theme.spaces.sm + 'px'} ${theme.spaces.lg + 'px'} 0px
                    ${theme.spaces.sm + 'px'};
            }

            @media (${theme.media.lg}) {
                max-width: ${theme.sidebarStyles.md.maxWidth + 'px'};
                padding: ${theme.spaces.xs + 'px'} ${theme.spaces.md + 'px'} 0px
                    ${theme.spaces.xs + 'px'};
            }

            @media (${theme.media.md}) {
                max-width: ${theme.sidebarStyles.sm.maxWidth + 'px'};
                padding: ${theme.spaces.xxs + 'px'} ${theme.spaces.sm + 'px'}
                    0px ${theme.spaces.xxs + 'px'};
            }

            @media (${theme.media.xxs}) {
                justify-content: start;
                position: fixed;
                left: 0;
                top: 0;
                z-index: ${theme.sidebarStyles.zIndex};
                background: ${theme.palette.bgColor};
            }
        `
    }}
`

export const Container = styled.section`
    ${({ theme }) => {
        return css`
            ${mixins.flexColumnStart}

            width: ${theme.fullSize + '%'};
        `
    }}
`

export const LogoWrap = styled.div`
    ${({ theme }) => {
        return css`
            margin-bottom: ${theme.spaces.xxxl + 'px'};

            @media (${theme.media.xl}) {
                margin-bottom: ${theme.spaces.xxl + 'px'};
            }

            @media (${theme.media.md}) {
                ${mixins.flexRowCenter}

                width: ${theme.fullSize + '%'};
            }

            @media (${theme.media.sm}) {
                margin-bottom: ${theme.spaces.xl + 'px'};
            }
        `
    }}
`

export const DesktopText = styled.p`
    ${({ theme }) => {
        return css`
            font-size: ${theme.fontSizes.xs + 'px'};

            @media (${theme.media.md}) {
                display: none;
            }
        `
    }}
`

export const IconWrap = styled.div`
    ${({ theme }) => {
        return css`
            display: none;

            @media (${theme.media.md}) {
                ${mixins.flexRowCenter}

                width: ${theme.fullSize + '%'};
            }
        `
    }}
`

export const TabletIconWrap = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexRowCenter}

            border-radius: ${theme.circleRadius + '%'};
            width: ${theme.sidebarStyles.iconWrapSize + 'px'};
            height: ${theme.sidebarStyles.iconWrapSize + 'px'};
        `
    }}
`

export const PostIconWrap = styled(TabletIconWrap)`
    ${({ theme }) => {
        return css`
            background-color: ${theme.palette.blue};
        `
    }}
`

export const LogOutIconWrap = styled(TabletIconWrap)`
    ${({ theme }) => {
        return css`
            background-color: ${theme.palette.gray};
            margin-top: ${theme.spaces.md + 'px'};
        `
    }}
`

export const TabletIcon = styled.img`
    ${({ theme }) => {
        return css`
            width: ${theme.sidebarStyles.iconSize + 'px'};
            height: ${theme.sidebarStyles.iconSize + 'px'};
        `
    }}
`

export const SidebarButton = styled(Button)`
    ${({ theme }) => {
        return css`
            background-color: ${theme.palette.blue};
            color: ${theme.palette.common.white};

            @media (${theme.media.md}) {
                display: none;
            }
        `
    }}
`

export const LogOutButton = styled(Button)`
    ${({ theme }) => {
        return css`
            background-color: ${theme.palette.gray};
            color: ${theme.palette.common.white};

            @media (${theme.media.md}) {
                display: none;
            }
        `
    }}
`
