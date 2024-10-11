import { useLocation } from 'react-router-dom'

import { navIconAltText } from '../config'
import { Icon, NavLink, Title } from './styled'
import { SidebarLinkProps } from './types'

export const SidebarLink = ({ linkData }: SidebarLinkProps) => {
    const { pathname } = useLocation()

    const { icon, link, title } = linkData

    const isActiveLink = pathname === link
    const linkIcon = isActiveLink ? icon.active : icon.default
    return (
        <NavLink to={link}>
            <Icon src={linkIcon} alt={navIconAltText} />
            <Title $isActiveLink={isActiveLink}>{title}</Title>
        </NavLink>
    )
}
