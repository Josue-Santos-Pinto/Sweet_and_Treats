import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonText, Container } from './styles';

type ButtonType = {
  title: string;
  onPress: () => {};
};

const Button = ({ title, onPress }: ButtonType) => {
  return (
    <Container onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </Container>
  );
};

export default Button;
