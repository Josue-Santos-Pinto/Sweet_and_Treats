import React, { memo } from 'react';
import { OtherOption, OtherOptionText, Slash } from './styles';

function SlashedOr() {
  return (
    <OtherOption>
      <Slash />
      <OtherOptionText>Ou</OtherOptionText>
      <Slash />
    </OtherOption>
  );
}
export default memo(SlashedOr);
