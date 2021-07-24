import React, {useLayoutEffect} from 'react';
import {MealList} from "../components/MealList";
import {MEALS} from "../data/dummy-data";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import {DrawerActions, useNavigation} from '@react-navigation/native';

export const Favorites = () => {
    const navigation = useNavigation();
    const toggleDrawer = () => navigation.dispatch(DrawerActions.toggleDrawer())

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Your Favorites',
            headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton} >
                <Item title='Menu' iconName='ios-menu' onPress={toggleDrawer}/>
            </HeaderButtons>
        })
    }, [navigation]);


    const displayedMeals = MEALS.filter(meal => meal.id === 'm2')
    return <MealList displayedMeals={displayedMeals}/>
};
