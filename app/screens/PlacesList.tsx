import React from "react";
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import store from './store'
import {observer} from "mobx-react";

import colors from "../constans/colors";
import {useNavigation} from "@react-navigation/native";
import {PlacesListcreenNavigationProp} from "../types";

export const PlacesList = observer(() => {
    const navigator = useNavigation<PlacesListcreenNavigationProp>()

    return <View>
        <FlatList data={store.places.slice()} keyExtractor={item => item.id}
                  renderItem={({item}: { item: any }) => <PlaceItem item={item}
                                                                    onSelect={() => navigator.navigate('Place detail' , item) }
                  />}/>
    </View>


})


const PlaceItem = (props: any) => {
    return (
        <TouchableOpacity onPress={props.onSelect} style={styles.placeItem}>
            <Image style={styles.image} source={{uri: props.item.image}}/>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{props.item.title}</Text>
                <Text style={styles.address}>{props.item.address}</Text>
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


