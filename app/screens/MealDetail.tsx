import React, {ComponentType} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICategories} from "../models/category";
import {
    NavigationStackOptions,
    NavigationStackProp,
    NavigationStackScreenComponent
} from "react-navigation-stack";
import {IMeal} from "../models/meal";
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from "../components/HeaderButton";

type Props = {
    item: ICategories;
    meal: IMeal,
    navigation:NavigationStackProp,
    navigationOptions:NavigationStackOptions
};

export const MealDetail:NavigationStackScreenComponent = ({navigation}) => {
    const meal = navigation.getParam('meal')
    return (
        <View style={styles.screen}>
            <Text> {meal.title} </Text>
        </View>
    )
};

MealDetail.navigationOptions = ({navigation}) => {
    const meal = navigation.getParam('meal')
    return {
        headerTitle: meal.title,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Favorite' iconName='ios-star'
                  onPress={() => console.log('123')}/>
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

