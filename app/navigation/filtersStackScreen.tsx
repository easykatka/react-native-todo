import {createStackNavigator} from "@react-navigation/stack";
import React from "react";
import * as Screens from "../screens";
import {defaultScreenOptions} from "../constans/defaultScreenOptions";

const {Navigator, Screen} = createStackNavigator();

export const FiltersStackScreen = () => <Navigator screenOptions={defaultScreenOptions}>
    <Screen name='Filters' component={Screens.Filters}/>
</Navigator>
