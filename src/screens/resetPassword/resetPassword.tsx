import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import Input from '../../components/custom/input'
import Button from '../../components/custom/button/Button'
import { useForm } from 'react-hook-form';

const ResetPassword = ({ navigation }: {navigation: any}) => {
  const { control,  handleSubmit , watch} = useForm();
  
  const [password, setPassword] = useState('');

  const [passwordRepeat, setPasswordRepeat] = useState('');

  const pwd = watch('password');

  const onForgotPressed = () => {
      console.warn("forgot")
  }
  const onBackPressed = () => {
    navigation.navigate('signIn');
  }

  return (
      <View style={styles.root}>
          <Text style={styles.title}>Reset your password</Text>
          <Input placeholder={"Password"} name="password" control={control} rules={{required : 'Password is required', minLength : { value:3, message: 'Password should be at least 3 characters long'}}} secureTextEntry={true} />
            <Input placeholder={"Repeat Password"} name="repeatPassword" control={control} rules={{ validate : (value:string) => value == pwd  || 'Password do not match'}} secureTextEntry={true} />
          <Button text='Reset Password' onPress={onForgotPressed} page="ResetPage" type="reset" />
          <Button text='Back' onPress={onBackPressed} page="ResetPage" type="back"/>
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

export default ResetPassword