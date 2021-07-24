import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {CATEGORIES} from "../data/dummy-data";
import {ICategories} from "../models/category";
import {CategoryGridItem} from "../components/CategoryGrid";
import {CategoriesScreenNavigationProp} from "../types";
import { useNavigation } from '@react-navigation/native';


export const Categories = () => {
    const navigation = useNavigation<CategoriesScreenNavigationProp>();

    const renderItem = ({item}: { item: ICategories }) =>
        <CategoryGridItem item={item} navigation={navigation}/>

    return <FlatList numColumns={2} keyExtractor={(item, index) => item.id} data={CATEGORIES}
                     renderItem={renderItem}/>
};
const styles = StyleSheet.create({})

