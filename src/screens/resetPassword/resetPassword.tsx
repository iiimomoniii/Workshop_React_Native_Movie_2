import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import Input from '../../components/custom/input'
import Button from '../../components/custom/button/Button'
const ResetPassword = ({ navigation }: {navigation: any}) => {
  
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const onForgotPressed = () => {
      console.warn("forgot")
  }
  const onBackPressed = () => {
    navigation.navigate('Home');
  }

  return (
      <View style={styles.root}>
          <Text style={styles.title}>Reset your password</Text>
          <Input placeholder={"Password"} value={password} setValue={setPassword} secureTextEntry={true} />
            <Input placeholder={"Repeat Password"} value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry={true} />
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