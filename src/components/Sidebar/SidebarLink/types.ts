export interface SidebarLinkProps {
    linkData: {
        icon: { default: string; active: string }
        title: string
        link: string
    }
}

export interface TitleProps {
    $isActiveLink: boolean
}
