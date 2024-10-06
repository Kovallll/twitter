import styled, { css } from 'styled-components'

import { Button } from '@styles/global'
import mixins from '@styles/mixins'

export const ProfileIcon = styled.img`
    ${({}) => {
        return css`
            width: 64px;
            height: 64px;
            object-fit: cover;
            border-radius: 50%;
        `
    }}
`

export const TweetButtonBlock = styled.div`
    ${({}) => {
        return css`
            ${mixins.flexColumnEnd}
            width: 120px;
            height: 100px;
        `
    }}
`
export const TweetButton = styled(Button)`
    ${({ theme }) => {
        return css`
            margin-bottom: 0;
            padding: ${theme.spaces.md + 'px' + ' 0px'};

            @media (${theme.media.lg}) {
                padding: ${theme.spaces.sm + 'px' + ' 0px'};
            }
        `
    }}
`

export const TweetCreatorBlock = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexRowSB}

            width: ${theme.fullSize + '%'};
            border-top: 1px solid #d8d8d8;
            border-bottom: 1px solid #d8d8d8;
            padding: 20px;
        `
    }}
`
