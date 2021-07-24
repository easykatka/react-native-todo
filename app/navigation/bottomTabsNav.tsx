import {Platform} from "react-native";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Colors from "../constans/color";
import {Ionicons} from "@expo/vector-icons";
import React from "react";
import {MealsStackScreen} from "./mealsStackScreen";
import {FavoritesStackScreen} from "./favoritesStackScreen";

const {Navigator, Screen}: any = Platform.OS === 'android' ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();


export const BottomTabsNav = () => <Navigator  {...tabOptions} >
    <Screen name="Meals" component={MealsStackScreen}/>
    <Screen name="Favorites" component={FavoritesStackScreen}/>
</Navigator>


export const tabOptions = Platform.OS === 'android' ? {
// createMaterialBottomTabNavigator
        initialRouteName: "Meals",
        activeColor: Colors.accentColor,
        inactiveColor: 'black',
        shifting: true, labeled: true,
        barStyle: {backgroundColor: Colors.primaryColor},
        screenOptions: ({route}: any) => ({
            tabBarLabel: route.name === 'Meals' ? 'Meals!' : 'Favorites!',
            tabBarIcon: ({focused, color, size}: any) => {
                let iconName: any;
                if (route.name === 'Meals') {
                    iconName = focused
                        ? 'ios-restaurant'
                        : 'ios-restaurant-outline';
                } else if (route.name === 'Favorites') {
                    iconName = 'ios-star'
                }
                return < Ionicons name={iconName} size={23}
                                  color={color}/>
            }
        })
    }
    :
    //createBottomTabNavigator
    {
        screenOptions: ({route}: any) => ({
            tabBarLabel: route.name === 'Meals' ? 'Meals!' : 'Favorites!',
            tabBarIcon: ({focused, color, size}: any) => {
                let iconName: any;
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