import  React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'

import LoginPage from '../components/custom/LoginPage.js'
import Header from '../components/custom/Header.js';
import Footer from '../components/custom/Footer.js';

export default function Index() {
    return (
        <View style={indexStyle.container}>
            <Header />
            <LoginPage />
            <Footer />
        </View>
    );
}

const indexStyle = StyleSheet.create({
    container: {
        flex: 1,
    }
})