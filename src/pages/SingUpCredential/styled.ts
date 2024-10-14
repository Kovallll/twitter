import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { Button, mixins } from '@styles'

export const Container = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexRowCenter}

            margin:  ${theme.signUpStyles.margin + 'px'};
            margin-top: ${theme.signUpStyles.marginTop + 'px'};
        `
    }}
`

export const Wrap = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexColumnStart}

            width: ${theme.signUpStyles.lg.width + 'px'};

            @media (${theme.media.xl}) {
                width: ${theme.signUpStyles.md.width + 'px'};
            }

            @media (${theme.media.xs}) {
                width: ${theme.signUpStyles.sm.width + 'px'};
            }
        `
    }}
`

export const LogoWrap = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexRowCenter}

            width: ${theme.fullSize + '%'};
        `
    }}
`

export const SignUpLink = styled(Link)`
    ${({ theme }) => {
        return css`
            ${mixins.linkStyles(theme)};
        `
    }}
`

export const Title = styled.h1`
    ${({ theme }) => {
        return css`
            font-size: ${theme.fontSizes.xl + 'px'};
            margin: ${theme.spaces.xxxl + 'px' + ' 0px'};

            @media (${theme.media.xl}) {
                font-size: ${theme.fontSizes.lg + 'px'};
                margin: ${theme.spaces.xl + 'px' + ' 0px'};
            }

            @media (${theme.media.lg}) {
                margin: ${theme.spaces.lg + 'px' + ' 0px'};
            }

            @media (${theme.media.sm}) {
                font-size: ${theme.fontSizes.md + 'px'};
            }
        `
    }}
`

export const Subtitle = styled.p`
    ${({ theme }) => {
        return css`
            font-size: ${theme.fontSizes.md + 'px'};
            margin: ${theme.spaces.xl + 'px' + ' 0px'};
            font-weight: ${theme.boldFont};

            @media (${theme.media.xl}) {
                font-size: ${theme.fontSizes.sm + 'px'};
            }

            @media (${theme.media.lg}) {
                margin: ${theme.spaces.lg + 'px' + ' 0px'};
            }

            @media (${theme.media.sm}) {
                font-size: ${theme.fontSizes.xs + 'px'};
            }
        `
    }}
`

export const Text = styled.p`
    ${({ theme }) => {
        return css`
            font-size: ${theme.fontSizes.sm + 'px'};
            margin: ${theme.spaces.lg + 'px' + ' 0px'};

            @media (${theme.media.md}) {
                margin: ${theme.spaces.md + 'px' + ' 0px'};
            }

            @media (${theme.media.xs}) {
                font-size: ${theme.fontSizes.xxs + 'px'};
            }
        `
    }}
`

export const DateBlock = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexRowSB}

            margin-bottom: ${theme.spaces.xl + 'px'};

            :first-child {
                width: ${theme.fullSize + '%'};
            }

            @media (${theme.media.md}) {
                margin-bottom: ${theme.fontSizes.sm + 'px'};
            }

            @media (${theme.media.xs}) {
                margin-bottom: ${theme.fontSizes.xs + 'px'};
            }
        `
    }}
`

export const SumbitButton = styled(Button)`
    ${({ theme }) => {
        return css`
            background-color: ${theme.palette.blue};
            color: ${theme.palette.common.white};
        `
    }}
`
