import {createDrawerNavigator} from "@react-navigation/drawer";
import {BottomTabsNav} from "./bottomTabsNav";
import React from "react";
import {FiltersStackScreen} from "./filtersStackScreen";
import Colors from "../constans/color";


const {Navigator, Screen} = createDrawerNavigator();
export const MainNavigator = () => {
    return (
        <Navigator overlayColor="white" drawerContentOptions={NavigatorOptions}>
            <Screen name="Meals " component={BottomTabsNav} options={MealsOptions}/>
            <Screen name="Filters" component={FiltersStackScreen} options={FiltersOptions}/>
        </Navigator>
    );
};

const MealsOptions = {
    drawerLabel : 'Meals'
};
const FiltersOptions = {
    drawerLabel : 'Filters'
};
const NavigatorOptions = {
    activeTintColor: Colors.primaryColor,
    labelStyle: {
        fontFamily:'open-sans-bold'
    },
}

