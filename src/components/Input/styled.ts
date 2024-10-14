import styled, { css } from 'styled-components'

export const Wrap = styled.div`
    position: relative;
`

export const InputModule = styled.input`
    ${({ theme }) => {
        return css`
            width: ${theme.fullSize + '%'};
            padding: ${theme.spaces.lg + 'px'} ${theme.spaces.md + 'px'};
            border-radius: ${theme.spaces.sm + 'px'};
            border: ${theme.inputStyles.border + theme.palette.gray};
            font-size: ${theme.fontSizes.sm + 'px'};
            margin-bottom: ${theme.spaces.sm + 'px'};
            background-color: ${theme.palette.inputBgColor};
            color: ${theme.palette.textColor};

            @media (${theme.media.md}) {
                padding: ${theme.spaces.md + 'px'} ${theme.spaces.sm + 'px'};
                font-size: ${theme.fontSizes.xs + 'px'};
            }

            @media (${theme.media.sm}) {
                margin-bottom: ${theme.spaces.xs + 'px'};
            }
        `
    }}
`

export const LettersCount = styled.p`
    ${({ theme }) => {
        return css`
            position: absolute;
            top: 0;
            right: ${theme.spaces.sm + 'px'};
            color: ${theme.palette.lightBlue};
            font-size: ${theme.fontSizes.xs + 'px'};

            @media (${theme.media.md}) {
                font-size: ${theme.fontSizes.xxs + 'px'};
            }

            @media (${theme.media.sm}) {
                right: ${theme.spaces.xs + 'px'};
            }
        `
    }}
`
