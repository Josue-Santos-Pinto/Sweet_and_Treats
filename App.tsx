import { StatusBar } from 'react-native';
import React from 'react';
import { AuthStack } from './src/routes/AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import { MainStyles } from './src/theme/MainStyles';
import { MainDrawer } from './src/routes/MainDrawer';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} backgroundColor={MainStyles.background.primary} />
      <AuthStack />
    </NavigationContainer>
  );
};

export default App;
