import styled from 'styled-components'

import { ImagesSection } from '../styled'

import mixins from '@styles/mixins'

export const SkeletonImagesSection = styled(ImagesSection)`
    ${mixins.loadingAnimation}
`
