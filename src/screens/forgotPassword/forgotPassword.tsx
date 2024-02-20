import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import Input from '../../components/custom/input'
import Button from '../../components/custom/button/Button'
import { useForm } from 'react-hook-form';

const Confirm = ({ navigation }: {navigation: any}) => {
  const { control,  handleSubmit , watch} = useForm();

  const EMAIL_REGEX = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/

  const onConfirmPressed = () => {
      console.warn("confirm")
  }
  const onBackPressed = () => {
    navigation.navigate('Home');
  }

  return (
      <View style={styles.root}>
          <Text style={styles.title}>Forgot your password</Text>
          <Input placeholder={"Enter your email"} name="email" control={control}  rules={{required : 'Email is required', pattern : {value : EMAIL_REGEX, message : 'Email is invalid'}}} secureTextEntry={false} />
          <Button text='Confirm Email' onPress={handleSubmit(onConfirmPressed)} page="ForgotPage" type="confirm_email" />
          <Button text='Back' onPress={onBackPressed} page="ForgotPage" type="back"/>
      </View>
  )
}

const styles = StyleSheet.create({
  root: {
      backgroundColor: '#000000',
      flex:1,
      alignItems: 'center',
      marginTop: 20
  },
  title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#ffffff',
      margin: 10
  }
})

export default Confirm