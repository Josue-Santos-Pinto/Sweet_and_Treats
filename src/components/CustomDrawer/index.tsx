import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Container, HeaderMenuArea, LogoutArea, MenuButton, MenuText, UserPhoto } from './styles';
import Button from '../Button';
import Logout from '../../services/Logout';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

export default function CustomDrawer({ ...props }) {
  const navigation = useNavigation();

  const menu = [
    { name: 'Inicio', screen: 'Home', icon: 'house' },
    { name: 'Como chegar', screen: 'Location', icon: 'house' },
    { name: 'Receitas', screen: 'Recipes', icon: 'house' },
  ];
  const handleLogout = () => {
    Logout();
    navigation.reset({ index: 1, routes: [{ name: 'Login' }] });
  };

  return (
    <Container>
      <HeaderMenuArea>
        <UserPhoto></UserPhoto>
      </HeaderMenuArea>
      {menu.map((item, index) => (
        <MenuButton key={index}>
          <MenuText>{item.name}</MenuText>
        </MenuButton>
      ))}
      <LogoutArea>
        <Button title="Sair" onPress={handleLogout} />
      </LogoutArea>
    </Container>
  );
}
