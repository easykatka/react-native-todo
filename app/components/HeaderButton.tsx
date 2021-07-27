import {HeaderButton} from "react-navigation-header-buttons";
import {Ionicons} from '@expo/vector-icons'
import {Platform} from "react-native";
import colors from "../constans/colors";
import React from 'react'

type Props = {
    title:string,
    iconName:string
}

export const CustomHeaderButton = (props:Props) => {
    return <HeaderButton {...props} IconComponent={Ionicons} iconSize={23}
                         color={Platform.OS === 'android' ? 'white' : colors.primary}/>
}