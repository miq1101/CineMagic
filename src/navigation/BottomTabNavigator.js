import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Bottom tab navigation
import { Favorites } from '../screens/favorites/Favorites';
import { Profile } from '../screens/profile/Profile';
import { BottomTabBarComponent } from '../components/bottomTabBar/BottomTabBarComponent';

import { Search } from '../screens/search/Search';

// import { ProfileNavigator } from './Navigator';
import { HomeScreenNavigator } from './HomeNavigator';
import { Animations, BottomTabBarTexts, Routes } from '../utils/constants';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: false,
                animation: Animations.none
            }}
            tabBar={props => <BottomTabBarComponent {...props} />}
        >
            <Tab.Screen name={BottomTabBarTexts.home} component={HomeScreenNavigator} />
            <Tab.Screen name={BottomTabBarTexts.search} component={Search} />
            <Tab.Screen name={BottomTabBarTexts.favorites} component={Favorites} />
            <Tab.Screen name={BottomTabBarTexts.profile} component={Profile} />
            {/* <Tab.Screen name={BottomTabBarTexts.profile} component={ProfileNavigator} /> */}
        </Tab.Navigator>
    );
}

const Stack = createStackNavigator();

function TabNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, animation: Animations.none }} >
            <Stack.Screen name={BottomTabBarTexts.tabNavigatorStack} component={BottomTabNavigator} />

        </Stack.Navigator>
    );
}

export default TabNavigator;