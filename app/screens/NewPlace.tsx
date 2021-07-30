import React from "react";
import {ScrollView, View,Text} from "react-native";
import {Box, Button, Center, Icon, Input} from "native-base"
import {MaterialCommunityIcons} from "@expo/vector-icons"
import store from './store'
import {observer} from "mobx-react";
import {useNavigation} from "@react-navigation/native";
import {NewPlaceScreenNavigationProp} from "../types";
import {ImagePicker} from "../components/ImageSelector";


export const NewPlace = observer(({}) => {
    const [title, setTitle] = React.useState("")
    const navigator = useNavigation<NewPlaceScreenNavigationProp>()

    const onSave = () => {
        store.addPlace(title);
        navigator.navigate('All places')
    };


    return <ScrollView>
        <View>
            <Box style={{margin: 30}}>
                <Input
                    value={title}
                    onChange={(e: any) => setTitle(e.nativeEvent.text)}
                    variant="underlined"
                    placeholder="Title"
                    _light={{
                        placeholderTextColor: "blueGray.400",
                    }}
                    _dark={{
                        placeholderTextColor: "blueGray.50",
                    }}
                />
                <ImagePicker />
                <Box style={{margin: 20}}>
                    <Center flex={1}>
                        <Button onPress={onSave} colorScheme={'blue'}
                                startIcon={<Icon as={MaterialCommunityIcons} name="plus-circle" size={5}/>}
                        >Add place </Button>
                    </Center>
                </Box>
            </Box>
        </View>
    </ScrollView>
})
