import React, {ComponentType, useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from "../components/HeaderButton";
import {NavigationRoute} from "react-navigation";

interface Props {
    route: NavigationRoute,
    navigation: any
}

export const MealDetail: ComponentType<Props> = ({route, navigation}) => {

    const meal = route.params?.meal
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: meal.title,
            headerRight: () => <HeaderButtons
                HeaderButtonComponent={HeaderButton}>
                <Item title='Favorite' iconName='ios-star'
                      onPress={() => console.log('123')}/>
            </HeaderButtons>
        })
    }, [navigation])

    return (
        <View style={styles.screen}>
            <Text> {meal.title} </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

