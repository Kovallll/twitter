export interface Theme {
    palette: {
        common: {
            black: string
            white: string
        }
        blue: string
        lightBlue: string
        gray: string
        red: string
        errorColor: string
    }
    boldFont: string
    fullSize: string
    noneBorder: string
    maxWidthContent: string
    buttonStyles: {
        border: string
        borderRadius: string
    }
    logoStyles: {
        width: string
        height: string
    }
    googleIcon: {
        size: string
    }
    notifyStyles: {
        borderRadius: string
        lg: {
            top: string
            right: string
            paddingTB: string
            paddingLR: string
        }
        md: {
            top: string
            right: string
            paddingTB: string
            paddingLR: string
        }
        sm: {
            top: string
            right: string
            paddingTB: string
            paddingLR: string
        }
    }
    modalStyles: {
        wrapWidth: string
        borderRadius: string
        lg: {
            width: string
            topCloseButton: string
            rightCloseButton: string
            sizeCloseButton: string
            top: string
        }
        md: {
            width: string
            topCloseButton: string
            rightCloseButton: string
            sizeCloseButton: string
            top: string
        }
        sm: {
            width: string
            topCloseButton: string
            rightCloseButton: string
            sizeCloseButton: string
            top: string
        }
    }
    selectStyles: {
        border: string
        borderRadius: string
        halfWidth: string
        lg: {
            marginRight: string
            padding: string
        }
        md: {
            marginRight: string
            padding: string
        }
        sm: {
            marginRight: string
            padding: string
        }
    }
    inputStyles: {
        border: string
    }
    loginStyles: {
        margin: string
        marginTop: string
        lg: {
            width: string
        }
        md: {
            width: string
        }
        sm: {
            width: string
        }
    }
    signUpStyles: {
        margin: string
        marginTop: string
        lg: {
            width: string
            signEmailPadding: string
        }
        md: {
            width: string
            signEmailPadding: string
        }
        sm: {
            width: string
            signEmailPadding: string
        }
    }
    buttonsBlock: {
        lg: {
            width: string
        }
        md: {
            width: string
        }
        sm: {
            width: string
        }
    }
    policyStyles: {
        lg: {
            width: string
        }
        md: {
            width: string
        }
        sm: {
            width: string
        }
    }
    logoImageStyles: {
        maxHeight: string
        defaultHeigth: string
        width: string
        marginBottom: string
        lg: {
            marginLeft: string
        }
        md: {
            marginLeft: string
        }
        sm: {
            marginLeft: string
        }
    }
    bottomLinksStyle: {
        lg: {
            maxWidth: string
        }
        md: {
            maxWidth: string
        }
        sm: {
            maxWidth: string
        }
    }
    spaces: {
        xxs: string
        xs: string
        sm: string
        md: string
        lg: string
        xl: string
        xxl: string
    }
    fontSizes: {
        xxs: string
        xs: string
        sm: string
        md: string
        lg: string
        xl: string
        xxl: string
    }
    media: {
        xl: string
        lg: string
        md: string
        sm: string
        xs: string
        xxs: string
    }
}
