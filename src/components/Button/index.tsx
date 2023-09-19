import React from 'react';
import { ButtonText, Container } from './styles';

const Button = (title: string) => {
  return (
    <Container>
      <ButtonText>{title}</ButtonText>
    </Container>
  );
};

export default Button;
