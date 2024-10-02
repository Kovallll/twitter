import { memo } from 'react'

import { NotifyModule } from './styled'
import { NotifyProps } from './types'

const Notify = ({ error }: NotifyProps) => {
    return <NotifyModule>{error}</NotifyModule>
}

export default memo(Notify)
