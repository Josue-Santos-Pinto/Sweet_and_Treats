import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  Container,
  HeaderMenuArea,
  LogoutArea,
  MenuButton,
  MenuText,
  UserPhoto,
  UserPhotoImg,
} from './styles';
import Button from '../Button';
import Logout from '../../services/Auth/Logout';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import UserSVG from '../../assets/icons/user.svg';

export default function CustomDrawer({ ...props }) {
  const navigation = useNavigation();
  const user = useSelector((state: RootState) => state.user);

  const menu = [
    { name: 'Inicio', screen: 'Home', icon: 'house' },
    { name: 'Como chegar', screen: 'Location', icon: 'house' },
    { name: 'Receitas', screen: 'Recipes', icon: 'house' },
  ];
  const handleLogout = () => {
    const user = auth().currentUser;
    if (user) {
      const isGoogleProvider = user.providerData.some((userInfo) => {
        return userInfo.providerId === 'google.com';
      });
      Logout(isGoogleProvider);
    }

    navigation.reset({ index: 1, routes: [{ name: 'Login' }] });
  };

  return (
    <Container>
      <HeaderMenuArea>
        <UserPhoto>
          {user.avatar ? (
            <UserPhotoImg source={{ uri: user.avatar }} resizeMode="contain" />
          ) : (
            <UserSVG width={50} height={50} style={{ zIndex: 99 }} />
          )}
        </UserPhoto>
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
