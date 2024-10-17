export interface SidebarLinkProps {
    linkData: {
        Icon: React.FunctionComponent<
            React.SVGProps<SVGSVGElement> & {
                title?: string
            }
        >
        title: string
        link: string
    }
}

export interface TitleProps {
    $isActiveLink: boolean
}
