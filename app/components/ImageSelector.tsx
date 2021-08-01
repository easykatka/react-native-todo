import React from 'react'
import {Button, StyleSheet, Text, View,Image , Alert, Platform} from "react-native";
import * as ImgPckr from 'expo-image-picker';
import {Camera} from 'expo-camera';
import * as Permissions from 'expo-permissions'

export const ImagePicker = (props) => {
    const [image, setImage] = React.useState(null);

    const getPermission = async () => {
        const result = await Permissions.askAsync(Permissions.CAMERA);
        console.log(result,'r')
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
        setImage(image)

    }
    return (
        <View style={styles.imagePicker}>
            <View style={styles.imagePreview}><Text>no image picked yet.</Text></View>
            <Image style={styles.image} source={{uri:image?.uri}} />
            <Button title='Take image' onPress={pickImage} />

        </View>
    )
};

const styles = StyleSheet.create({
    imagePicker:{
alignItems:'center'
    },
    imagePreview:{
        width:'100%',
        height:200,
        marginBottom:10,
        justifyContent:'center',
        alignItems:'center',
        borderColor : '#ccc',
        borderWidth:1
    },
    image: {
        width:'100%',
        height:100
    }
})