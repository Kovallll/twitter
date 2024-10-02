import { Outlet } from 'react-router-dom'
import { setupFirebase } from 'firebase.config'

import { Container, Content } from './styled'

const RootRoute = () => {
    setupFirebase()

    return (
        <Container>
            <Content>
                <Outlet />
            </Content>
        </Container>
    )
}

export default RootRoute
