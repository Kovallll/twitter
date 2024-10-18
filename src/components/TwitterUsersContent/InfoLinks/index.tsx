import { Container, InfoLink } from './styled'

import { bottomLinks } from '@pages/SignUp/config'

export const InfoLinks = () => {
    return (
        <Container>
            {bottomLinks.map((link, index) => (
                <InfoLink key={index}>{link}</InfoLink>
            ))}
        </Container>
    )
}
