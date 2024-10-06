import styled, { css } from 'styled-components'

import { CloseImageProps } from './types'

export const CloseImage = styled.img<CloseImageProps>`
    ${({ $isHover }) => {
        return css`
            display: ${$isHover ? 'block' : 'none'};
            width: 16px;
            height: 16px;
            padding: 2px;
            position: absolute;
            background: #fff;
            cursor: pointer;
            border-radius: 50%;
        `
    }}
`

export const TweetImageBlock = styled.div`
    position: relative;
`

export const Image = styled.img`
    max-height: 100px;
    min-height: 36px;
    height: auto;
`
