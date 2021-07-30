import React from 'react'
import {Button, StyleSheet, Text, View,Image , Alert, Platform} from "react-native";
import * as ImgPckr from 'expo-image-picker';
import { Camera } from 'expo-camera';


export const ImagePicker = (props) => {
    const [image, setImage] = React.useState(null);

    const [hasPermission, setHasPermission] = React.useState(null);
    React.useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImgPckr.requestCameraPermissionsAsync()
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImgPckr.launchCameraAsync({
            mediaTypes: ImgPckr.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <View style={styles.imagePicker}>
            <View style={styles.imagePreview}><Text>no image picked yet.</Text></View>
            <Image style={styles.image} source={{uri:image}} />
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