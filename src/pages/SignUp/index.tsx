import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import {
    bottomLinks,
    emailSignUpText,
    googleIconAltText,
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
    LoginLink,
    Policy,
    SignEmailText,
    SignUpInfo,
    SignUpLink,
    Subtitle,
    Title,
    TopContent,
} from './styled'

import Notify from '@components/Notify'
import { images, notifyTimeout, Paths } from '@constants'
import { goggleAuth } from '@firebase'
import { useAppDispatch, useAppSelector } from '@hooks'
import { updateNotifyText } from '@store'
import { Button, Logo } from '@styles/global'
import { getNotifyError } from '@utils'

const SignUp = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { text } = useAppSelector((state) => state.notify)

    const handleGoggleAuthClick = () => {
        goggleAuth(dispatch, navigate)
    }

    useEffect(() => {
        let timeout: NodeJS.Timeout
        if (text) {
            timeout = setTimeout(() => {
                dispatch(updateNotifyText(''))
            }, notifyTimeout)
        }

        return () => clearTimeout(timeout)
    }, [dispatch, text])

    const handleEmailAndPasswordAuthClick = () => {
        navigate(Paths.SingUpCredential)
    }

    const notifyError = getNotifyError(text)
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
                            <GoogleIcon
                                src={images.googleIcon}
                                alt={googleIconAltText}
                            />
                            {googleSignUpText}
                        </Button>
                        <Button
                            onClick={handleEmailAndPasswordAuthClick}
                            $withBorder={true}
                        >
                            <SignEmailText>{emailSignUpText}</SignEmailText>
                        </Button>
                    </ButtonsBlock>
                    <Policy>
                        {policyTextPart1}
                        <SignUpLink to=""> {policyTextPart2} </SignUpLink>
                        {policyTextPart3}
                        <SignUpLink to="">{policyTextPart4}</SignUpLink>
                        {policyTextPart5}
                        <SignUpLink to=""> {policyTextPart6}</SignUpLink>
                    </Policy>
                    <Login>
                        {loginText}
                        <LoginLink to={Paths.Login}>{loginLinkText}</LoginLink>
                    </Login>
                </SignUpInfo>
            </TopContent>
            <BottomContent>
                {bottomLinks.map((link, index) => (
                    <BottomLink key={index}>{link}</BottomLink>
                ))}
            </BottomContent>
            {text !== '' && <Notify text={notifyError} />}
        </Container>
    )
}

export default SignUp
