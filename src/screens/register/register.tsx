import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Input from '../../components/custom/input'
import Button from '../../components/custom/button/Button'
import { useForm } from 'react-hook-form';

const Register = ({ navigation }: {navigation: any}) => {
    const { control,  handleSubmit , watch} = useForm();

    const EMAIL_REGEX = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/

    const pwd = watch('password');

    const onBackPressed = () => {
        navigation.navigate('SignIn')
    }
    const onRegisterPressed = () => {
        navigation.navigate('Confirm')
    }
    const onTermOfUsePressed = () => {
        console.warn("termOfUse")
    }
    const onPrivacyPressed = () => {
        console.warn("privacy")
    }

    return (
        <View style={styles.root}>
            <Text style={styles.title}>Create an account</Text>
            <Input placeholder={"Username"} name="username" control={control} rules={{required : 'Username is required', minLength : { value:3, message: 'Username should be at least 3 characters long'}, maxLength : { value :24, message: 'Username should be max 24 charecters long' } }}  secureTextEntry={false} />
            <Input placeholder={"Email"}  name="email" control={control} rules={{required : 'Email is required', pattern : {value : EMAIL_REGEX, message : 'Email is invalid'}}} secureTextEntry={false} />
            <Input placeholder={"Password"} name="password" control={control} rules={{required : 'Password is required', minLength : { value:3, message: 'Password should be at least 3 characters long'}}} secureTextEntry={true} />
            <Input placeholder={"Repeat Password"} name="repeatPassword" control={control} rules={{ validate : (value:string) => value == pwd  || 'Password do not match'}} secureTextEntry={true} />
            <Button text='Register' onPress={handleSubmit(onRegisterPressed)} page="RegisterPage" type="register" />
            <Button text='Back' onPress={onBackPressed} page="RegisterPage" type='back' />
            <Text style={styles.policy}>By register, you confirm that you accept our{' '}
                <Text style={styles.policyLink} onPress={onTermOfUsePressed} >Terms of Use</Text> and {' '}
                <Text style={styles.policyLink} onPress={onPrivacyPressed} >Privacy Policy</Text>
            </Text>
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
    },
    policy: {
        fontSize: 15,
        color: '#ffffff',
        marginTop: 250
    },
    policyLink: {
        fontSize: 15,
        color: '#FFA500',
        margin: 20,
        textDecorationLine: 'underline',
    }
})

export default Register