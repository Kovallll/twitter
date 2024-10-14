import { UserData } from '@types'

export interface HeaderContentProps {
    user: UserData
    handleClickProfileIcon: () => void
    title?: string
}
