import 'styled-components'
import { ColorTheme } from '@types'

declare module '*.svg' {
    const content: string
    export default content
}

declare module 'styled-components' {
    export interface DefaultTheme extends ColorTheme {}
}
