import { StatusBar } from 'react-native';
import React from 'react';
import { AuthStack } from './src/routes/AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import { MainStyles } from './src/theme/MainStyles';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle={'dark-content'} backgroundColor={MainStyles.background.primary} />
        <AuthStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
