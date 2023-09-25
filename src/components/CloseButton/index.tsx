import React from 'react';
import { Container } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

type ButtonType = {
  onPress: () => any;
};

const CloseButton = ({ onPress }: ButtonType) => {
  return (
    <Container onPress={onPress}>
      <Icon name="close" size={25} color="#000" />
    </Container>
  );
};

export default CloseButton;
