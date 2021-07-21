import React, {ComponentType, useLayoutEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {CATEGORIES, MEALS} from "../data/dummy-data";
import {IMeal} from "../models/meal";
import {MealItem} from "../components/MealItem";
import {NavigationRoute} from "react-navigation";

interface Props {
    route: NavigationRoute,
    navigation: any
}

export const CategoryMeals: ComponentType<Props> = ({route, navigation}) => {

    const categoryId = route.params?.categoryId
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: CATEGORIES.find(cat => cat.id === categoryId)?.title
        })


    }, [navigation])

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.includes(categoryId))

    const renderMealItem = ({item}: { item: IMeal }) =>

        <MealItem item={item} navigation={navigation}/>


    return (
        <View style={styles.screen}>
            <FlatList data={displayedMeals} style={{width: '90%'}}
                      keyExtractor={(item, index) => item.id}
                      renderItem={renderMealItem}/>

        </View>
    )
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});



