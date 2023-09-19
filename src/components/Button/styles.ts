import styled from 'styled-components/native';
import { MainStyles } from '../../theme/MainStyles';

export const Container = styled.TouchableOpacity`
  width: 200px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${MainStyles.background.quartiary};
  border-radius: 10px;
  margin-vertical: 15px;
`;

export const ButtonText = styled.Text`
  color: ${MainStyles.text.color.white};
`;
