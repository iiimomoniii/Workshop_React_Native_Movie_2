import { View, Text, Image, StyleSheet, useWindowDimensions, TextInput } from 'react-native'
import React, {useState, useEffect} from 'react'
import Input from '../../components/custom/input'
import Button from '../../components/custom/button/Button'
import { useForm, Controller } from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Logo =  require("../../assets/img/major_logo_1.png")

const SignIn = ({ navigation }: {navigation: any}) => {

    const {height} = useWindowDimensions();

    const {control, handleSubmit, formState: {errors}} = useForm();

  //   const onSignInPressed =  (data:any) => {
  //     try {
  //       navigation.navigate('Moviecard')
  //     } catch ( err) {
  //       console.log(err);
  //     }
  // }

    const onSignInPressed = async (data:any) => {
        try {
          await AsyncStorage.setItem('token', 'abc124')
          tokenLogin()
        } catch ( err) {
          console.log(err);
        }
    }

    const tokenLogin = async () => {
      const value = await AsyncStorage.getItem('token')
      if (value !== null) {
        console.log(value);
        navigation.navigate('Moviecard')
      } else {
        console.log('cannot login');
      }
    }

    const onForgotPasswordPressed = () => {
       navigation.navigate('ForgotPassword')
    }
    const onRegisterPressed = () => {
        navigation.navigate('Register')
    }

  return (
    <View style={styles.root}>
        <Image source={Logo} style={[styles.logo]} resizeMode='contain'></Image>
        <Input name="username" placeholder='Username' rules={{required : 'Username is required'}}  control={control}/>
        <Input name="password" placeholder='Password' rules={{required : 'Password is required'}} secureTextEntry control={control}/>
        <View style={styles.forgot_link}>
          <Button text='Forgot password?' onPress={onForgotPasswordPressed} page="SignInPage" type="forgot"/>
        </View>
        <Button text='Sign In' onPress={handleSubmit(onSignInPressed)} page="SignInPage" type='signIn'/>
        <Button text='Register' onPress={onRegisterPressed} page="SignInPage" type="register"/>
    </View>
  )
}

const styles = StyleSheet.create({
    root : {
        // backgroundColor: '#003366',
        flex:1,
        alignItems: 'center',
        marginTop: 20
    },
    forgot_link : {
      alignSelf: 'flex-end',
      marginRight : 30,
      marginBottom: 20
    },
    logo : {
      // backgroundColor: '#003366',
      width:'100%',
      height:'50%'
  }
})

export default SignIn