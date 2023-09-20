import styled from 'styled-components/native';
import { MainStyles } from '../../theme/MainStyles';

export const GoTo = styled.View`
  margin-top: 20px;
  height: 30px;
  flex-direction: row;
  align-items: center;
`;
export const Phrase = styled.Text`
  font-size: ${MainStyles.text.size.subtitle};
  color: ${MainStyles.text.color.secundary};
`;
export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-left: 8px;
`;
export const ButtonText = styled.Text`
  font-size: ${MainStyles.text.size.subtitle};
  color: ${MainStyles.background.quartiary};
  font-weight: bold;
`;
