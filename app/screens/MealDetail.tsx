import React, {useLayoutEffect} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from "../components/HeaderButton";
import {useNavigation, useRoute} from '@react-navigation/native';
import {MealDetailScreenNavigationProp, MealDetailScreenRouteProp} from "../types";
import {DefaultText} from "../components/DefaultText";


export const MealDetail = () => {
    const route = useRoute<MealDetailScreenRouteProp>();
    const navigation = useNavigation<MealDetailScreenNavigationProp>();

    const meal = route.params?.meal
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: meal.title,
            headerRight: () => <HeaderButtons
                HeaderButtonComponent={HeaderButton}>
                <Item title='Favorite' iconName='ios-star'
                      onPress={() => console.log('123')}/>
            </HeaderButtons>
        })
    }, [navigation])

    const ListItem = ({child}:{child:string}) => <View  style={styles.listItem}><DefaultText>{child}</DefaultText></View>

    return <ScrollView>
        <View>
            <Image source={{uri: meal.imageUrl}} style={styles.image}/>
            <View style={styles.detail}>
                <DefaultText>{meal.duration}m</DefaultText>
                <DefaultText>{meal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{meal.affordability.toUpperCase()}</DefaultText>
            </View>

            <Text style={styles.title}>Ingredients</Text>
            {meal.ingredients.map((engr) => <ListItem key={engr}  child={engr}/>)}

            <Text style={styles.title}>Steps</Text>
            {meal.steps.map((step) => <ListItem key={step} child={step}/>)}

        </View>
    </ScrollView>
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    detail: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
    },
    title: {
        fontFamily: 'open-sans-bold',
        textAlign: 'center',
        fontSize: 20
    },
    listItem: {
        marginHorizontal:50,
        borderRadius:10,
        borderStyle: "solid",
        borderColor: 'grey',
        borderWidth:2,
        marginVertical:3,
        padding:7
    }
})

