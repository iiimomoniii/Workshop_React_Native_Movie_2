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
        marginTop:10,
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
    Container_MoviecardPage_detail: {
        width: '90%',
        padding:15,
        marginVertical:5,
        alignItems:'center',
        borderRadius:5,
        margin:20
    },
    Container_MoviecardPage_favorite: {
        width: '90%',
        padding:15,
        marginVertical:5,
        alignItems:'center',
        borderRadius:5,
        margin:20
    },
    Container_CardDetailPage_back: {
        width: '90%',
        padding:15,
        marginVertical:5,
        alignItems:'center',
        borderRadius:5,
        margin:20
    },
    Button_SignInPage_signIn : {
        backgroundColor: '#003366',
    },
    Button_SignInPage_forgot : {
    },
    Button_SignInPage_register : {
        backgroundColor: '#FFCC01CC',
    },
    Button_RegisterPage_register : {
        backgroundColor: '#FFCC01CC',
    },
    Button_RegisterPage_back : {
        backgroundColor: '#FFCC01CC '
    },
    Button_ConfirmPage_confirm : {
        backgroundColor: '#FFCC01CC'
    },
    Button_ConfirmPage_back : {
        backgroundColor: '#003366',
    },
    Button_ConfirmPage_resend : {
        backgroundColor: '#ffffff',
    },
    Button_ResetPage_reset : {
        backgroundColor: '#ff9a00',
    },
    Button_ResetPage_back : {
        backgroundColor: '#003366',
    },
    Button_ForgotPage_confirm_email : {
        backgroundColor : '#FFCC01CC'
    }, 
    Button_ForgotPage_back : {
        backgroundColor: '#003366',
    }, 
    Button_MoviecardPage_detail : {
        backgroundColor: '#ffffff'
    }, 
    Button_MoviecardPage_favorite : {
        backgroundColor: '#FFCC01CC'
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
        color: '#003366',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    Text_SignInPage_register : {
        color: '#003366',
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
    Text_ConfirmPage_resend : {
        color: '#003366',
        fontWeight: 'bold',
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
    Text_MoviecardPage_detail : {
        color: '#003366',
        fontWeight: 'bold'
    },
    Text_MoviecardPage_favorite : {
        color: '#ffffff',
        fontWeight: 'bold'
    }
})

export default Button