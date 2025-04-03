import  React, {useState} from 'react'
import {ScrollView, Text, StyleSheet, Pressable} from 'react-native'

import Header from './Header';
import Footer from './Footer';

export default function WelcomeScreen({navigation}) {
    return (
        <>
            <Header />
            <ScrollView indicatorStyle={"white"} style={welcomeScreenStyle.container}>
                <Text style={welcomeScreenStyle.title}>Welcome to Little Lemon!</Text>
                <Text style={welcomeScreenStyle.paragraph}>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!</Text>
                <Pressable onPress={() => navigation.navigate('SectionMenuItems')}>
                    <Text style={welcomeScreenStyle.button}>View Menu</Text>
                </Pressable>
            </ScrollView>
            <Footer />
        </>
    );
}

const welcomeScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 36,
        paddingHorizontal: 24
    },
    title : {
        textAlign: 'center',
        fontWeight: 600,
        fontSize: 24
    },
    paragraph: {
        textAlign: 'center',
        marginTop: 24,
    },
    button: {
        marginTop: 36,
        alignSelf: 'center',
        backgroundColor: 'black',
        borderRadius: 24,
        padding: 8,
        color: 'white',
        width: 150,
        textAlign: 'center'
    }
    
})