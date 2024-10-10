import styled, { css } from 'styled-components'

export const Container = styled.div`
    ${({ theme }) => {
        return css`
            position: relative;
            width: ${theme.fullSize + '%'};
        `
    }}
`
