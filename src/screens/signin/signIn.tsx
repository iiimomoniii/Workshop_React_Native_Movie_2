import { View, Text, Image, StyleSheet, useWindowDimensions, TextInput } from 'react-native'
import React, {useState} from 'react'
import Input from '../../components/custom/input'
import Button from '../../components/custom/button/Button'
import { useForm, Controller } from 'react-hook-form';
const Logo =  require("../../assets/img/major_logo.jpeg")

const SignIn = ({ navigation }: {navigation: any}) => {

    const {height} = useWindowDimensions();

    const {control, handleSubmit, formState: {errors}} = useForm();

    const onSignInPressed = (data:any) => {
      if (data){
        navigation.navigate('Home')
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
        <Button text='Forgot password?' onPress={onForgotPasswordPressed} page="SignInPage" type="forgot"/>
        <Button text='Sign In' onPress={handleSubmit(onSignInPressed)} page="SignInPage" type='signIn'/>
        <Button text='Register' onPress={onRegisterPressed} page="SignInPage" type="register"/>
    </View>
  )
}

const styles = StyleSheet.create({
    root : {
        backgroundColor: '#000000',
        flex:1,
        alignItems: 'center',
        marginTop: 20
    },
    logo : {
      backgroundColor: '#000000',
      width:'100%',
      height:'50%'
  }
})

export default SignIn