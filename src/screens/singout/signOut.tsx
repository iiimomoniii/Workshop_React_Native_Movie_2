import { View, Text, Image, StyleSheet, useWindowDimensions, TextInput } from 'react-native'
import React, {useState, useEffect} from 'react'
import Input from '../../components/custom/input'
import Button from '../../components/custom/button/Button'
import { useForm, Controller } from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SignOut = ({ navigation }: {navigation: any}) => {

    const {control, handleSubmit, formState: {errors}} = useForm();

    const onSignOutPressed = async (data:any) => {
        try {
          await AsyncStorage.removeItem('token')
          navigation.navigate('SignIn')
        } catch ( err) {
          console.log(err);
        }
    }

  return (
    <View style={styles.root}>

    <Button text='Sign Out' onPress={handleSubmit(onSignOutPressed)} page="SignInPage" type='signIn'/>
    
</View>
  )
}
const styles = StyleSheet.create({
    root : {
        // backgroundColor: '#003366',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', 
        flex:1,
        marginTop: 20
    },
})

export default SignOut