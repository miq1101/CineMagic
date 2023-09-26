import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Bottom tab navigation
import { HomeScreen } from '../screens/homeScreen/HomeScreen';

// My home stack
import { MovieDetails } from '../screens/movieDetails/MovieDetails';

import { Animations, Routes } from '../utils/constants';

const Stack = createStackNavigator();

export function HomeScreenNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, animation: Animations.none }} >
            <Stack.Screen name={Routes.homeStack} component={HomeScreen} />
            <Stack.Screen name={Routes.movieDetails} component={MovieDetails} />
        </Stack.Navigator>
    );
}