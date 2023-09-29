import styled from 'styled-components/native';
import { MainStyles } from '../../theme/MainStyles';

export const OtherOption = styled.View`
  width: 100%;
  height: 30px;
  margin-vertical: 16px;
  align-items: center;
  flex-direction: row;
`;
export const Slash = styled.View`
  flex: 1;
  height: 1px;
  background-color: ${MainStyles.text.color.placeholders};
`;
export const OtherOptionText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-horizontal: 10px;
  color: ${MainStyles.text.color.placeholders};
`;
