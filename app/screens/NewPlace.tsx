import React from "react";
import {ScrollView, View,Text} from "react-native";
import {Box, Button, Center, Icon, Input} from "native-base"
import {MaterialCommunityIcons} from "@expo/vector-icons"
import store from './store'
import {observer} from "mobx-react";


export const NewPlace = observer(() => {
    const [title, setTitle] = React.useState("")

    const onSave = () => store.saveTitle(title);

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
                <Box style={{margin: 20}}>
                    <Center flex={1}>
                        <Button onPress={onSave} colorScheme={'blue'}
                                startIcon={<Icon as={MaterialCommunityIcons} name="plus-circle" size={5}/>}
                        >Add place </Button>
                        <Text>{store.title}</Text>
                    </Center>
                </Box>
            </Box>
        </View>
    </ScrollView>
})
