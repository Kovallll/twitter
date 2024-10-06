import { styled } from 'styled-components'

import mixins from '@styles/mixins'

export const ImagesSection = styled.section`
    max-height: 160px;
    width: 300px;
    background-color: gray;
`

export const ImagesRow = styled.div`
    ${mixins.flexRowSB}
`

export const Image = styled.img`
    object-fit: cover;
    width: 33%;
    height: 70px;
`
