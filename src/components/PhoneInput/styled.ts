import styled, { css } from 'styled-components'

export const InputModule = styled.input`
    ${({ theme }) => {
        return css`
            width: ${theme.fullSize + '%'};
            padding: ${theme.spaces.lg + 'px'} ${theme.spaces.md + 'px'};
            border-radius: 6px;
            border: ${theme.inputStyles.border + theme.palette.gray};
            font-size: ${theme.fontSizes.sm + 'px'};
            margin-bottom: ${theme.spaces.sm + 'px'};

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
