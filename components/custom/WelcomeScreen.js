import  React, {useState} from 'react'
import {ScrollView, Text, StyleSheet} from 'react-native'

export default function Index() {
    return (
        <ScrollView indicatorStyle={"white"} style={welcomeScreenStyle.container}>
            <Text>Welcome to Little Lemon!</Text>
           <Text>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!</Text>
        </ScrollView>
    );
}

const welcomeScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
    }
})