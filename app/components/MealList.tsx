import {FlatList, StyleSheet, View} from "react-native";
import React from "react";
import {IMeal} from "../models/meal";
import {MealItem} from "./MealItem";

export const MealList = ({displayedMeals}: { displayedMeals: Array<IMeal> }) => {
    return <View style={styles.screen}>
        <FlatList data={displayedMeals} style={{width: '90%'}}
                  keyExtractor={(item, index) => item.id}
                  renderItem={({item}: { item: IMeal }) => <MealItem item={item}/>}/>
    </View>

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})