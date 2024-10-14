import styled from 'styled-components'

import { ImagesSection } from '../styled'

import { mixins } from '@styles'

export const SkeletonImagesSection = styled(ImagesSection)`
    ${mixins.loadingAnimation}
`
