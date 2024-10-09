import { Theme } from '@types'

export const theme: Theme = {
    palette: {
        common: {
            black: '#000',
            white: '#fff',
        },
        blue: '#1D9BF0',
        lightBlue: '#01C4F2',
        gray: '#B3B8BB',
        lightGray: '#e6e6e6',
        red: '#ef1c5c',
        errorColor: '#ff0000',
        accountsBgColor: '#f7f9f9',
        successColor: '#6EC207',
        searchBgColor: '#eff3f4',
        lineBoardColor: '#d8d8d8',
    },
    fullSize: '100',
    boldFont: '700',
    circleRadius: '50',
    maxWidthContent: '1920',
    noneBorder: '0',
    errorTextHeight: '20',
    buttonStyles: {
        border: '1px solid #e4eaed',
        borderRadius: '24px',
    },
    logoStyles: {
        height: '40',
        width: '40',
    },
    searchStyles: {
        zIndex: '10',
        maxHeight: '320',
    },
    profileIconStyles: {
        lg: {
            size: '64',
        },
        md: {
            size: '48',
        },
    },
    tweetCreatorStyles: {
        buttonWidth: '100',
        spinnerHeight: '100',
        width: '90',
    },
    twitterAccountStyles: {
        showHeight: '600',
        hideHeight: '200',
        transition: 'max-height 0.3s ease',
        cardWidth: '100',
        lg: {
            infoWidth: '130',
            buttonWidth: '100',
        },
        md: {
            infoWidth: '80',
            buttonWidth: '80',
        },
    },
    twittetUserContentStyles: {
        lg: {
            width: '380',
        },
        md: {
            width: '280',
        },
        sm: {
            width: '220',
        },
    },
    profileMainContentStyles: {
        border: '1px solid',
        editWidth: '140',
        lg: {
            twitterHeaderWidth: '300',
            followWidth: '200',
            imageSize: '120',
            imageTop: '70',
            maxWidth: '1200',
        },
        md: {
            twitterHeaderWidth: '200',
            followWidth: '160',
            imageSize: '100',
            imageTop: '60',
            maxWidth: '800',
        },
        sm: {
            maxWidth: '600',
        },
    },
    usersStyles: {
        height: '200',
        rows: '2',
        lg: {
            cols: '3',
        },
        md: {
            cols: '2',
        },
    },
    loginStyles: {
        margin: '20',
        marginTop: '60',
        lg: {
            width: '660',
        },
        md: {
            width: '460',
        },
        sm: {
            width: '360',
        },
    },
    headerStyles: {
        iconSize: '48',
    },
    skeletonStyles: {
        titleWidth: '120',
        titleHeight: '12',
        subtitleWidth: '80',
        subtitleHeight: '8',
        textWidth: '200',
        textHeight: '12',
    },
    sidebarStyles: {
        zIndex: '10',
        nameWidth: '120',
        socialWidth: '100',
        iconWrapSize: '48',
        iconSize: '16',
        lg: {
            maxWidth: '240',
            profileImagesize: '48',
        },
        md: {
            maxWidth: '200',
            profileImagesize: '40',
        },
        sm: {
            maxWidth: '80',
            profileImagesize: '32',
        },
    },
    passwordInputStyles: {
        right: '12',
        lg: {
            iconSize: '32',
            top: '40',
        },
        md: {
            iconSize: '28',
            top: '46',
        },
        sm: {
            iconSize: '24',
            top: '48',
        },
    },
    signUpStyles: {
        marginTop: '40',
        margin: '20',
        lg: {
            width: '960',
            signEmailPadding: '4.4',
        },
        md: {
            width: '760',
            signEmailPadding: '5.6',
        },
        sm: {
            width: '460',
            signEmailPadding: '6.8',
        },
    },
    spinnerStyles: {
        size: '64',
        borderRadius: '50',
        border: '6px solid',
        borderColor: 'currentColor transparent currentColor transparent',
        animation: 'spinner 1.4s linear infinite',
        startRotate: '0deg',
        endRotate: '360deg',
    },
    modalStyles: {
        borderRadius: '16',
        zIndex: '10',
        top: '30',
        half: '50',
        lg: {
            width: '540',
            topCloseButton: '16',
            rightCloseButton: '16',
            sizeCloseButton: '40',
        },
        md: {
            width: '440',
            topCloseButton: '12',
            rightCloseButton: '12',
            sizeCloseButton: '32',
        },
        sm: {
            width: '340',
            topCloseButton: '8',
            rightCloseButton: '8',
            sizeCloseButton: '28',
        },
    },
    googleIcon: {
        size: '32',
    },
    notifyStyles: {
        zIndex: '10',
        borderRadius: '16',
        lg: {
            top: '40',
            right: '20',
            paddingTB: '20',
            paddingLR: '120',
        },
        md: {
            top: '30',
            right: '16',
            paddingTB: '16',
            paddingLR: '80',
        },
        sm: {
            top: '20',
            right: '12',
            paddingTB: '8',
            paddingLR: '60',
        },
    },
    selectStyles: {
        border: '1px solid',
        borderRadius: '8',
        halfWidth: '50',
        lg: {
            marginRight: '24',
            padding: '20',
        },
        md: {
            marginRight: '20',
            padding: '16',
        },
        sm: {
            marginRight: '16',
            padding: '12',
        },
    },
    inputStyles: {
        border: '1px solid',
    },
    policyStyles: {
        lg: {
            width: '500',
        },
        md: {
            width: '400',
        },
        sm: {
            width: '300',
        },
    },
    buttonsBlock: {
        lg: {
            width: '400',
        },
        md: {
            width: '320',
        },
        sm: {
            width: '280',
        },
    },
    logoImageStyles: {
        maxHeight: '870',
        defaultHeigth: '91vh',
        width: '60',
        marginBottom: '16',
        lg: {
            marginLeft: '48',
        },
        md: {
            marginLeft: '36',
        },
        sm: {
            marginLeft: '24',
        },
    },
    toggleThemeStyles: {
        borderRadius: '30',
        border: '1px solid',
        transition: 'transform 0.25s',
        lg: {
            buttonWidth: '60',
            buttonHeight: '30',
            circleWidth: '25',
            circleHeight: '24',
            top: '1.5',
            transform: '-28',
        },
        md: {
            buttonWidth: '50',
            buttonHeight: '25',
            circleWidth: '20',
            circleHeight: '20',
            top: '1',
            transform: '-23',
        },
        sm: {
            buttonWidth: '40',
            buttonHeight: '20',
            circleWidth: '14',
            circleHeight: '14',
            top: '1',
            transform: '-19',
        },
    },
    tweetStyles: {
        borderBottom: '1px solid',
        authorWidth: '100',
        socialWidth: '60',
        moreWidth: '40',
        moreHeight: '30',
        likeIconSize: '20',
        likeScale: '1.4',
        likeTransition: 'transform 0.1s ease',
        xl: {
            width: '800',
            height: '400',
        },
        lg: {
            width: '720',
            height: '360',
        },
        md: {
            width: '660',
            height: '330',
        },
        sm: {
            width: '600',
            height: '300',
        },
        xs: {
            width: '472',
            height: '236',
        },
        xxs: {
            width: '360',
            height: '180',
        },
    },
    tweetImagePrewiewStyles: {
        xl: {
            width: '760',
            modalWidth: '440',
        },
        lg: {
            width: '680',
            modalWidth: '440',
            closeIconSize: '32',
        },
        md: {
            width: '620',
            modalWidth: '400',
            closeIconSize: '24',
        },
        sm: {
            width: '560',
            modalWidth: '340',
            closeIconSize: '16',
        },
        xs: {
            width: '400',
            modalWidth: '250',
        },
        xxs: {
            width: '280',
            modalWidth: '210',
        },
    },
    editModalStyles: {
        textWidth: '120',
        lg: {
            iconSize: '120',
        },
        md: {
            iconSize: '100',
        },
        sm: {
            iconSize: '90',
        },
    },
    bottomLinksStyle: {
        lg: {
            maxWidth: '1160',
        },
        md: {
            maxWidth: '940',
        },
        sm: {
            maxWidth: '760',
        },
    },
    spaces: {
        xxs: '2',
        xs: '4',
        sm: '8',
        md: '12',
        lg: '16',
        xl: '24',
        xxl: '32',
        xxxl: '48',
        xxxxl: '72',
    },
    fontSizes: {
        xxs: '14',
        xs: '16',
        sm: '18',
        md: '20',
        lg: '24',
        xl: '42',
        xxl: '84',
    },
    media: {
        xl: 'max-width: 1660px',
        lg: 'max-width: 1400px',
        md: 'max-width: 1200px',
        sm: 'max-width: 1000px',
        xs: 'max-width: 768px',
        xxs: 'max-width: 560px',
    },
}
