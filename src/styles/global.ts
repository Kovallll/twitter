import styled, { createGlobalStyle, css } from 'styled-components'

import mixins from './mixins'

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
            color: ${theme.palette.text};
            background-color: ${theme.palette.bgColor};
            ::-webkit-scrollbar {
                cursor: pointer;
                height: 10px;
                width: 10px;
                border: 1px solid ${theme.palette.bgColor};
            }
            ::-webkit-scrollbar-track {
                background-color: ${theme.palette.bgColor};
                cursor: pointer;
            }
            ::-webkit-scrollbar-thumb {
                background-color: ${theme.palette.primary};
                cursor: pointer;
                border-radius: 20px;
                border: 3px solid ${theme.palette.bgColor};
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
    ${({ theme, $withBorder = false }) => {
        return css`
            ${mixins.flexRowCenter}

            background-color: ${theme.palette.common.white};
            border: ${$withBorder
                ? theme.buttonStyles.border
                : theme.noneBorder};
            border-radius: ${theme.buttonStyles.borderRadius};
            cursor: pointer;
            width: ${theme.fullSize + '%'};
            padding: ${theme.spaces.lg + 'px ' + theme.spaces.xs + 'px'};
            margin-bottom: ${theme.spaces.xl + 'px'};
            font-size: ${theme.fontSizes.md + 'px'};
            font-weight: ${theme.boldFont};

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
            color: ${theme.palette.errorColor};
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
            color: ${theme.palette.text};

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
