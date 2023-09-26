import { Easing } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const AppColors = {
    white: 'white',
    appBlue: '#1B5887',
    primaryColor: '#08C9C3',
    primaryColorWithOpacity: '#08C9C380',
    transparent: 'transparent',

    primaryDark: '#2d2d30',
    appGrayDark: '#3e3e42',

    black: '#303437',
    skyDark: '#979C9E',
    appBlack: '#090A0A',
    darkBlack: '#202325',
    secondaryDark: '#6C7072',
    appBlackWithOpacity: '#090A0AB3',

    appRed: '#FF5247',
    darkRed: '#D3180C',
    lightRed: '#FFE5E5',

    appGray: '#E3E5E5',
    appGraySky: '#CDCFD0',
    appGray95: '#F2F2F2',
    appGrayLight: '#72777A',
    appGrayLighter: '#F2F4F5',
    appGrayLightest: '#F7F9FA',

    switchBackground: '#78788016',
    androidSwitchTrackColor: '#1b588770',
}

const FontSizes = {
    titleFontSize: RFValue(24),
    buttonTextFontSize: RFValue(16),
    textInputFontSize: RFValue(16),
    navBarTitle: RFValue(18)
}

const FontFamilies = {
    titleFontFamily: 'Montserrat-SemiBold',
    textFontFamily: 'Montserrat-Regular',
    textFontFamilyMedium: 'Montserrat-Medium',
    textFontFamilyLight: 'Montserrat-Light',
}

const FontWeights = {
    fontWeightThin: '100', // Thin
    fontWeightUltraLight: '200', // Ultra Light
    fontWeightLight: '300', // Light
    fontWeightRegular: '400', // Regular
    fontWeightMedium: '500', // Medium
    fontWeightSemibold: '600', // Semibold
    fontWeightBold: '700', // Bold
    fontWeightHeavy: '800', // Heavy
    fontWeightBlack: '900', // Black
}

const GlobalStyles = {
    bigTitleStyle: {
        color: AppColors.white,
        fontSize: FontSizes.titleFontSize,
        fontWeight: FontWeights.fontWeightBold
    },

    middleTitleStyle: {
        color: AppColors.white,
        fontSize: FontSizes.navBarTitle,
        fontWeight: FontWeights.fontWeightBold
    },

    navBarTitleStyle: {
        flexShrink: 1,
        color: AppColors.white,
        fontSize: FontSizes.navBarTitle,
        fontWeight: FontWeights.fontWeightRegular
    },

    inputTextStyle: {
        color: AppColors.white,
        fontSize: FontSizes.textInputFontSize,
        fontWeight: FontWeights.fontWeightRegular
    },

    buttonTextStyle: {
        fontSize: FontSizes.buttonTextFontSize,
        fontWeight: FontWeights.fontWeightMedium
    },

    // flex row direction
    flexRowDirection: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    // Direction
    center: "center",

    // Screen size
    fullSize: '100%',

    globalModalStyle: {
        paddingHorizontal: 24,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16
    },

    wrongDataContent: {
        flex: 1,
        justifyContent: 'center'
    },

    dividerStyle: {
        height: 1,
        marginVertical: 16,
        backgroundColor: AppColors.white
    }
}

const ModalAnimationConfig = {
    openAnimation: { timing: { duration: 200, easing: Easing.circle } },
    closeAnimation: { timing: { duration: 200, easing: Easing.circle } }
}

const DisabledElementOpacity = { opacity: 0.4 }

const RegularText = {
    fontFamily: FontFamilies.textFontFamily,
    fontWeight: FontWeights.fontWeightRegular
}

const MediumText = {
    fontWeight: FontWeights.fontWeightMedium,
    fontFamily: FontFamilies.textFontFamilyMedium
}

const SemiBoldText = {
    fontWeight: FontWeights.fontWeightBold,
    fontFamily: FontFamilies.titleFontFamily
}


export {
    AppColors,
    FontSizes,
    FontFamilies,
    FontWeights,
    GlobalStyles,
    ModalAnimationConfig,
    DisabledElementOpacity,
    RegularText,
    MediumText,
    SemiBoldText
};