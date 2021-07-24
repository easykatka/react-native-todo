import {Platform} from "react-native";
import Colors from "./color";

export const defaultScreenOptions = {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '#ffe',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
};