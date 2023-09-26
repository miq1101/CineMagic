import { Platform, Dimensions, NativeModules } from "react-native";
const { StatusBarManager } = NativeModules;

const PlatformType = {
    ios: 'ios',
    android: 'android'
}

const BottomTabBarTexts = {
    home: 'Home',
    search: 'Search',
    favorites: 'Favorites',
    profile: 'Profile',
    tabNavigator: 'TabNavigator',
    tabNavigatorStack: 'TabNavigatorStack',
}

const Routes = {
    signIn: 'SignIn',
    homeStack: 'HomeStack',
    movieDetails: 'MovieDetails',
}

const AsyncStorageKeys = {
    user: 'user',
    language: 'language',
    favoritesList: 'favoritesList'
}

const UserInputFields = {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email'
}

const Env = {
    platform: 'platform',
    staging: 'staging',
    integration: 'integration',
    localhost: 'localhost'
}

const LanguagesNames = {
    en: "English",
    ru: "Русский",
}

const I18nLanguagesNames = {
    en: "en-US",
    ru: "ru-RU",
}

const I18nRTLLanguagesNames = {
    he: "he",
    ar: "ar"
}

const ErrorNames = {
    genericError: 'genericError'
}

const Endpoints = {
    popularMovies: '/movie/popular',
    upcomingMovies: 'movie/upcoming',
    popularActors: '/trending/person/week',
    topRated: '/movie/top_rated',
    movieDetails: '/movie/%S',
    movieCredits: '/movie/%S/credits',
    similarMovies: '/movie/%S/similar',
}

const RequestTimeout = { timeout: 100000 }

const PermissionsState = {
    never: 'never',
    true: 'true',
    false: 'false',
    fromScan: 'fromScan'
}

const ApplicationState = {
    background: 'background',
    active: 'active',
    inactive: 'inactive'
}

const Stores = {
    googlePlay: 'Google Play',
    appStore: 'App Store'
}

const Position = {
    top: 'top',
    bottom: 'bottom',
    left: 'left',
    right: 'right'
}

const Typeof = {
    number: 'number',
    object: 'object',
    string: 'string',
    boolean: 'boolean'
}

const IosDefaultStatusBarHeight = 20;
const IosDefaultHomeIndicatorHeight = 34;
const DEVICE_SETTINGS = {
    statusBarHeight: Platform.OS === PlatformType.ios ? StatusBarManager.HEIGHT : 0,
    isIphoneWithMonobrow: Platform.OS === PlatformType.ios && StatusBarManager.HEIGHT > IosDefaultStatusBarHeight,
    homeIndicatorHeight: Platform.OS === PlatformType.ios && StatusBarManager.HEIGHT > IosDefaultStatusBarHeight ? IosDefaultHomeIndicatorHeight : 0,
    screenWidth: Dimensions.get('screen').width,
    windowWidth: Dimensions.get('window').width,
    screenHeight: Dimensions.get('screen').height,
    windowHeight: Dimensions.get('window').height,
    isIOS: Platform.OS === PlatformType.ios,
    isAndroid: Platform.OS === PlatformType.android
}

const Validations = {
    email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
}

const EnvPrefix = {
    prod: 'prod',
    stage: 'stage'
}

const LanguageNSKeys = {
    date: 'date',
    wrongData: 'wrongData',
    myProfile: 'myProfile',
    movieDetails: 'movieDetails',
    authorization: 'authorization',
    bottomNavigationScreens: 'bottomNavigationScreens'
}

const DisabledElementOpacity = { opacity: 0.4 }

// const CreateAccountInputFields = {
//     fullName: 'fullName',
//     email: 'email',
//     password: 'password',
//     confirmPassword: 'confirmPassword',
// }

// const SignInInputFields = {
//     email: 'email',
//     password: 'password'
// }

// const ForgotPasswordInputFields = {
//     email: "email"
// }

// const ResetPasswordInputFields = {
//     newPassword: 'newPassword',
//     confirmPassword: 'confirmPassword'
// }

// const ChangePasswordInputFields = {
//     oldPassword: 'oldPassword',
//     newPassword: 'newPassword',
//     confirmPassword: 'confirmPassword'
// }

const ApiResponseStatuses = {
    forbidden: 403,
    unauthorized: 401
}

const MyProfileListItems = {
    editProfile: 'editProfile',
}

// const EditProfileListItems = {
//     changePassword: 'changePassword'
// }


const Listeners = {
    focus: 'focus',
    blur: 'blur',
    beforeRemove: 'beforeRemove',
    hardwareBackPress: 'hardwareBackPress'
}

const KeyboardTypes = {
    default: 'default',
    number: 'number-pad,',
    email: 'email-address'
}

const Animations = {
    default: 'default',
    fade: 'fade',
    flip: 'flip',
    simplePush: 'simple_push',
    slideFromBottom: 'slide_from_bottom',
    slideFromRight: 'slide_from_right',
    slideFromLeft: 'slide_from_left',
    none: 'none'
}

// const RealmSchemeNames = {
//    WILL_BE added in the future
// }

//    WILL_BE added in the future
const AnalyticsKeys = {
    login: 'login',
    addFavorite: 'add_favorite'
}
//    WILL_BE added in the future
const AnalyticsCustomDimensions = {
    userID: 'userID',
    createdAt: 'createdAt',
    favoriteUrl: 'favoriteUrl'
}

const UserGuest = 'guest';

export {
    Routes,
    BottomTabBarTexts,
    AsyncStorageKeys,
    UserInputFields,
    PlatformType,
    LanguagesNames,
    I18nLanguagesNames,
    I18nRTLLanguagesNames,
    Env,
    ErrorNames,
    Endpoints,
    RequestTimeout,
    PermissionsState,
    ApplicationState,
    Stores,
    Position,
    Typeof,
    DEVICE_SETTINGS,
    Validations,
    EnvPrefix,
    LanguageNSKeys,
    DisabledElementOpacity,
    // CreateAccountInputFields,
    // SignInInputFields,
    // ForgotPasswordInputFields,
    // ResetPasswordInputFields,
    ApiResponseStatuses,
    MyProfileListItems,
    // EditProfileListItems,
    // ChangePasswordInputFields,
    Listeners,
    Animations,
    KeyboardTypes,
    // RealmSchemeNames,
    AnalyticsKeys,
    AnalyticsCustomDimensions,
    UserGuest
};