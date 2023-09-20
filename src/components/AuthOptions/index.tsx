import React, { memo } from 'react';
import { Container, OptionName } from './styles';
import GoogleIcon from '../../assets/icons/google.svg';

function AuthOptions() {
  return (
    <Container>
      <GoogleIcon width={40} height={40} />
      <OptionName>Continuar com Google</OptionName>
    </Container>
  );
}
export default memo(AuthOptions);
