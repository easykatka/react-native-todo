import React, {useLayoutEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {CATEGORIES} from "../data/dummy-data";
import {ICategories} from "../models/category";
import {CategoryGridItem} from "../components/CategoryGrid";
import {CategoriesScreenNavigationProp} from "../types";
import {DrawerActions, useNavigation } from '@react-navigation/native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";


export const Categories = () => {
    const navigation = useNavigation<CategoriesScreenNavigationProp>();


    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Meal Categories',
            headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton} >
                <Item title='Menu' iconName='ios-menu' onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}/>
            </HeaderButtons>
        })
    }, [navigation]);


    const renderItem = ({item}: { item: ICategories }) =>
        <CategoryGridItem item={item} navigation={navigation}/>

    return <FlatList numColumns={2} keyExtractor={(item, index) => item.id} data={CATEGORIES}
                     renderItem={renderItem}/>
};
const styles = StyleSheet.create({})

