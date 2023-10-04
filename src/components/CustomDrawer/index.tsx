import React from 'react';
import {
  Container,
  HeaderMenuArea,
  IconArea,
  LogoutArea,
  MenuButton,
  MenuText,
  UserEmail,
  UserInfo,
  UserName,
  UserPhoto,
  UserPhotoImg,
} from './styles';
import Button from '../Button';
import Logout from '../../services/Auth/Logout';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setAvatar, setEmail, setID, setName } from '../../redux/reducers/userReducer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MainStyles } from '../../theme/MainStyles';

export default function CustomDrawer({ ...props }) {
  const navigation = useNavigation();
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const menu = [
    { name: 'Inicio', screen: 'Home', icon: 'home' },
    { name: 'Como chegar', screen: 'Location', icon: 'map-marker' },
    { name: 'Receitas', screen: 'Recipes', icon: 'book' },
    { name: 'Notificações', screen: 'Notifications', icon: 'bell' },
  ];
  const handleLogout = () => {
    const user = auth().currentUser;
    if (user) {
      const isGoogleProvider = user.providerData.some((userInfo) => {
        return userInfo.providerId === 'google.com';
      });
      dispatch(setID(''));
      dispatch(setName(''));
      dispatch(setEmail(''));
      dispatch(setAvatar(''));
      Logout(isGoogleProvider);
    }

    navigation.reset({ index: 1, routes: [{ name: 'Login' }] });
  };

  return (
    <Container>
      <HeaderMenuArea>
        <UserPhoto>
          {user.avatar != '' ? (
            <UserPhotoImg source={{ uri: user.avatar }} resizeMode="contain" />
          ) : (
            <Icon name="user" size={40} color={MainStyles.text.color.secundary} />
          )}
        </UserPhoto>
        <UserInfo>
          <UserName>{user.name}</UserName>
          <UserEmail>{user.email}</UserEmail>
        </UserInfo>
      </HeaderMenuArea>
      {menu.map((item, index) => (
        <MenuButton
          key={index}
          isActive={props.state.routes[props.state.index].name === item.screen}
          onPress={() => navigation.navigate<any>(item.screen)}
        >
          <IconArea>
            <Icon
              name={item.icon}
              size={30}
              color={
                props.state.routes[props.state.index].name === item.screen
                  ? MainStyles.text.color.secundary
                  : MainStyles.text.color.placeholders
              }
            />
          </IconArea>
          <MenuText isActive={props.state.routes[props.state.index].name === item.screen}>
            {item.name}
          </MenuText>
        </MenuButton>
      ))}
      <LogoutArea>
        <Button title="Sair" onPress={handleLogout} />
      </LogoutArea>
    </Container>
  );
}
