import {createStackNavigator} from "@react-navigation/stack";
import colors from "../constans/colors";
import React from 'react'
import * as Screens from '../screens'
import {Platform} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {CustomHeaderButton} from "../components/HeaderButton";
import {PlacesListcreenNavigationProp} from "../types";

const {Navigator, Screen} = createStackNavigator()

export const PlacesStack = () => {
    return <Navigator {...NavOptions}>
        <Screen name='Map' component={Screens.Map} />
        <Screen name='New place' component={Screens.NewPlace} options={NewPlaceOptions}/>
        <Screen name='Place detail' component={Screens.PlaceDetail}/>
        <Screen name='All places' component={Screens.PlacesList} options={placesOptions}/>
    </Navigator>
};

const NavOptions = {
    initialRouteName: 'All places',
    screenOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : colors.primary
    }
};

type PlacesType = {
    navigation: PlacesListcreenNavigationProp
};
const placesOptions = ({navigation}: PlacesType) => {
    return {
        title: 'All Places',
        headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title='Add place' onPress={() => navigation.navigate('New place')}
                  iconName={'plus-circle'}/>
        </HeaderButtons>
    };
};

type AddPlaceType = {
    navigation: PlacesListcreenNavigationProp
};
const NewPlaceOptions = ({navigation}:AddPlaceType) => {
    return {
        title: 'Add place'
    };
};