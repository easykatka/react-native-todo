import {StyleSheet, Text} from 'react-native'
import React from 'react'

export const DefaultText = ({children}:{children:any} )=> <Text style={styles.text}> {children} </Text>

const styles = StyleSheet.create({
    text: {
        fontFamily:'open-sans-bold'
    }
})