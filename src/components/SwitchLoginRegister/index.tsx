import React, { memo } from 'react';
import { Button, ButtonText, GoTo, Phrase } from './styles';

type SwitchLoginRegisterType = {
  phrase: string;
  buttonText: string;
  onPress: () => {};
};

function SwitchLoginRegister({ phrase, buttonText, onPress }: SwitchLoginRegisterType) {
  return (
    <GoTo>
      <Phrase>{phrase}</Phrase>
      <Button onPress={onPress}>
        <ButtonText>{buttonText}</ButtonText>
      </Button>
    </GoTo>
  );
}
export default memo(SwitchLoginRegister);
