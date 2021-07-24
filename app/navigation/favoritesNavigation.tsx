import { createStackNavigator } from "@react-navigation/stack";
import * as Screens from "../screens";
import { Platform } from "react-native";
import Colors from "../constans/color";
import React from "react";

const FavoritesNavigation = createStackNavigator();

export const FavoritesStackScreen = () =>
    <FavoritesNavigation.Navigator initialRouteName='Favorites' {...FavoritesOptions}>
        <FavoritesNavigation.Screen name="Favorites" component={Screens.Favorites}/>
        <FavoritesNavigation.Screen name="MealDetail" component={Screens.MealDetail}/>
    </FavoritesNavigation.Navigator>

const FavoritesOptions = {
    screenOptions: {
        headerTitle: 'Favorites',
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '#ffe',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
};