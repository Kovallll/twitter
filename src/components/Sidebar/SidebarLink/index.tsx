import { useLocation } from 'react-router-dom'

import { navIconAltText } from '../config'
import { Icon, NavLink, Title } from './styled'
import { SidebarLinkProps } from './types'

import { useAppSelector } from '@hooks'
import { userSelector } from '@store'
import { getIsLightTheme } from '@utils'

export const SidebarLink = ({ linkData }: SidebarLinkProps) => {
    const { pathname } = useLocation()

    const { icon, link, title } = linkData

    const { theme } = useAppSelector(userSelector)

    const isActiveLink = pathname === link
    const themeIcon = getIsLightTheme(theme) ? icon.light : icon.dark
    const linkIcon = isActiveLink ? icon.active : themeIcon
    return (
        <NavLink to={link}>
            <Icon src={linkIcon} alt={navIconAltText} />
            <Title $isActiveLink={isActiveLink}>{title}</Title>
        </NavLink>
    )
}
