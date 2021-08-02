import React from 'react'
import {Button, StyleSheet, Text, View,Image , Alert, Platform} from "react-native";
import * as ImgPckr from 'expo-image-picker';

import * as Permissions from 'expo-permissions'
import {observer} from "mobx-react";

export const ImagePicker = observer(({place}) => {

    const getPermission = async () => {
        const result = await Permissions.askAsync(Permissions.CAMERA);
        if (result.status !== 'granted') {
            Alert.alert('ins perm', [{text: 'ok'}])
            return false;
        }
        return true;
    }


    const pickImage = async () => {
        const hasPermission = await getPermission()
        if (!hasPermission) return;

        const image = await ImgPckr.launchCameraAsync({
            allowsEditing:true,
            aspect: [16,9],
            quality:0.5
        })
        place.setImage(image)
    }
    return (
        <View style={styles.imagePicker}>
            <View style={styles.imagePreview}>
                {place.image ?
                    <Image style={styles.image} source={{uri: place.image?.uri}}/>
                    :
                    <Text>no image picked yet.</Text>
                }
            </View>
            <Button title='Take image' onPress={pickImage}/>
        </View>
    )
});

const styles = StyleSheet.create({
    imagePicker: {
        alignItems: 'center',
        marginBottom: 25,
    },
    imagePreview: {
        width: '100%',
        height: 300,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1
    },
    image: {
        width:'100%',
        height: 300
    }
})