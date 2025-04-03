import  React, {useState} from 'react'
import {View, Text, StyleSheet, StatusBar} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


import WelcomeScreen from '../components/custom/WelcomeScreen.js';
import LoginPage from '../components/custom/LoginPage.js'
import Header from '../components/custom/Header.js';
import Footer from '../components/custom/Footer.js';
import FlatMenuItems from '../components/custom/FlatMenuItems.js';
import SectionMenuItems from '../components/custom/SectionMenuItems.js';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function Index() {
    return (
            <View style={indexStyle.container}>
                <StatusBar
                    backgroundColor={'#F8ED8C'} />
                
                <Stack.Navigator 
                    independent={true}
                    initialRouteName='Login'
                    screenOptions={{headerStyle : {backgroundColor: '#F8ED8C'}}}>
                    <Stack.Screen options={{title : 'Home'}}
                        name='Welcome'
                        component={WelcomeScreen}
                            />
                    <Stack.Screen name='SectionMenuItems' options={{title : 'Menu'}} component={SectionMenuItems} />
                    <Stack.Screen name='Login' 
                    options={{
                        title: 'login',
                        headerTintColor: 'white',
                        headerStyle: {backgroundColor: '#343434', }
                    }}
                    component={LoginPage} />
                </Stack.Navigator> 
                {/*<BottomTab.Navigator useLegacyImplementation>
                    <BottomTab.Screen name='Welcome' component={WelcomeScreen} />
                    <BottomTab.Screen name='Menu' component={SectionMenuItems} />
                </BottomTab.Navigator.Navigator>
                <Drawer.Navigator useLegacyImplementation>
                    <Drawer.Screen name='Welcome' component={WelcomeScreen} />
                    <Drawer.Screen name='Menu' component={SectionMenuItems} />
                </Drawer.Navigator> */}
            </View>
    );
}

const indexStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F0EF'
    }
})