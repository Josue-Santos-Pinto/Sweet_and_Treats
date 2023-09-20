import styled from 'styled-components/native';
import { MainStyles } from '../../theme/MainStyles';

export const Container = styled.TouchableOpacity`
  width: 90%;
  padding-horizontal: 8px;
  margin-top: 15px;
  background-color: #fff;
  border-radius: 40px;
  padding: 8px;
  flex-direction: row;
  align-items: center;
  border: 0.5px solid #000;
`;

export const OptionName = styled.Text`
  flex: 1;
  font-size: ${MainStyles.text.size.subtitle};
  color: ${MainStyles.text.color.primary};
  text-align: center;
`;
