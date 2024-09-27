import styled, { createGlobalStyle, css } from 'styled-components'

import mixins from './mixins'
import { theme } from './theme'

import { ButtonProps } from '@types'

export const GlobalStyle = createGlobalStyle`
  * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'Arial', sans-serif;
        ::-webkit-scrollbar {
            height: 10px; 
            width: 10px; 
            border: 1px solid #d5d5d5;
        }
        ::-webkit-scrollbar-track {
            background: white;     
        }
        ::-webkit-scrollbar-thumb {
            background-color: blue;   
            border-radius: 20px;   
            border: 3px solid white; 
        }
    }
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
            margin-top: ${theme.spaces.xxl + 'px'};

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
        $backgroundColor = '#fff',
        $color = '#000',
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
            padding: ${theme.spaces.lg + 'px' + ' 0px'};
            margin-bottom: ${theme.spaces.xl + 'px'};
            font-size: ${theme.fontSizes.md + 'px'};
            font-weight: 700;
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
