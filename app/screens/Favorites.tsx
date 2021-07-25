import React, {useLayoutEffect} from 'react';
import {MealList} from "../components/MealList";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import {DrawerActions, useNavigation} from '@react-navigation/native';
import store from './store';
import {observer} from "mobx-react";
import {Button, View, Text} from 'react-native';

export const Favorites = observer(() => {
    const navigation = useNavigation();
    const toggleDrawer = () => navigation.dispatch(DrawerActions.toggleDrawer())
    console.log('FAVORItEs',store.favoriteMeals)
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Your Favorites',
            headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Menu' iconName='ios-menu' onPress={toggleDrawer}/>
            </HeaderButtons>
        })
    }, [navigation]);
    if(store.favoriteMeals.length === 0) return <View style={{flex:1,justifyContent:'center'}}>

        <Text style={{textAlign:'center'}}>No Favorites meals!</Text>
        <Button title='Go to categories' onPress={() => navigation.navigate('Categories')}/>

    </View>
    return <MealList displayedMeals={store.favoriteMeals}/>
});
