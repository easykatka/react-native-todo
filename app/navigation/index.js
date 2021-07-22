import * as Screens from "../screens/";

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Colors from "../../app/constans/color";
import { Platform, Text } from 'react-native'
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const MealsNavigation = createStackNavigator();

export const MealsStackScreen = () => <MealsNavigation.Navigator
    initialRouteName='Categories'
    screenOptions={{
        headerTitle: 'Meal Categories',
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '#ffe',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
    }
>
    <MealsNavigation.Screen name="Categories" component={Screens.Categories}/>
    <MealsNavigation.Screen name="CategoryMeals"
                            component={Screens.CategoryMeals}/>
    <MealsNavigation.Screen name="MealDetail" component={Screens.MealDetail}/>
    <MealsNavigation.Screen name="Filters" component={Screens.Filters}/>
</MealsNavigation.Navigator>


export const Tab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator();


export const tabOptions = Platform.OS === 'android' ? {

        initialRouteName: "Meals",
        activeColor: Colors.accentColor,
        inactiveColor: 'black',
        shifting: true, labeled: true,
        barStyle: {backgroundColor: Colors.primaryColor},


        screenOptions: ({route}) => ({

            tabBarLabel: route.name === 'Meals' ? 'Meals!' : 'Favorites!',
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                if (route.name === 'Meals') {
                    iconName = focused
                        ? 'ios-restaurant'
                        : 'ios-restaurant-outline';
                } else if (route.name === 'Favorites') {
                    iconName = 'ios-star'
                }
                return < Ionicons name={iconName} size={23}
                                  color={color}/>;
            },
        }),
    }

    :
    {
        screenOptions: ({route}) => ({
            tabBarLabel: route.name === 'Meals' ? 'Meals!' : 'Favorites!',
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                if (route.name === 'Meals') {
                    iconName = focused
                        ? 'ios-restaurant'
                        : 'ios-restaurant-outline';
                } else if (route.name === 'Favorites') {
                    iconName = 'ios-star'
                }
                return < Ionicons name={iconName} size={size}
                                  color={color}/>;
            },
        }),
        tabBarOptions: {
            activeTintColor: Colors.primaryColor,
            inactiveTintColor: 'black',
        }
    }