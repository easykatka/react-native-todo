import {Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View} from "react-native";
import React from "react";
import {NavigationStackProp} from "react-navigation-stack";
import {ICategories} from "../models/category";


type Props = {
    item: ICategories;
    navigation: NavigationStackProp;
};

export const CategoryGridItem: React.ComponentType<Props> = ({item, navigation}) => {

    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        // @ts-ignore
        TouchableCmp = TouchableNativeFeedback;
    }

    const toCategoryMeal = () => {
        navigation.navigate({
            routeName: 'CategoryMeals',
            params: {categoryId: item.id}
        })
    }
    return <View style={styles.gridItem}>
        <TouchableCmp style={{flex: 1}}
                      onPress={toCategoryMeal}>
            <View style={[styles.container, {backgroundColor: item.color}]}>
                <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
            </View>
        </TouchableCmp>
    </View>
}


const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'right'
    },
    gridItem: {
        flex: 1,
        margin: 10,
        height: 150,
        borderRadius:10,
        overflow:'hidden'
    },
    container: {
        flex: 1,
        backgroundColor: 'red',
        borderRadius: 10,
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
})