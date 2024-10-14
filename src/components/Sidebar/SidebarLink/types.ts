export interface SidebarLinkProps {
    linkData: {
        icon: { dark: string; light: string; active: string }
        title: string
        link: string
    }
}

export interface TitleProps {
    $isActiveLink: boolean
}
