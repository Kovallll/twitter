import styled, { css } from 'styled-components'

import mixins from '@styles/mixins'

export const Container = styled.main`
    ${({}) => {
        return css`
            ${mixins.flexRowCenter}

            align-items: start;
        `
    }}
`

export const SidebarWrap = styled.div`
    ${({}) => {
        return css`
            ${mixins.flexColumnCenter}

            min-width: 320px;
            height: 100%;
        `
    }}
`
