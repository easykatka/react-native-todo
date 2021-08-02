import React from "react";
import {ScrollView, View,Text} from "react-native";
import {Box, Button, Center, Icon, Input} from "native-base"
import {MaterialCommunityIcons} from "@expo/vector-icons"
import store from './store'
import {observer} from "mobx-react";
import {ImagePicker} from "../components/ImageSelector";
import Place, {PlaceType} from '../models/Place'
import {observable} from "mobx";

@observer
export class NewPlace extends React.Component {
    @observable place = null as PlaceType ;

    constructor(props:any) {
        super(props);
        this.navigation = this.props.navigation;
        this.init();
    }
    init = () => {
        this.place = new Place();
        // this.navigator = useNavigation<NewPlaceScreenNavigationProp>()
    }
    onSave = () => {
        store.addPlace(this.place);
        this.navigation.navigate('All places')
    };

    render() {

        return <ScrollView>
            <View>
                <Box style={{margin: 30}}>
                    <Input
                        value={this.place?.title}
                        // @ts-ignore
                        onChange={(e: any) => this.place.title = e.nativeEvent.text}
                        variant="underlined"
                        placeholder="Title"
                        _light={{
                            placeholderTextColor: "blueGray.400",
                        }}
                        _dark={{
                            placeholderTextColor: "blueGray.50",
                        }}
                    />
                </Box>
                    <ImagePicker place={this.place}/>
                    <Box style={{margin: 20}}>
                        <Center flex={1}>
                            <Button onPress={this.onSave} colorScheme={'blue'}
                                    startIcon={<Icon as={MaterialCommunityIcons} name="plus-circle" size={5}/>}
                            >Add place </Button>
                        </Center>
                    </Box>
            </View>
        </ScrollView>
    }
}
