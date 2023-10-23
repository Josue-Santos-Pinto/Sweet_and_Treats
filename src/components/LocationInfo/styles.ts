import styled from 'styled-components/native';
import { MainStyles } from '../../theme/MainStyles';

export const Container = styled.TouchableOpacity`
  min-height: 80px;
  background-color: #188038;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: absolute;
  left: 10px;
  right: 10px;
  top: 60px;
  box-shadow: 0 0 4px #999;
  border-radius: 10px;
`;

export const LocationInfoTime = styled.View`
  flex: 1;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-right-width: 1px;
  border-right-color: ${MainStyles.text.color.white};
`;

export const LocationInfoDistance = styled.View`
  flex: 1;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export const LocationInfoTitle = styled.Text`
  color: ${MainStyles.text.color.white};
  font-size: ${MainStyles.text.size.subtitle};
`;
export const LocationInfoText = styled.Text`
  color: ${MainStyles.text.color.white};
  font-size: ${MainStyles.text.size.title};
`;
