import React from 'react'
import {Text, View, StyleSheet, Image} from 'react-native'

export default function Header() {
    return (
        <View style={headerStyle.container}>
            <Image source={require('../../assets/images/littleLemonIcon.png')}
                resizeMode='cover'
                style={headerStyle.img} 
                accessible={true}
                accessibilityLabel={'Little Lemon Logo'} />
            <Text style={headerStyle.text}>Little Lemon</Text>
        </View>
    );
}

const headerStyle = StyleSheet.create({
    container: {
        backgroundColor: '#FBEC5D',
        flex: 0.2,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 36,
        paddingHorizontal: 24
    },
    img: {
        width: 60,
        height: 60
    },
    text: {
        fontSize: 24,
        fontWeight: 600
    }
});