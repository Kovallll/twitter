import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from 'firebase.config'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

import {
    bottomLinks,
    emailSignUpText,
    googleSignUpText,
    loginLinkText,
    loginText,
    logoAltText,
    policyText,
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
    Subtitle,
    Title,
    TopContent,
} from './styled'

import googleIcon from '@assets/icons/googleIcon.svg'
import logo from '@assets/icons/twitterLogo.svg'
import twitterImage from '@assets/images/signupTwitter.png'
import { Notify } from '@components/Notify'
import { notifyTimeout, Paths } from '@constants'
import { useAppDispatch, useAppSelector } from '@hooks'
import { updateSignUpError } from '@store'
import { Button, LinkStyle, Logo } from '@styles/global'

const SignUp = () => {
    const provider = new GoogleAuthProvider()
    const auth = useAuth()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { error } = useAppSelector((state) => state.signUp)

    const handleGoggleAuthClick = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user
                if (user.emailVerified) {
                    navigate(Paths.Profile)
                }
            })
            .catch((error) => {
                const errorCode = error.code
                dispatch(updateSignUpError(errorCode))
                const timeout = setTimeout(() => {
                    dispatch(updateSignUpError(''))
                    clearTimeout(timeout)
                }, notifyTimeout)
            })
    }

    const handleEmailAndPasswordAuthClick = () => {
        navigate(Paths.SingUpCredential)
    }

    return (
        <Container>
            <TopContent>
                <Image src={twitterImage} alt={twitterImageAltText} />
                <SignUpInfo>
                    <Logo src={logo} alt={logoAltText} />
                    <Title>{title}</Title>
                    <Subtitle>{subtitle}</Subtitle>
                    <ButtonsBlock>
                        <Button
                            $withBorder={true}
                            onClick={handleGoggleAuthClick}
                        >
                            <GoogleIcon src={googleIcon} />
                            {googleSignUpText}
                        </Button>
                        <Button
                            onClick={handleEmailAndPasswordAuthClick}
                            $withBorder={true}
                        >
                            {emailSignUpText}
                        </Button>
                    </ButtonsBlock>
                    <Policy>{policyText.map((item) => item)}</Policy>
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
            {error !== '' && <Notify error={error} />}
        </Container>
    )
}

export default SignUp
