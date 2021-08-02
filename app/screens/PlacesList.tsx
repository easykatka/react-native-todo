import React from "react";
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import store from './store'
import {observer} from "mobx-react";

import colors from "../constans/colors";
import {useNavigation} from "@react-navigation/native";
import {PlacesListcreenNavigationProp} from "../types";
import {PlaceType} from "../models/Place";

export const PlacesList = observer(() => {
    const navigator = useNavigation<PlacesListcreenNavigationProp>()

    return <View>
        <FlatList data={store.places.slice()}
                  renderItem={({item}: { item: any }) => <PlaceItem item={item}
                                                                    onSelect={() => navigator.navigate('Place detail' , item) }
                  />}/>
    </View>
})


const PlaceItem = ({item,onSelect}:any) => {
    return (
        <TouchableOpacity onPress={onSelect} style={styles.placeItem}>
            <Image style={styles.image} source={{uri: item?.image?.uri}}/>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{item?.title}</Text>
                {/*<Text style={styles.address}>{item?.address}</Text>*/}
            </View>

        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    placeItem: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#ccc',
        borderColor: colors.primary,
        borderWidth: 1
    },
    infoContainer: {
        marginLeft: 25,
        width: 250,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    title: {
        color: 'black',
        fontSize: 18,
        marginBottom: 5
    },
    address: {
        color: '#666',
        fontSize: 16
    }
});


