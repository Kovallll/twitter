import { useLocation } from 'react-router-dom'

import { navIconAltText } from '../config'
import { NavLink, Title } from './styled'
import { SidebarLinkProps } from './types'

import { Themes } from '@constants'
import { useAppSelector } from '@hooks'
import { userSelector } from '@store'
import { lightTheme } from '@styles'

export const SidebarLink = ({ linkData }: SidebarLinkProps) => {
    const { pathname } = useLocation()

    const { Icon, link, title } = linkData

    const { currentTheme } = useAppSelector(userSelector)

    const isActiveLink = pathname === link
    const themeColor =
        currentTheme === Themes.Light
            ? lightTheme.palette.common.black
            : lightTheme.palette.common.white
    const iconColor = isActiveLink ? lightTheme.palette.blue : themeColor
    return (
        <NavLink to={link}>
            <Icon title={navIconAltText} fill={iconColor} />
            <Title $isActiveLink={isActiveLink}>{title}</Title>
        </NavLink>
    )
}
