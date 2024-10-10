import { useState } from 'react'

import { navIconAltText } from '../config'
import { Icon, NavLink, Title } from './styled'
import { SidebarLinkProps } from './types'

export const SidebarLink = ({ linkData }: SidebarLinkProps) => {
    const [isActiveLink, setIsActiveLink] = useState(false)

    const { icon, link, title } = linkData
    console.log(isActiveLink, 'isActiveLink', link)
    const hadnleClickLink = () => {
        setIsActiveLink((prev) => !prev)
    }

    return (
        <NavLink to={link} onClick={hadnleClickLink}>
            <Icon src={icon} alt={navIconAltText} />
            <Title $isActiveLink={isActiveLink}>{title}</Title>
        </NavLink>
    )
}
