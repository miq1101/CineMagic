import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { BottomTabBarTexts, Routes } from '../utils/constants';

import TabNavigator from './BottomTabNavigator';

import { SignIn } from '../screens/signIn/SignIn';

const Stack = createStackNavigator();

function AuthNavigator({ signedIn }) {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={signedIn ? BottomTabBarTexts.tabNavigator : Routes.signIn}
        >
            <Stack.Screen name={Routes.signIn} component={SignIn} />
            <Stack.Screen name={BottomTabBarTexts.tabNavigator} component={TabNavigator} />
        </Stack.Navigator>
    );
}

export default AuthNavigator