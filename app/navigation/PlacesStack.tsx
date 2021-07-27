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
        <Screen name='New Place' component={Screens.NewPlace} options={NewPlaceOptions}/>
        <Screen name='Place Detail' component={Screens.PlaceDetail}/>
        <Screen name='Places' component={Screens.PlacesList} options={placesOptions}/>
    </Navigator>
};

const NavOptions = {
    initialRouteName: 'Places',
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
            <Item title='Add place' onPress={() => navigation.navigate('New Place')}
                  iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}/>
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