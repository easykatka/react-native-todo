import React, {useLayoutEffect} from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import {PlaceDetailRoute} from "../types";
import {Box, Button, Center, Icon, Input} from "native-base";
import place from "../models/Place";
import {ImagePicker} from "../components/ImageSelector";
import {MaterialCommunityIcons} from "@expo/vector-icons";


export const PlaceDetail = () => {
    const {params} = useRoute<PlaceDetailRoute>();
    const navigator = useNavigation();
    console.log(params,'p')
    useLayoutEffect(()=> {
        navigator.setOptions({
            headerTitle: params.title
        })
    },[])

    return <View style={styles.screen}>
        <View>
                <Text>{params.title}</Text>
        </View>
        <View style={styles.imagePreview}>
            {params?.image ?
                <Image style={styles.image} source={{uri: params.image?.uri}}/>
                :
                <Text>no image picked yet.</Text>
            }
        </View>
    </View>
}

const styles = StyleSheet.create({
    screen: {},
    image : {
        width:'100%',
        height:300,

    },
    imagePreview: {
        width: '100%',
        height: 300,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1
    }
})