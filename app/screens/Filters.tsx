import React, {useLayoutEffect} from 'react';
import {Platform, StyleSheet, Switch, Text, View} from 'react-native';
import {DrawerActions, useNavigation} from "@react-navigation/native";
import {FiltersScreenNavigationProp} from "../types";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Colors from '../constans/color';
import store from './store'
import {observer} from "mobx-react";

const FilterSwitch = observer(({value, label, func}: any) => {
    return <View style={styles.filterContainer}>
        <Text>{label}</Text>
        <Switch
            trackColor={{false: 'red', true: Colors.primaryColor}}
            thumbColor={Platform.OS === 'android' ? Colors.primaryColor : 'white'}
            value={value} onValueChange={func}
        />
    </View>
})

export const Filters = observer(() => {
    const navigation = useNavigation<FiltersScreenNavigationProp>();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Filters',
            headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Menu' iconName='ios-menu'
                      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}/>
            </HeaderButtons>
        })
    }, [navigation])


    return (
        <View style={styles.screen}>
            <Text style={styles.title}> Available filters</Text>
            <FilterSwitch value={store.isGlutenFree} func={store.toggleGluten} label='Gluten-free'/>
            <FilterSwitch value={store.isLastoseFree} func={store.toggleLastose} label='Lasctose-free'/>
            <FilterSwitch value={store.isVegan} func={store.toggleVegan} label='Vegan'/>
            <FilterSwitch value={store.isVegetarian} func={store.toggleVegetarian} label='Vegetarian'/>
        </View>
    )
});

const styles = StyleSheet.create({
        filterContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '80%',
            margin: 10
        },
        title: {
            fontFamily: 'open-sans-bold',
            fontSize: 22,
            margin: 20,
            textAlign: 'center'
        },
        screen: {
            flex: 1,
            alignItems: 'center'
        }
    }
)

