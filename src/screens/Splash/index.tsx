import React, { useEffect } from 'react';
import { Container } from './styles';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

export default function Splash() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.reset({ index: 1, routes: [{ name: 'Login' }] });
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
