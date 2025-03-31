import React, {useState} from 'react'
import {Text, TextInput, ScrollView, Pressable, StyleSheet} from 'react-native'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [login, setLogin] = useState(false)

    return (
        <ScrollView keyboardDismissMode='on-drag' style={loginStyle.container}>
            {!login && (
                <>
                    <Text>Email: </Text>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        keyboardType='email-address'
                        clearButtonMode='while-editing'
                        accessible={true}
                        accessibilityLabel='typer your email'
                        placeholder='anamaria@email.com'
                    />
                    <Text>Password: </Text>
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        keyboardType='numeric'
                        clearButtonMode='while-editing'
                        accessible={true}
                        accessibilityLabel='typer your password'
                        secureTextEntry={true}
                        placeholder='Choose a password'
                    />
                    <Pressable
                        onPress={() => setLogin(!login)}
                    >
                        <Text>Log in</Text>
                    </Pressable>
                    
                </>
            )}
            {login && (
                <>
                    <Text>You are logged in!</Text>
                    <Pressable
                        onPress={() => setLogin(!login)}
                    >
                        <Text>Return</Text>
                    </Pressable>
                </>
            )}
            
        </ScrollView>
        
    );
}

const loginStyle = StyleSheet.create({
    container: {
        flex: 0.8
    }
})