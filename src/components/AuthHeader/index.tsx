import React, { memo } from 'react';
import { Header, HeaderLogo } from './styles';

function AuthHeader() {
  return (
    <Header>
      <HeaderLogo>Sweet & Treats</HeaderLogo>
    </Header>
  );
}
export default memo(AuthHeader);
