import {createDrawerNavigator} from "@react-navigation/drawer";
import {BottomTabsNav} from "./bottomTabsNav";
import React from "react";
import {FiltersStackScreen} from "./filtersStackScreen";

const {Navigator, Screen} = createDrawerNavigator();
export const MainNavigator = () => {
    return (
        <Navigator overlayColor="white">
            <Screen name="Meals" component={BottomTabsNav}/>
            <Screen name="Filters" component={FiltersStackScreen}/>
        </Navigator>
    );
};

