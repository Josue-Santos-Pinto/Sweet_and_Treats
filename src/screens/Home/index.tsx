import { Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { Container } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import GetCurrentUserInfo from '../../services/User/GetCurrentUserInfo';
import { setAvatar, setEmail, setName } from '../../redux/reducers/userReducer';
import BreadBanner from '../../components/BreadBanner';

function Home() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    GetCurrentUserInfo(user.userID).then((currentUser) => {
      dispatch(setName(currentUser.name));
      dispatch(setEmail(currentUser.email));
      if (currentUser.avatar) dispatch(setAvatar(currentUser.avatar));
    });
  }, []);
  return (
    <Container>
      <BreadBanner />
      <Text style={{ color: '#000' }}>Home</Text>
    </Container>
  );
}

export default Home;
