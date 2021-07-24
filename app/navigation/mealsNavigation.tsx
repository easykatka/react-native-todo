import {createStackNavigator} from "@react-navigation/stack";
import * as Screens from "../screens";
import {Platform} from "react-native";
import Colors from "../constans/color";
import {MealsStackParamList} from "../types";
import React from 'react';

const MealsNav = createStackNavigator<MealsStackParamList>();

export const MealsStackScreen = () => <MealsNav.Navigator
    initialRouteName='Categories' {...MealsOptions}>
    <MealsNav.Screen name="Categories" component={Screens.Categories}/>
    <MealsNav.Screen name="CategoryMeals" component={Screens.CategoryMeals}/>
    <MealsNav.Screen name="MealDetail" component={Screens.MealDetail}/>
    <MealsNav.Screen name="Filters" component={Screens.Filters}/>
</MealsNav.Navigator>

const MealsOptions = {
    screenOptions: {
        headerTitle: 'Meal Categories',
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '#ffe',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
};