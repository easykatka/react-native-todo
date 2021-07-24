import {createStackNavigator} from "@react-navigation/stack";
import * as Screens from "../screens";
import React from "react";
import {defaultScreenOptions} from "../constans/defaultScreenOptions";

const {Navigator, Screen} = createStackNavigator();

export const FavoritesStackScreen = () =>
    <Navigator initialRouteName='Favorites' screenOptions={defaultScreenOptions}>
        <Screen name="Favorites" component={Screens.Favorites}/>
        <Screen name="MealDetail" component={Screens.MealDetail}/>
    </Navigator>
