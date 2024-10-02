import { Theme } from '@types'

export const theme: Theme = {
    palette: {
        common: {
            black: '#000',
            white: '#fff',
        },
        blue: '#1D9BF0',
        lightBlue: '#1DA1F2',
        gray: '#536471',
        red: '#ef1c5c',
        errorColor: '#ff0000',
    },
    fullSize: '100',
    boldFont: '700',
    maxWidthContent: '1920',
    noneBorder: '0',
    buttonStyles: {
        border: '1px solid #e4eaed',
        borderRadius: '24px',
    },
    logoStyles: {
        height: '40',
        width: '40',
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
    modalStyles: {
        wrapWidth: '80',
        borderRadius: '16',
        lg: {
            width: '540',
            topCloseButton: '16',
            rightCloseButton: '16',
            sizeCloseButton: '40',
            top: '120',
        },
        md: {
            width: '440',
            topCloseButton: '12',
            rightCloseButton: '12',
            sizeCloseButton: '32',
            top: '100',
        },
        sm: {
            width: '340',
            topCloseButton: '8',
            rightCloseButton: '8',
            sizeCloseButton: '28',
            top: '80',
        },
    },
    googleIcon: {
        size: '32',
    },
    notifyStyles: {
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
        xxl: '48',
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
        lg: 'max-width: 1300px',
        md: 'max-width: 1200px',
        sm: 'max-width: 1000px',
        xs: 'max-width: 768px',
        xxs: 'max-width: 560px',
    },
}
