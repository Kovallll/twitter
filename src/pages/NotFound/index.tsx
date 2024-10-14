import { useNavigate } from 'react-router-dom'

import { backText, title } from './config'
import { BackButton, Container, Content, Title } from './styled'

const NotFound = () => {
    const navigate = useNavigate()

    const handleClickBackButton = () => {
        navigate(-1)
    }

    return (
        <Container>
            <Content>
                <Title>{title}</Title>
                <BackButton onClick={handleClickBackButton}>
                    {backText}
                </BackButton>
            </Content>
        </Container>
    )
}

export default NotFound
