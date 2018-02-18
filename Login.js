/**
 * Created by leo on 17/02/18.
 */
import React, { Component } from 'react';
import {
    Alert,
    Image,
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    StyleSheet,
} from 'react-native';

export default class Login extends Component {
    onLoginPress(){
      Alert.alert("You pressed Login");
    }
    onRegisterPress(){
      Alert.alert("You pressed Register");
    }
    render() {
        return (
            <ScrollView style={style.container}>
              <Text style={style.title}>Welcome to SCA</Text>
              <View style={{margin: 14}} />
              <View style={style.header}>
                <Image source={require('./static/img/mascota_azul_bitson-alpha.png')} style={style.logo}/>
                <Text
                    style={style.screenName}>
                    Login
                </Text>
              </View>
              <TextInput
                style={style.text}
                placeholderTextColor="#797979"
                placeholder='Username'
                selectionColor="#236ab7"
                underlineColorAndroid="#236ab7"
              />
              <TextInput
                style={style.text}
                placeholderTextColor="#797979"
                placeholder='Password'
                secureTextEntry
                selectionColor="#236ab7"
                underlineColorAndroid="#236ab7"
              />
              <View style={{margin: 7}} />
              <Button
                      onPress={this.onLoginPress}
                      title="Login"
                      color="#236ab7"
              />
              <View style={{margin: 7}} />
              <Button
                      onPress={this.onRegisterPress}
                      color="#797979"
                      title="Register"
              />
            </ScrollView>
            )
    }
}

const style = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#262626"
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  logo: {
    height: 50,
    width: 50,
  },
  title: {
    fontSize: 27,
    color: "#dfdfdf",
    textAlign: "center",
  },
  screenName: {
    fontSize: 27,
    color: "#dfdfdf",
  },
  text: {
    color: "#dfdfdf",
  },
  register: {
    color: "#262626",
  },
});