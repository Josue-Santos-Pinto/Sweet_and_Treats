import { StatusBar } from 'react-native';
import React from 'react';
import { MainStack } from './src/routes/MainStack';
import { NavigationContainer } from '@react-navigation/native';
import { MainStyles } from './src/theme/MainStyles';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} backgroundColor={MainStyles.background.primary} />
      <MainStack />
    </NavigationContainer>
  );
};

export default App;
