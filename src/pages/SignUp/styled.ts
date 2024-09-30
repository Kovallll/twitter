import styled, { css } from 'styled-components'

import { LinkStyle } from '@styles/global'
import mixins from '@styles/mixins'

export const Container = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexColumnCenter}

            width: ${theme.fullSize + '%'};
            height: ${theme.fullSize + 'vh'};
        `
    }}
`

export const SignUpInfo = styled.section`
    ${({ theme }) => {
        return css`
            ${mixins.flexColumnCenter}

            align-items: start;
            flex: 1;

            @media (${theme.media.xs}) {
                align-items: center;
            }
        `
    }}
`

export const Image = styled.img`
    ${({ theme }) => {
        return css`
            object-fit: cover;
            height: ${theme.logoImageStyles.maxHeight + 'px'};
            width: ${theme.logoImageStyles.width + 'vw'};
            margin-right: ${theme.logoImageStyles.lg.marginLeft + 'px'};
            flex: 1.5;

            @media (${theme.media.xl}) {
                height: ${theme.logoImageStyles.defaultHeigth};
                margin-right: ${theme.logoImageStyles.md.marginLeft + 'px'};
            }
            @media (${theme.media.md}) {
                height: ${theme.logoImageStyles.defaultHeigth};
                margin-right: ${theme.logoImageStyles.sm.marginLeft + 'px'};
            }
            @media (${theme.media.xs}) {
                display: none;
            }
        `
    }}
`

export const Title = styled.h1`
    ${({ theme }) => {
        return css`
            font-size: ${theme.fontSizes.xxl + 'px'};
            margin: ${theme.spaces.xxxl + 'px' + ' 0px'};

            @media (${theme.media.xl}) {
                font-size: ${theme.fontSizes.xl + 'px'};
                margin: ${theme.spaces.xl + 'px' + ' 0px'};
            }
            @media (${theme.media.lg}) {
                margin: ${theme.spaces.lg + 'px' + ' 0px'};
            }
            @media (${theme.media.sm}) {
                font-size: ${theme.fontSizes.lg + 'px'};
            }
        `
    }}
`

export const Subtitle = styled.h3`
    ${({ theme }) => {
        return css`
            font-size: ${theme.fontSizes.xl + 'px'};
            margin: ${theme.spaces.xl + 'px' + ' 0px'};

            @media (${theme.media.xl}) {
                font-size: ${theme.fontSizes.lg + 'px'};
                margin: ${theme.spaces.lg + 'px' + ' 0px'};
            }
            @media (${theme.media.sm}) {
                font-size: ${theme.fontSizes.sm + 'px'};
            }
        `
    }}
`

export const ButtonsBlock = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexColumnCenter}

            width: ${theme.buttonsBlock.lg.width + 'px'};

            @media (${theme.media.md}) {
                width: ${theme.buttonsBlock.md.width + 'px'};
            }
            @media (${theme.media.sm}) {
                width: ${theme.buttonsBlock.sm.width + 'px'};
            }
        `
    }}
`

export const GoogleIcon = styled.img`
    ${({ theme }) => {
        return css`
            width: ${theme.googleIcon.size};
            height: ${theme.googleIcon.size};
        `
    }}
`

export const Policy = styled.p`
    ${({ theme }) => {
        return css`
            margin: ${theme.spaces.xl + 'px' + ' 0px'};
            font-size: ${theme.fontSizes.xs + 'px'};
            width: ${theme.policyStyles.lg.width + 'px'};

            @media (${theme.media.lg}) {
                margin: ${theme.spaces.md + 'px' + ' 0px'};
                width: ${theme.policyStyles.md.width + 'px'};
            }
            @media (${theme.media.md}) {
                margin: ${theme.spaces.sm + 'px' + ' 0px'};
                width: ${theme.policyStyles.sm.width + 'px'};
            }
        `
    }}
`

export const Login = styled.p`
    ${({ theme }) => {
        return css`
            margin: ${theme.spaces.xl + 'px' + ' 0px'};
            font-size: ${theme.fontSizes.sm + 'px'};

            @media (${theme.media.sm}) {
                margin: ${theme.spaces.md + 'px' + ' 0px'};
            }
        `
    }}
`

export const TopContent = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexRowCenter}

            width: ${theme.fullSize + '%'};

            @media (${theme.media.xs}) {
                ${mixins.flexColumnCenter}
            }
        `
    }}
`

export const BottomContent = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexRowSB}

            overflow: auto;
            height: ${theme.fullSize + '%'};
            width: ${theme.bottomLinksStyle.lg.maxWidth + 'px'};

            @media (${theme.media.lg}) {
                width: ${theme.bottomLinksStyle.md.maxWidth + 'px'};
            }
            @media (${theme.media.md}) {
                width: ${theme.bottomLinksStyle.sm.maxWidth + 'px'};
            }
            @media (${theme.media.xs}) {
                display: none;
            }
        `
    }}
`

export const SingUpLink = styled.a`
    ${LinkStyle}
`

export const BottomLink = styled.a`
    ${({ theme }) => {
        return css`
            cursor: pointer;
            font-size: ${theme.fontSizes.xs + 'px'};
            margin-right: ${theme.spaces.sm + 'px'};
            white-space: nowrap;

            &:last-child {
                margin-right: 0;
            }

            @media (${theme.media.lg}) {
                font-size: ${theme.fontSizes.xxs + 'px'};
                margin-right: ${theme.spaces.xs + 'px'};
            }
        `
    }}
`
