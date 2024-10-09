import styled, { css } from 'styled-components'

import { ProfileIcon } from '@styles/global'
import mixins from '@styles/mixins'

export const HeaderWrap = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexRowSB}

            width: ${theme.fullSize + '%'};
            padding: ${theme.spaces.lg + 'px ' + theme.spaces.md + 'px'};

            @media (${theme.media.xs}) {
                padding: ${theme.spaces.md + 'px ' + theme.spaces.sm + 'px'};
            }

            @media (${theme.media.xxs}) {
                padding: ${theme.spaces.sm + 'px ' + theme.spaces.xs + 'px'};
            }
        `
    }}
`
export const HeaderContent = styled.div`
    ${mixins.flexRowCenter}
`

export const HeaderTextBlock = styled.div`
    ${mixins.flexColumnStart}
`

export const HeaderTitle = styled.p`
    ${({ theme }) => {
        return css`
            font-weight: ${theme.boldFont};
            margin-bottom: ${theme.spaces.xs + 'px'};
            font-size: ${theme.fontSizes.md + 'px'};

            @media (${theme.media.xs}) {
                margin-bottom: ${theme.spaces.xxs + 'px'};
                font-size: ${theme.fontSizes.sm + 'px'};
            }

            @media (${theme.media.xxs}) {
                font-size: ${theme.fontSizes.xs + 'px'};
            }
        `
    }}
`

export const HeaderSubtitle = styled.p`
    ${({ theme }) => {
        return css`
            font-size: ${theme.fontSizes.xs + 'px'};

            @media (${theme.media.xs}) {
                font-size: ${theme.fontSizes.xxs + 'px'};
            }
        `
    }}
`

export const IconWrap = styled.div`
    ${({ theme }) => {
        return css`
            display: none;

            @media (${theme.media.xxs}) {
                display: flex;
            }
        `
    }}
`

export const AvatarIcon = styled(ProfileIcon)`
    ${({ theme }) => {
        return css`
            width: ${theme.headerStyles.iconSize + 'px'};
            height: ${theme.headerStyles.iconSize + 'px'};
        `
    }}
`

export const Title = styled.h1``
