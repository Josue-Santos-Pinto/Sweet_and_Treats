import React, { useEffect } from 'react';
import { Container } from './styles';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

export default function Splash() {
  const navigation = useNavigation();

  const isLogged = () => {
    const user = auth().currentUser;
    if (user) {
      navigation.reset({ index: 1, routes: [{ name: 'MainDrawer' }] });
    } else {
      navigation.reset({ index: 1, routes: [{ name: 'Login' }] });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      isLogged();
    }, 3000);
  }, []);

  return (
    <Container>
      <LottieView
        style={{ width: '90%', height: 300 }}
        source={require('../../assets/lottie/cake_splash.json')}
        autoPlay
        loop
      />
    </Container>
  );
}
