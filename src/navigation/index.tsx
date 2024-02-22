import { View, Text, StyleSheet } from 'react-native'
import React, {useEffect, useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Moviecard from '../screens/moviecard'
import SignIn from '../screens/signin'
import SignOut from '../screens/singout'
import Register from '../screens/register'
import Confirm from '../screens/confirm'
import ForgotPassword from '../screens/forgotPassword'
import ResetPassword from '../screens/resetPassword'
import AntdesignIcon from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MovieCardDetail from '../screens/moviecard_detail';


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
            backgroundColor:'#0000ff',
    }
  };
  const sceneContainerStyle = {
    backgroundColor: '#95a5a6',
  };

const AuthStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignIn}></Stack.Screen>
        <Stack.Screen name="Register" component={Register}></Stack.Screen>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}></Stack.Screen>
        <Stack.Screen name="Confirm" component={Confirm}></Stack.Screen>
        <Stack.Screen name="ResetPassword" component={ResetPassword}></Stack.Screen>
        <Stack.Screen name="Moviecard" component={Moviecard}></Stack.Screen>
        <Stack.Screen name="MoviecardDetail" component={MovieCardDetail}></Stack.Screen>
        <Stack.Screen name="SignOut" component={SignOut}></Stack.Screen>
    </Stack.Navigator>
);

const AppTabs = () => (
    <Tab.Navigator 
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Moviecard') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          } else if (route.name === 'MoviecardDetail') {
            return false;
          }

          // You can return any component that you like here!
          return <Fontisto name="film" color={color} size={size}/>;
        },
        tabBarActiveBackgroundColor :'#003366',
        tabBarInactiveBackgroundColor :'#003366',
        tabBarActiveTintColor: '#FFCC01CC',
        tabBarInactiveTintColor: '#fff',
        headerShown: false
      })}
    >
        <Tab.Screen name="Moviecard" component={Moviecard} 
            options={{
                tabBarLabel: 'Moviecard',
                tabBarIcon: ({ color, size }) => (
                    <Fontisto name="film" color={color} size={size} />
                ),
            }} 
        />

        <Tab.Screen name="MoviecardDetail" component={MovieCardDetail} 
         options={{
            tabBarButton: () => null 
        }} 
        />

        <Tab.Screen name="SignIn" component={SignIn} 
         options={{
            tabBarButton: () => null 
        }} 
        />

        <Tab.Screen name="SignOut" component={SignOut} 
             options={{
                tabBarLabel: 'SignOut',
                tabBarIcon: ({ color, size }) => (
                    <AntdesignIcon name="logout" color={color} size={size} />
                ),
            }} 
        />
        
    </Tab.Navigator>
);

const Navigation = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                const value = await AsyncStorage.getItem('token');
                console.log(value);
                if (value !== null) {
                    setIsAuthenticated(true);
                }
            } catch (e) {
                
                setIsAuthenticated(false);
            
            }
        };

        getData();
    }, []);

    return (
        <NavigationContainer >
          { isAuthenticated ? <AppTabs /> : <AuthStack />  }  
            {/* <AppTabs /> */}
            {/* <AuthStack />  */}
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#000000',
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

export default Navigation