import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Register from '../screens/Register';
import { MainDrawer } from './MainDrawer';

export type RootAuthStackType = {
  Splash: undefined;
  Login: undefined;
  Register: undefined;
  MainDrawer: undefined;
};

const Stack = createStackNavigator<RootAuthStackType>();

export function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="MainDrawer" component={MainDrawer} />
    </Stack.Navigator>
  );
}
