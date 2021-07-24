import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DrawerActions, useNavigation} from "@react-navigation/native";
import {CategoriesScreenNavigationProp} from "../types";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

export const Filters = () => {

    const navigation = useNavigation<CategoriesScreenNavigationProp>();

    const toggleDrawer = () => navigation.dispatch(DrawerActions.toggleDrawer())

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Filters',
            headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton} >
                <Item title='Menu' iconName='ios-menu' onPress={toggleDrawer}/>
            </HeaderButtons>
        })
    }, [navigation]);

    return (
        <View style={styles.screen}>
            <Text> Filters screen </Text>
        </View>
    )
};

const styles = StyleSheet.create({
        screen: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
    }
)

