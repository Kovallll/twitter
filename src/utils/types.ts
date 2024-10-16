import { Themes } from '@constants'

export interface LocalStorageSchema {
    token: { access: string } | null
    theme: Themes
}
