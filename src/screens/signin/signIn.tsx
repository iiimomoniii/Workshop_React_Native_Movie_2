import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Input from '../../components/custom/input';
import Button from '../../components/custom/button/Button';
import { useForm } from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Logo from "../../assets/img/major_logo_1.png";

const SignIn = ({ navigation }: { navigation: any }) => {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    const handleSignIn = async (data: any) => {
        try {
            await AsyncStorage.setItem('token', '12345');
            console.log('Sign In handleSignIn isAuthenticated', true);
            navigation.navigate('Moviecard');
        } catch (error) {
            console.error('Error setting authentication token:', error);
        }
    };

    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPassword');
    };

    const onRegisterPressed = () => {
        navigation.navigate('Register');
    };

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const token = await AsyncStorage.getItem('token');
                if (token) {
                    setIsAuthenticated(true);
                    console.log('Sign In useEffect isAuthenticated', isAuthenticated);
                }
            } catch (error) {
                console.error('Error checking authentication token:', error);
            }
        };
        checkAuthentication();
    }, [isAuthenticated]);

    return (
        <View style={styles.root}>
            <Image source={Logo} style={styles.logo} resizeMode='contain' />
            <Input name="username" placeholder='Username' rules={{ required: 'Username is required' }} control={control} />
            <Input name="password" placeholder='Password' rules={{ required: 'Password is required' }} secureTextEntry control={control} />
            <View style={styles.forgot_link}>
                <Button text='Forgot password?' onPress={onForgotPasswordPressed} page="SignInPage" type="forgot" />
            </View>
            <Button text='Sign In' onPress={handleSubmit(handleSignIn)} page="SignInPage" type='signIn' />
            <Button text='Register' onPress={onRegisterPressed} page="SignInPage" type="register" />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20
    },
    forgot_link: {
        alignSelf: 'flex-end',
        marginRight: 30,
        marginBottom: 20
    },
    logo: {
        width: '100%',
        height: '50%'
    }
});

export default SignIn;
