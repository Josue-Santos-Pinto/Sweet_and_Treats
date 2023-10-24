import { Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { Container } from './styles';
import { OneSignal } from 'react-native-onesignal';
import { NOTIFICATIONS_ID } from '../../helpers';

export default function Notifications() {
  useEffect(() => {
    OneSignal.initialize(NOTIFICATIONS_ID);
    OneSignal.Notifications.requestPermission(true);
    OneSignal.Notifications.addEventListener('click', onOpened);
    return () => OneSignal.Notifications.removeEventListener('click', onOpened);
  }, []);

  const onOpened = (results: any) => {
    console.log('Mensagem: ', results.notification.payload.body);
  };

  return (
    <Container>
      <Text style={{ color: '#000' }}>Notificações</Text>
    </Container>
  );
}
