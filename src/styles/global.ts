import styled, { createGlobalStyle, css } from 'styled-components'

import { mixins } from './mixins'
import { theme } from './theme'

import { ButtonProps } from '@types'

export const GlobalStyle = createGlobalStyle`
${({ theme }) => {
    return css`
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        body {
            font-family: 'Arial', sans-serif;
            ::-webkit-scrollbar {
                cursor: pointer;
                height: 10px;
                width: 10px;
                border: 1px solid ${theme.palette.gray};
            }
            ::-webkit-scrollbar-track {
                background: ${theme.palette.common.white};
                cursor: pointer;
            }
            ::-webkit-scrollbar-thumb {
                background-color: ${theme.palette.blue};
                cursor: pointer;
                border-radius: 20px;
                border: 3px solid ${theme.palette.common.white};
            }
        }
    `
}}
  
`

export const Logo = styled.img`
    ${({ theme }) => {
        return css`
            width: ${theme.logoStyles.width + 'px'};
            height: ${theme.logoStyles.height + 'px'};
        `
    }}
`

export const LinkStyle = {
    cursor: 'pointer',
    color: `${theme.palette.blue}`,
    textDecoration: `none`,
}

export const Form = styled.form`
    ${({ theme }) => {
        return css`
            width: ${theme.fullSize + '%'};
        `
    }}
`

export const ModalTitle = styled.h1`
    ${({ theme }) => {
        return css`
            font-size: ${theme.fontSizes.xl + 'px'};
            margin-top: ${theme.spaces.xxxl + 'px'};

            @media (${theme.media.xl}) {
                font-size: ${theme.fontSizes.lg + 'px'};
                margin-top: ${theme.spaces.xl + 'px'};
            }

            @media (${theme.media.lg}) {
                margin-top: ${theme.spaces.lg + 'px'};
            }

            @media (${theme.media.sm}) {
                font-size: ${theme.fontSizes.md + 'px'};
            }
        `
    }}
`

export const Button = styled.button<ButtonProps>`
    ${({
        theme,
        $withBorder = false,
        $backgroundColor = theme.palette.common.white,
        $color = theme.palette.common.black,
    }) => {
        return css`
            ${mixins.flexRowCenter}

            border: ${$withBorder
                ? theme.buttonStyles.border
                : theme.noneBorder};
            background-color: ${$backgroundColor};
            border-radius: ${theme.buttonStyles.borderRadius};
            cursor: pointer;
            width: ${theme.fullSize + '%'};
            padding: ${theme.spaces.lg + 'px ' + theme.spaces.xs + 'px'};
            margin-bottom: ${theme.spaces.xl + 'px'};
            font-size: ${theme.fontSizes.md + 'px'};
            font-weight: ${theme.boldFont};
            color: ${$color};

            @media (${theme.media.lg}) {
                padding: ${theme.spaces.md + 'px' + ' 0px'};
                margin-bottom: ${theme.spaces.lg + 'px'};
                font-size: ${theme.fontSizes.sm + 'px'};
            }

            @media (${theme.media.md}) {
                padding: ${theme.spaces.sm + 'px' + ' 0px'};
                margin-bottom: ${theme.spaces.md + 'px'};
                font-size: ${theme.fontSizes.xs + 'px'};
            }
        `
    }}
`

export const ErrorText = styled.p`
    ${({ theme }) => {
        return css`
            width: ${theme.fullSize + '%'};
            color: ${theme.palette.red};
            height: ${theme.errorTextHeight + 'px'};
        `
    }}
`

export const Spinner = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexRowCenter}

            height: ${theme.fullSize + 'vh'};
            width: ${theme.fullSize + '%'};
            color: ${theme.palette.common.black};

            &:after {
                content: ' ';
                width: ${theme.spinnerStyles.size + 'px'};
                height: ${theme.spinnerStyles.size + 'px'};
                border-radius: ${theme.spinnerStyles.borderRadius + '%'};
                border: ${theme.spinnerStyles.border +
                theme.palette.common.black};
                border-color: ${theme.spinnerStyles.borderColor};
                animation: ${theme.spinnerStyles.animation};
            }

            @keyframes spinner {
                0% {
                    transform: rotate(${theme.spinnerStyles.startRotate});
                }
                100% {
                    transform: rotate(${theme.spinnerStyles.endRotate});
                }
            }
        `
    }}
`

export const ProfileIcon = styled.img`
    ${({ theme }) => {
        return css`
            width: ${theme.profileIconStyles.lg.size + 'px'};
            height: ${theme.profileIconStyles.lg.size + 'px'};
            object-fit: cover;
            border-radius: ${theme.circleRadius + '%'};

            @media (${theme.media.lg}) {
                width: ${theme.profileIconStyles.md.size + 'px'};
                height: ${theme.profileIconStyles.md.size + 'px'};
            }
        `
    }}
`

export const MainPageContent = styled.section`
    ${({ theme }) => {
        return css`
            ${mixins.flexColumnCenter}

            width: ${theme.fullSize + '%'};
            max-width: ${theme.profileMainContentStyles.lg.maxWidth + 'px'};
            min-width: ${theme.profileMainContentStyles.lg.minWidth + 'px'};
            position: relative;
            border: ${theme.profileMainContentStyles.border +
            theme.palette.lineBoardColor};
            border-bottom: 0;

            @media (${theme.media.xl}) {
                min-width: ${theme.profileMainContentStyles.md.minWidth + 'px'};
            }

            @media (${theme.media.lg}) {
                min-width: 0;
            }
        `
    }}
`
