import { createNavigationContainerRef, StackActions, CommonActions } from '@react-navigation/native';

import { BottomTabBarTexts } from './src/utils/constants';


export const navigationRef = createNavigationContainerRef();

/*
 * The components that are missing `navigation` props need to use this function
 */
export function navigationRefNavigate(name, params) {
    if (navigationRef.isReady()) {
        navigationRef.current?.navigate(name, params);
    }
}

/*
 * The components that are missing `navigation` props need to use this function
 */
export function navigationRefGoBack() {
    navigationRef.current?.goBack();
}

/*
 * The components that are missing `navigation` props need to use this function for getting the current route name
 * `route.name` is right when you use it from the focused component,
 * if component is not focused use `navigationRef?.current?.getCurrentRoute()?.name` for getting correct route name
 */
export function currentRouteName() {
    return navigationRef?.current?.getCurrentRoute()?.name;
}

/*
 * Need this logic to create correct routes and also support ios swipe back
 */
export function actionResetAndNavigate(navigation, name, params = {}) {
    navigation.dispatch(
        CommonActions.reset({
            index: 1,
            routes: [
                { name: BottomTabBarTexts.tabNavigator },
                {
                    name,
                    params
                },
            ],
        })
    );
}

/*
 * The function similar to navigation reset
 */
export function navigationPopToTop(navigation) {
    navigation.dispatch(StackActions.popToTop())
}

/*
 * The navigation reset function
 */
export function navigationRefReset(name = BottomTabBarTexts.home) {
    navigationRef.reset({ index: 0, routes: [{ name }] });
}

/*
 * The navigation reset to map function
 */
export function navigationReset(navigation, name, params = {}) {
    navigation.dispatch(
        CommonActions.reset({ index: 0, routes: [{ name, params }] })
    )
}

/*
 * The navigation reset and navigate function
 */
export function navigationResetAndNavigate(navigation, name) {
    navigation.reset({ index: 1, routes: [{ name: BottomTabBarTexts.home }, { name }] });
}

/*
 * The navigation reset and navigate to tabs function
 */
export function navigateTabs(navigation, name) {
    navigation.reset({ index: 1, routes: [{ name: BottomTabBarTexts.tabNavigator }, { name }] });
}