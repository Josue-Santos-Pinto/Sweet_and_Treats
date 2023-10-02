import { Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { Container } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

function Home() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  return (
    <Container>
      <Text>{user.userID}</Text>
      <Text>{user.email}</Text>
    </Container>
  );
}

export default Home;
