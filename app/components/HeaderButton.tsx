import {Ionicons} from '@expo/vector-icons'
import {Platform} from "react-native";
import {HeaderButton} from "react-navigation-header-buttons";

import React from 'react'
import Colors from "../constans/color";


 const CustomHeaderButton = (props: any) => {
    console.log(props, 'p')
    return <HeaderButton IconComponent={Ionicons}
                         iconSize ={23}
                         // color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
                         {...props}/>;
}
export default CustomHeaderButton