import React, {useState} from 'react'
import {View, Text, TextInput, ScrollView, Pressable, StyleSheet, Alert} from 'react-native'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [login, setLogin] = useState(false)

    return (
        <ScrollView keyboardDismissMode='on-drag' style={loginStyle.container}>
            {!login && (
                <View style={loginStyle.innerContainer}>
                    <Text style={loginStyle.text}>Email: </Text>
                    <TextInput
                        style={loginStyle.inputContainer}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType='email-address'
                        clearButtonMode='while-editing'
                        accessible={true}
                        accessibilityLabel='typer your email'
                        placeholder='anamaria@email.com'
                    />
                    <Text style={loginStyle.text}>Password: </Text>
                    <TextInput
                        style={loginStyle.inputContainer}
                        value={password}
                        onChangeText={setPassword}
                        keyboardType='numeric'
                        clearButtonMode='while-editing'
                        accessible={true}
                        accessibilityLabel='typer your password'
                        secureTextEntry={true}
                        placeholder='Choose a password'
                        onFocus={() => Alert.alert('A good password should have at least 6 numbers')}
                    />
                    <View style={loginStyle.loginButtonContainer}>
                        <Pressable
                            onPress={() => setLogin(!login)}
                        >
                            <Text style={loginStyle.loginButton}>Log in</Text>
                        </Pressable>
                    </View>
                </View>
            )}
            {login && (
                <View style={loginStyle.innerContainer}>
                    <Text style={{textAlign: 'center', fontSize: 16, fontWeight: 400}}>You are logged in!</Text>
                    <View style={loginStyle.loginButtonContainer}>
                        <Pressable
                            onPress={() => setLogin(!login)}
                        >
                            <Text  style={loginStyle.loginButton}>Return</Text>
                        </Pressable>
                    </View>
                </View>
            )}
            
        </ScrollView>
        
    );
}

const loginStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
    },
    innerContainer: {
        marginTop: 48,
        gap: 12,        
    },
    text: {
        fontWeight: 600,
        fontSize: 16,
    },
    inputContainer: {
    
        borderWidth: 1,
        borderColor: '#FBEC5D',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3,
        
        paddingVertical: 20,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        marginVertical: 4,
        borderRadius: 6,
      },
      loginButtonContainer: {
        alignItems: 'center',
        marginTop: 12
      },
      loginButton: {
        backgroundColor: 'black',
        padding: 12,
        width: 96,
        fontSize: 16,
        color: 'white',
        borderRadius: 6,
        textAlign: 'center',
        justifyContent: 'center'
      },
})