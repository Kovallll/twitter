import styled, { css } from 'styled-components'

import mixins from '@styles/mixins'

export const Container = styled.div`
    ${mixins.flexRowCenter}
`

export const Content = styled.div`
    ${({ theme }) => {
        return css`
            max-width: ${theme.maxWidthContent + 'px'};
            width: ${theme.fullSize + '%'};
        `
    }}
`
