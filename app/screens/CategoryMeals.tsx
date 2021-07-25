import React, {useLayoutEffect} from 'react';
import {StyleSheet} from 'react-native';
import {CATEGORIES, MEALS} from "../data/dummy-data";
import {MealList} from "../components/MealList";
import {CategoryMealsScreenRouteProp} from "../types";
import {useNavigation, useRoute} from "@react-navigation/native";
import store from './store';

export const CategoryMeals = () => {
    const navigation = useNavigation();
    const route = useRoute<CategoryMealsScreenRouteProp>();

    const categoryId = route.params?.categoryId
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: CATEGORIES.find(cat => cat.id === categoryId)?.title
        })
    }, [navigation]);



    const displayedMeals = store.filteredMeals.filter(meal => meal.categoryIds.includes(categoryId))


    return <MealList displayedMeals={displayedMeals} />
};

const styles = StyleSheet.create({
});



