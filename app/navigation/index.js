import * as Screens from "../screens/";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Colors from "../../app/constans/color";
import {Platform} from 'react-native'


const MealsNavigation = createStackNavigator();

export const MealsStackScreen = () => <MealsNavigation.Navigator
    initialRouteName='Categories'
    screenOptions={{
        headerTitle: 'Meal Categories',
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '#ffe',
        },
        headerTintColor: Platform.OS === 'android' ? white : Colors.primaryColor
    }
    }
>
    <MealsNavigation.Screen name="Categories" component={Screens.Categories}/>
    <MealsNavigation.Screen name="CategoryMeals"
                            component={Screens.CategoryMeals}/>
    <MealsNavigation.Screen name="MealDetail" component={Screens.MealDetail}/>
    <MealsNavigation.Screen name="Filters" component={Screens.Filters}/>
</MealsNavigation.Navigator>


export const Tab = createBottomTabNavigator();

export default createAppContainer(MealsNavigation)
