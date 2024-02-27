import { View, Text, StyleSheet, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';




import Moviecard from '../screens/moviecard';
import SignIn from '../screens/signin';
import SignOut from '../screens/singout'; // Corrected import
import Register from '../screens/register';
import Confirm from '../screens/confirm';
import ForgotPassword from '../screens/forgotPassword';
import ResetPassword from '../screens/resetPassword';
import AntdesignIcon from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MovieCardDetail from '../screens/moviecard_detail';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    <Stack.Screen name="Confirm" component={Confirm} />
    <Stack.Screen name="ResetPassword" component={ResetPassword} />
    <Stack.Screen name="Moviecard" component={Moviecard} />
    <Stack.Screen name="MoviecardDetail" component={MovieCardDetail} />
    <Stack.Screen name="SignOut" component={SignOut} />
  </Stack.Navigator>
);

const AppTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarActiveBackgroundColor: '#003366',
      tabBarInactiveBackgroundColor: '#003366',
      tabBarActiveTintColor: '#FFCC01CC',
      tabBarInactiveTintColor: '#fff',
      headerShown: false
    })}
  >
    <Tab.Screen
      name="Moviecard"
      component={Moviecard}
      options={{
        tabBarLabel: 'Moviecard',
        tabBarIcon: ({ color, size }) => (
          <Fontisto name="film" color={color} size={size} />
        ),
      }}
    />

    <Tab.Screen
      name="MoviecardDetail"
      component={MovieCardDetail}
      options={{
        tabBarButton: () => null
      }}
    />

    <Tab.Screen
      name="SignIn"
      component={SignIn}
      options={{
        tabBarButton: () => null
      }}
    />

    <Tab.Screen
      name="SignOut"
      component={SignOut}
      options={{
        tabBarLabel: 'SignOut',
        tabBarIcon: ({ color, size }) => (
          <AntdesignIcon name="logout" color={color} size={size} />
        ),
      }}
      listeners={({ navigation }) => ({
        tabPress: (e) => {
          e.preventDefault();
          navigation.navigate('SignOut');
        }
      })}
    />
  </Tab.Navigator>
);

const Navigation = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false); 
        }
      } catch (error) {
        console.error('Error checking authentication token:', error);
      }
    };
    checkAuthentication();
  }, [isAuthenticated]);


  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <AppTabs />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

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
});

export default Navigation;
