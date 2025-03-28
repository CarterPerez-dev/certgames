// src/navigation/AuthNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';

// Import auth screens
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import CreateUsernameScreen from '../screens/auth/CreateUsernameScreen';
import TermsScreen from '../screens/auth/TermsScreen';
import SubscriptionScreenIOS from '../screens/subscription/SubscriptionScreenIOS';


const Stack = createNativeStackNavigator();

// Custom header background
const HeaderBackground = () => (
  <LinearGradient
    colors={['#1E1E2E', '#0B0C15']}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
    style={StyleSheet.absoluteFill}
  />
);

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Register"
      screenOptions={{
        headerBackground: () => <HeaderBackground />,
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
        },
        headerBackVisible: true,
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {
          height: 60,
        },
        contentStyle: { backgroundColor: '#0B0C15' }
      }}
    >
      <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ title: 'Reset Password' }} />
      <Stack.Screen name="CreateUsername" component={CreateUsernameScreen} options={{ title: 'Choose Username' }} />
      <Stack.Screen name="SubscriptionIOS" component={SubscriptionScreenIOS} options={{ headerShown: false }} />
      <Stack.Screen name="Terms" component={TermsScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
