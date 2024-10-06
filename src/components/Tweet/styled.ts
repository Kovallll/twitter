import styled, { css } from 'styled-components'

import mixins from '@styles/mixins'

export const TweetArticle = styled.article`
    ${mixins.flexColumnStart}
    padding: 16px 32px;
`

export const TweetAuthor = styled.p`
    ${({ theme }) => {
        return css`
            font-weight: 700;
            font-size: ${theme.fontSizes.md + 'px'};
            margin-right: 4px;
        `
    }}
`

export const TweetSocial = styled.p`
    margin-right: 4px;
`

export const TweetText = styled.p``

export const TweetDate = styled.p``

export const TweetImages = styled.div``

export const InfoBlock = styled.div`
    ${mixins.flexColumnStart}
    width: 100%;
`

export const TopInfoBlock = styled.div`
    ${mixins.flexRowCenter}
    margin-bottom: 4px;
`

export const ProfileIcon = styled.img`
    ${({}) => {
        return css`
            width: 64px;
            height: 64px;
            object-fit: cover;
            border-radius: 50%;
            margin-right: 16px;
        `
    }}
`

export const TweetInfoBlock = styled.div`
    ${mixins.flexRowCenter}
    margin-bottom: 12px;
    width: 100%;
`

export const TweetImageBlock = styled.div`
    ${mixins.flexColumnCenter}
    width: 100%;
`

export const MoreBlock = styled.div`
    ${mixins.flexRowCenter}
    position: relative;
    cursor: pointer;
    width: 40px;
    height: 30px;
`

export const MorePopup = styled.div`
    position: absolute;
    top: 30px;
    background-color: #eed;
    padding: 8px;
`

export const DeleteOption = styled.p`
    color: red;
`

export const MoreIcon = styled.img``

export const TweetImage = styled.img`
    max-height: 500px;
    border-radius: 16px;
    margin-bottom: 8px;
`
