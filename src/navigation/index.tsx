import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/home'
import SignIn from '../screens/signin'
import Register from '../screens/register'
import Confirm from '../screens/confirm'
import ForgotPassword from '../screens/forgotPassword'
import ResetPassword from '../screens/resetPassword'
import AntdesignIcon from 'react-native-vector-icons/AntDesign';
import favorite from '../screens/favorite';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 60,
        bckground: "#fff"
    }
}

const AuthStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignIn" component={SignIn}></Stack.Screen>
        <Stack.Screen name="Register" component={Register}></Stack.Screen>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}></Stack.Screen>
        <Stack.Screen name="Confirm" component={Confirm}></Stack.Screen>
        <Stack.Screen name="ResetPassword" component={ResetPassword}></Stack.Screen>
    </Stack.Navigator>
);

const AppTabs = () => (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Home} 
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <AntdesignIcon name="home" color={color} size={size} />
                ),
            }} 
        />
        <Tab.Screen name="Favorite" component={favorite}
            options={{
                tabBarLabel: 'BookOutlined',
                tabBarIcon: ({ color, size }) => (
                    <AntdesignIcon name="book" color={color} size={size} />
                ),
            }} 
        />
        <Tab.Screen name="Logout" component={favorite} 
             options={{
                tabBarLabel: 'LogoutOutlined',
                tabBarIcon: ({ color, size }) => (
                    <AntdesignIcon name="logout" color={color} size={size} />
                ),
            }} 
        />
        
    </Tab.Navigator>
);

const Navigation = () => {
    return (
        <NavigationContainer >
            {/* isAuthenticated ? <AppTabs /> : <AuthStack />  */}
            <AppTabs />
        </NavigationContainer>
    )
}

export default Navigation