import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

export default function Footer() {
    return (
        <View style={footerStyle.container}>
            <Text style={footerStyle.text}>All rights reserved by Little Lemon, 2022</Text>
        </View>
    );
}


const footerStyle = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 0.1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 36,
        paddingHorizontal: 24
    },
    text: {
        color: 'white'
    }
})