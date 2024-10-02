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

            width: 420px;
        `
    }}
`

export const ProfileContent = styled.section`
    ${({ theme }) => {
        return css`
            ${mixins.flexColumnCenter}

            width: ${theme.fullSize + '%'};
            position: relative;
        `
    }}
`

export const ProfileHeader = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexRowSB}

            width: ${theme.fullSize + '%'};
        `
    }}
`

export const Image = styled.img`
    ${({ theme }) => {
        return css`
            width: ${theme.fullSize + '%'};
        `
    }}
`

export const ProfileInfo = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexRowSB}

            width: ${theme.fullSize + '%'};
        `
    }}
`

export const TweetCreatorBlock = styled.div``

export const TweetInput = styled.input``

export const HeaderTextBlock = styled.div``

export const HeaderTitle = styled.p``

export const HeaderSubtitle = styled.p``

export const InfoBlock = styled.div``

export const ProfileImage = styled.img`
    ${({}) => {
        return css`
            position: absolute;
            top: 280px;
        `
    }}
`

export const ProfileName = styled.p`
    ${({ theme }) => {
        return css`
            margin-top: 90px;
            margin-bottom: ${theme.spaces.xs + 'px'};
            font-size: ${theme.fontSizes.lg + 'px'};
            font-weight: 700;
        `
    }}
`

export const ProfileSocial = styled.p`
    ${({ theme }) => {
        return css`
            font-size: ${theme.fontSizes.xs + 'px'};
            margin-bottom: ${theme.spaces.lg + 'px'};
        `
    }}
`

export const ProfileDescription = styled.p`
    ${({ theme }) => {
        return css`
            font-size: ${theme.fontSizes.sm + 'px'};
            margin-bottom: ${theme.spaces.xxxl + 'px'};
        `
    }}
`

export const ProfileFollowBlock = styled.div`
    ${mixins.flexRowSB}
`

export const Following = styled.p``

export const Followers = styled.p``

export const EditBlock = styled.div`
    ${({}) => {
        return css`
            ${mixins.flexRowCenter}
            align-items: start;

            height: 120px;
            width: 140px;
        `
    }}
`

export const ProfileIcon = styled.img`
    ${({}) => {
        return css`
            width: 64px;
            height: 64px;
        `
    }}
`

export const TweetButtonBlock = styled.div`
    ${({}) => {
        return css`
            width: 120px;
        `
    }}
`

export const TweetBox = styled.div``

export const SearchBar = styled.div`
    width: 564px;
`
