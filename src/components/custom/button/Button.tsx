import { View, Text, StyleSheet, Pressable, TextInputProps } from 'react-native'
import React from 'react'

interface ButtonProps {
    onPress: Function;
    text: string;
    page: string;
    type: string;
  }

const Button: React.FC<ButtonProps> = ({ onPress, text, page, type }) => {
  return (
    <Pressable onPress={()=>{onPress()}} style={[styles[`Container_${page}_${type}`], styles[`Button_${page}_${type}`]]}>
      <Text style={[styles.text, styles[`Text_${page}_${type}`]]}>{text}</Text>
    </Pressable>
  )
}

const styles: {[key:string]:any} = StyleSheet.create({
    Container_SignInPage_signIn: {
        width: '50%',
        padding:15,
        marginVertical:5,
        alignItems:'center',
        borderRadius:5
    },
    Container_SignInPage_forgot: {
        width: '90%',
        padding:15,
        marginVertical:5,
        alignItems:'flex-end',
        borderRadius:5
    },
    Container_SignInPage_register: {
        width: '50%',
        padding:15,
        marginVertical:5,
        alignItems:'center',
        borderRadius:5
    },
    Container_RegisterPage_register: {
        width: '50%',
        padding:15,
        marginVertical:5,
        alignItems:'center',
        borderRadius:5
    },
    Container_RegisterPage_back: {
        width: '50%',
        padding:15,
        marginVertical:5,
        alignItems:'center',
        borderRadius:5
    },
    Container_ConfirmPage_confirm: {
        width: '50%',
        padding:15,
        marginVertical:5,
        alignItems:'center',
        borderRadius:5
    },
    Container_ConfirmPage_resend: {
        width: '50%',
        padding:15,
        marginVertical:5,
        alignItems:'center',
        borderRadius:5
    },
    Container_ConfirmPage_back: {
        width: '50%',
        padding:15,
        marginVertical:5,
        alignItems:'center',
        borderRadius:5
    },
    Container_ResetPage_reset: {
        width: '50%',
        padding:15,
        marginVertical:5,
        alignItems:'center',
        borderRadius:5
    },
    Container_ResetPage_back: {
        width: '50%',
        padding:15,
        marginVertical:5,
        alignItems:'center',
        borderRadius:5
    },
    Container_ForgotPage_confirm_email: {
        width: '50%',
        padding:15,
        marginVertical:5,
        alignItems:'center',
        borderRadius:5
    },
    Container_ForgotPage_back: {
        width: '50%',
        padding:15,
        marginVertical:5,
        alignItems:'center',
        borderRadius:5
    },
    Container_HomePage_detail: {
        width: '90%',
        padding:15,
        marginVertical:5,
        alignItems:'center',
        borderRadius:5,
        margin:20
    },
    Button_SignInPage_signIn : {
        backgroundColor: '#f44336',
    },
    Button_SignInPage_forgot : {
        backgroundColor: '#000000',
    },
    Button_SignInPage_register : {
        backgroundColor: '#000000',
    },
    Button_RegisterPage_register : {
        backgroundColor: '#f44336',
    },
    Button_RegisterPage_confirm : {
        backgroundColor: '#f44336'
    },
    Button_ConfirmPage_confirm : {
        backgroundColor: '#f44336'
    },
    Button_ConfirmPage_back : {
        backgroundColor: '#000000',
    },
    Button_ConfirmPage_resend : {
        backgroundColor: '#f1c232',
    },
    Button_ResetPage_reset : {
        backgroundColor: '#ff9a00',
    },
    Button_ResetPage_back : {
        backgroundColor: '#000000',
    },
    Button_ForgotPage_confirm_email : {
        backgroundColor : '#0096FF'
    }, 
    Button_ForgotPage_back : {
        backgroundColor: '#000000',
    }, 
    Button_HomePage_detail : {
        backgroundColor: '#ffffff',
    },
    text: {
        fontWeight:'bold',
        color:'white'
    },
    Text_SignInPage_signIn : {
        color: '#ffffff',
        fontWeight: 'bold'
    },
    Text_SignInPage_forgot : {
        color: '#ffffff',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    Text_SignInPage_register : {
        color: '#ffffff',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    Text_RegisterPage_register : {
        color: '#ffffff',
        fontWeight: 'bold',
    },
    Text_RegisterPage_back : {
        color: '#ffffff',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    Text_ConfirmPage_confirm : {
        color: '#ffffff',
        fontWeight: 'bold'
    },
    Text_ConfirmPage_back : {
        color: '#ffffff',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    Text_ResetPage_back : {
        color: '#ffffff',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    Text_ForgotPage_confirm_email : {
        color: '#ffffff',
        fontWeight: 'bold',
    },
    Text_ForgotPage_back : {
        color: '#ffffff',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    Text_HomePage_detail : {
        color: '#000000',
        fontWeight: 'bold'
    }
})

export default Button