import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import AppButton from "@src/components/AppButton";


const login = () =>{
    alert("you are logged in ")
}

const google = () =>{
    alert("you are logged in from Google")
}
const facebook = () =>{
    alert("you are logged in from Facebook")
}
const linkedin = () =>{
    alert("you are logged in from linkedin")
}
const pass = () =>{
    alert("you want to change your password")
}

export default function Logincompnt() {
  return (
    <View style= { styles.container } >
        <Text style={ styles.title }> Login Screen </Text>
    <View style = { styles.inputView } >
    <TextInput
        style={ styles.inputText }
        placeholder = "Email"
        name = "name"
        placeholderTextColor = "#003f5c"
        />
  </View>

  <View style = { styles.inputView } >
    <TextInput style={ styles.inputText }
        secureTextEntry
        placeholder = "Password"
        placeholderTextColor = "#003f5c"
        />
  </View>
    <TouchableOpacity style = { styles.loginBtn } 
    onPress={login}>
        <Text>Login </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={pass}>
        <Text>Forgot Password </Text>
    </TouchableOpacity>

    <View style = { styles.social } >
        <TouchableOpacity style = { styles.touch } onPress={facebook}>
            <Icon name="facebook" size={20} color="white" />
            <Text> Facebook </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style = { styles.touch } onPress={linkedin}>
            <Icon name="linkedin" size={20} color="white" />
            <Text>linkedin </Text>
        </TouchableOpacity>

        <TouchableOpacity style = { styles.touch } onPress={google}>
            <Icon name="google" size={20} color="white" />
            <Text>Google </Text>
        </TouchableOpacity>
    </View>
  </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4FD3DA',
      alignItems: 'center',
      justifyContent: 'center',
    },
    touch:{
      alignItems: 'center',
      backgroundColor: "#287ed9",
      padding: 10,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 50,
      color: '#fb5b5a',
      marginBottom: 40,
    },
    social: {
    
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-evenly',
      marginVertical: 20,
    },
    inputView: {
      width: 300,
      backgroundColor: '#3AB4BA',
      borderRadius: 25,
      height: 50,
      marginBottom: 20,
      justifyContent: 'center',
      padding: 20,
    },
    inputText: {
      height: 50,
      color: 'white',
    },
    loginBtn: {
      width: 250,
      backgroundColor: '#fb5b5a',
      borderRadius: 25,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
      marginBottom: 10,
    },
  });