import React, {useLayoutEffect} from "react";
import {StyleSheet, Text, View} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import {PlaceDetailRoute} from "../types";


export const PlaceDetail = () => {
    const {params} = useRoute<PlaceDetailRoute>();
    const navigator = useNavigation();

    useLayoutEffect(()=> {
        navigator.setOptions({
            headerTitle: params.title
        })
    },[])

    return <View style={styles.screen}>
        <Text>{params.id}</Text>
    </View>
}

const styles = StyleSheet.create({
    screen: {}
})