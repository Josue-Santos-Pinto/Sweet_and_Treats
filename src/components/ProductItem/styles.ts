import styled from 'styled-components/native';
import { MainStyles } from '../../theme/MainStyles';

export const Container = styled.View`
  width: 50%;
  height: 70px;
  justify-content: center;
  align-items: center;
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
