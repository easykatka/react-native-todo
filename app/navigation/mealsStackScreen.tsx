import {createStackNavigator} from "@react-navigation/stack";
import * as Screens from "../screens";
import {MealsStackParamList} from "../types";
import React from 'react';
import {defaultScreenOptions} from "../constans/defaultScreenOptions";

const MealsNav = createStackNavigator<MealsStackParamList>();

export const MealsStackScreen = () => <MealsNav.Navigator
    initialRouteName='Categories' screenOptions={defaultScreenOptions}>
    <MealsNav.Screen name="Categories" component={Screens.Categories}/>
    <MealsNav.Screen name="CategoryMeals" component={Screens.CategoryMeals}/>
    <MealsNav.Screen name="MealDetail" component={Screens.MealDetail}/>
    <MealsNav.Screen name="Filters" component={Screens.Filters}/>
</MealsNav.Navigator>;