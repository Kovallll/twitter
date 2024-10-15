import styled, { css } from 'styled-components'

import { TweetCreatorBlockProps } from './types'

import { mixins, ProfileIcon } from '@styles'

export const TweetIcon = styled(ProfileIcon)`
    ${({ theme }) => {
        return css`
            margin-right: ${theme.spaces.sm + 'px'};
            position: absolute;
            top: ${theme.spaces.sm + 'px'};
            left: ${theme.spaces.sm + 'px'};
        `
    }}
`

export const ImageWrap = styled.div`
    ${({ theme }) => {
        return css`
            min-width: ${theme.profileIconStyles.lg.size + 'px'};
            height: ${theme.profileIconStyles.lg.size + 'px'};
        `
    }}
`

export const TweetButtonBlock = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexColumnEnd}

            width: ${theme.tweetCreatorStyles.buttonWidth + 'px'};
        `
    }}
`

export const TweetCreatorBlock = styled.div<TweetCreatorBlockProps>`
    ${({ theme, $isModal }) => {
        return css`
            ${mixins.flexRowSB}

            position: relative;
            width: ${theme.fullSize + '%'};
            border-top: ${$isModal ? '0' : '1px solid #d8d8d8'};
            border-bottom: ${$isModal ? '0' : '1px solid #d8d8d8'};
            padding: ${theme.spaces.xl + 'px'};

            @media (${theme.media.md}) {
                padding: ${theme.spaces.lg + 'px'};
            }

            @media (${theme.media.sm}) {
                padding: ${theme.spaces.md + 'px'};
            }

            @media (${theme.media.xs}) {
                padding: ${theme.spaces.sm + 'px'};
            }
        `
    }}
`

export const TopContent = styled.div`
    ${mixins.flexRowSB}
`

export const BottomContent = styled.div`
    ${mixins.flexRowSB}
`
