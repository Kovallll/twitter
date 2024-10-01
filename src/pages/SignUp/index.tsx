import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import {
    bottomLinks,
    emailSignUpText,
    googleSignUpText,
    loginLinkText,
    loginText,
    logoAltText,
    policyTextPart1,
    policyTextPart2,
    policyTextPart3,
    policyTextPart4,
    policyTextPart5,
    policyTextPart6,
    subtitle,
    title,
    twitterImageAltText,
} from './config'
import {
    BottomContent,
    BottomLink,
    ButtonsBlock,
    Container,
    GoogleIcon,
    Image,
    Login,
    Policy,
    SignUpInfo,
    SingUpLink,
    Subtitle,
    Title,
    TopContent,
} from './styled'

import Notify from '@components/Notify'
import { images, notifyTimeout, Paths } from '@constants'
import { goggleAuth } from '@firebase'
import { useAppDispatch, useAppSelector } from '@hooks'
import { updateSignUpError } from '@store'
import { Button, LinkStyle, Logo } from '@styles/global'
import { getNotifyError } from '@utils'

const SignUp = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { error } = useAppSelector((state) => state.signUp)

    const handleGoggleAuthClick = () => {
        goggleAuth(dispatch, navigate)
    }

    useEffect(() => {
        let timeout: NodeJS.Timeout
        if (error) {
            timeout = setTimeout(() => {
                dispatch(updateSignUpError(''))
            }, notifyTimeout)
        }

        return () => clearTimeout(timeout)
    }, [dispatch, error])

    const handleEmailAndPasswordAuthClick = () => {
        navigate(Paths.SingUpCredential)
    }

    const notifyError = getNotifyError(error)
    return (
        <Container>
            <TopContent>
                <Image src={images.twitterImage} alt={twitterImageAltText} />
                <SignUpInfo>
                    <Logo src={images.logoIcon} alt={logoAltText} />
                    <Title>{title}</Title>
                    <Subtitle>{subtitle}</Subtitle>
                    <ButtonsBlock>
                        <Button
                            $withBorder={true}
                            onClick={handleGoggleAuthClick}
                        >
                            <GoogleIcon src={images.googleIcon} />
                            {googleSignUpText}
                        </Button>
                        <Button
                            onClick={handleEmailAndPasswordAuthClick}
                            $withBorder={true}
                        >
                            {emailSignUpText}
                        </Button>
                    </ButtonsBlock>
                    <Policy>
                        {policyTextPart1}
                        <SingUpLink> {policyTextPart2} </SingUpLink>
                        {policyTextPart3}
                        <SingUpLink>{policyTextPart4}</SingUpLink>
                        {policyTextPart5}
                        <SingUpLink> {policyTextPart6}</SingUpLink>
                    </Policy>
                    <Login>
                        {loginText}
                        <Link style={LinkStyle} to={Paths.Login}>
                            {loginLinkText}
                        </Link>
                    </Login>
                </SignUpInfo>
            </TopContent>
            <BottomContent>
                {bottomLinks.map((link, index) => (
                    <BottomLink key={index}>{link}</BottomLink>
                ))}
            </BottomContent>
            {error !== '' && <Notify error={notifyError} />}
        </Container>
    )
}

export default SignUp
