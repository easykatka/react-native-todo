import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {IMeal} from "../models/meal";
import {useNavigation} from "@react-navigation/native";
import {DefaultText} from "./DefaultText";


export const MealItem = ({item}: { item: IMeal }) => {
    const navigation = useNavigation()
    const toMealDetail = () => {
        navigation.navigate('MealDetail', {meal: item}
        )
    }

    return <View style={styles.mealItem}>
        <TouchableOpacity onPress={toMealDetail}>
            <View>
                <View style={[styles.mealRow, styles.header]}>
                    <ImageBackground source={{uri: item.imageUrl}}
                                     style={styles.image}>
                        <Text numberOfLines={1}
                              style={styles.title}>{item.title}</Text>
                    </ImageBackground>
                </View>
                <View style={[styles.mealRow, styles.detail]}>
                    <DefaultText>{item.duration}m</DefaultText>
                    <DefaultText>{item.complexity.toUpperCase()}</DefaultText>
                    <DefaultText>{item.affordability.toUpperCase()}</DefaultText>
                </View>
            </View>
        </TouchableOpacity>
    </View>
}


const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.6)',
        textAlign: 'center',
        paddingVertical: 5,
        paddingHorizontal: 15,


    },
    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',


    },
    detail: {
        justifyContent: 'space-between',

        height: '15%',
        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    header: {
        height: '85%'
    },
    mealItem: {
        marginVertical: 10,
        height: 200,
        width: '100%',
        backgroundColor: 'rgba(197,193,193,0.89)',
        borderRadius: 15, overflow: 'hidden'
    },
    mealRow: {
        flexDirection: 'row',
    }
})