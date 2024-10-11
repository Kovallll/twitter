export interface Theme {
    palette: {
        common: {
            black: string
            white: string
        }
        blue: string
        lightBlue: string
        gray: string
        lightGray: string
        red: string
        green: string
        accountsBgColor: string
        searchBgColor: string
        lineBoardColor: string
    }
    boldFont: string
    fullSize: string
    circleRadius: string
    noneBorder: string
    maxWidthContent: string
    errorTextHeight: string
    buttonStyles: {
        border: string
        borderRadius: string
    }
    searchStyles: {
        zIndex: string
        maxHeight: string
    }
    tweetCreatorStyles: {
        buttonWidth: string
        spinnerHeight: string
        width: string
    }
    twittetUserContentStyles: {
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
    profileMainContentStyles: {
        border: string
        editWidth: string
        lg: {
            twitterHeaderWidth: string
            followWidth: string
            imageSize: string
            imageTop: string
            minWidth: string
            maxWidth: string
            editHeight: string
        }
        md: {
            twitterHeaderWidth: string
            followWidth: string
            imageSize: string
            imageTop: string
            minWidth: string
            editHeight: string
        }
    }
    twitterAccountStyles: {
        showHeight: string
        hideHeight: string
        transition: string
        cardWidth: string
        lg: {
            infoWidth: string
            buttonWidth: string
        }
        md: {
            infoWidth: string
            buttonWidth: string
        }
    }
    profileIconStyles: {
        lg: {
            size: string
        }
        md: {
            size: string
        }
    }
    usersStyles: {
        height: string
        rows: string
        lg: {
            cols: string
        }
        md: {
            cols: string
        }
    }
    logoStyles: {
        width: string
        height: string
    }
    headerStyles: {
        iconSize: string
    }
    googleIcon: {
        size: string
    }
    skeletonStyles: {
        titleWidth: string
        titleHeight: string
        subtitleWidth: string
        subtitleHeight: string
        textWidth: string
        textHeight: string
    }
    notifyStyles: {
        zIndex: string
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
    sidebarStyles: {
        zIndex: string
        nameWidth: string
        socialWidth: string
        iconWrapSize: string
        iconSize: string
        lg: {
            maxWidth: string
            profileImagesize: string
        }
        md: {
            maxWidth: string
            profileImagesize: string
        }
        sm: {
            maxWidth: string
            profileImagesize: string
        }
    }
    tweetImagePrewiewStyles: {
        xl: {
            width: string
            modalWidth: string
        }
        lg: {
            width: string
            modalWidth: string
            closeIconSize: string
        }
        md: {
            width: string
            modalWidth: string
            closeIconSize: string
        }
        sm: {
            width: string
            modalWidth: string
            closeIconSize: string
        }
        xs: {
            width: string
            modalWidth: string
        }
        xxs: {
            width: string
            modalWidth: string
        }
    }
    editModalStyles: {
        textWidth: string
        lg: {
            iconSize: string
        }
        md: {
            iconSize: string
        }
        sm: {
            iconSize: string
        }
    }
    toggleThemeStyles: {
        borderRadius: string
        border: string
        transition: string
        lg: {
            buttonWidth: string
            buttonHeight: string
            circleWidth: string
            circleHeight: string
            top: string
            transform: string
        }
        md: {
            buttonWidth: string
            buttonHeight: string
            circleWidth: string
            circleHeight: string
            top: string
            transform: string
        }
        sm: {
            buttonWidth: string
            buttonHeight: string
            circleWidth: string
            circleHeight: string
            top: string
            transform: string
        }
    }
    modalStyles: {
        top: string
        half: string
        zIndex: string
        borderRadius: string
        lg: {
            width: string
            topCloseButton: string
            rightCloseButton: string
            sizeCloseButton: string
            buttonWidth: string
        }
        md: {
            width: string
            topCloseButton: string
            rightCloseButton: string
            sizeCloseButton: string
            buttonWidth: string
        }
        sm: {
            width: string
            topCloseButton: string
            rightCloseButton: string
            sizeCloseButton: string
            buttonWidth: string
        }
    }
    passwordInputStyles: {
        right: string
        lg: {
            iconSize: string
            top: string
        }
        md: {
            iconSize: string
            top: string
        }
        sm: {
            iconSize: string
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
    spinnerStyles: {
        size: string
        borderRadius: string
        border: string
        borderColor: string
        animation: string
        startRotate: string
        endRotate: string
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
    tweetStyles: {
        borderBottom: string
        authorWidth: string
        socialWidth: string
        moreWidth: string
        moreHeight: string
        likeIconSize: string
        likeScale: string
        likeTransition: string
        xl: {
            width: string
            height: string
        }
        lg: {
            width: string
            height: string
        }
        md: {
            width: string
            height: string
        }
        sm: {
            width: string
            height: string
        }
        xs: {
            width: string
            height: string
        }
        xxs: {
            width: string
            height: string
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
        xxxl: string
        xxxxl: string
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
