import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { TitleProps } from './types'

import { mixins } from '@styles'

export const NavLink = styled(Link)`
    ${({ theme }) => {
        return css`
            ${mixins.flexRowStart}

            margin-bottom: ${theme.spaces.xxl + 'px'};
            text-decoration: none;

            @media (${theme.media.xl}) {
                margin-bottom: ${theme.spaces.xl + 'px'};
            }

            @media (${theme.media.md}) {
                ${mixins.flexRowCenter}

                width: ${theme.fullSize + '%'};
                margin-bottom: ${theme.spaces.lg + 'px'};
            }

            @media (${theme.media.sm}) {
                margin-bottom: ${theme.spaces.md + 'px'};
            }
        `
    }}
`

export const Icon = styled.img``

export const Title = styled.p<TitleProps>`
    ${({ theme, $isActiveLink }) => {
        return css`
            margin-left: ${theme.spaces.lg + 'px'};
            font-size: ${theme.fontSizes.sm + 'px'};
            font-weight: ${theme.boldFont};
            color: ${$isActiveLink
                ? theme.palette.primary
                : theme.palette.common.black};

            @media (${theme.media.xl}) {
                margin-left: ${theme.spaces.md + 'px'};
                font-size: ${theme.fontSizes.xs + 'px'};
            }

            @media (${theme.media.md}) {
                display: none;
            }
        `
    }}
`
