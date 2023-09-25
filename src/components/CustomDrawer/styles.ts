import styled from 'styled-components/native';
import { MainStyles } from '../../theme/MainStyles';

export const Container = styled.View`
  flex: 1;
`;

export const HeaderMenuArea = styled.View`
  width: 100%;
  height: 80px;
  padding: 12px;
`;
export const UserPhoto = styled.View`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: 20px;
`;

export const MenuButton = styled.TouchableOpacity`
  width: 100%;
  margin-vertical: 12px;
  justify-content: center;
  align-items: center;
`;
export const MenuText = styled.Text`
  font-size: ${MainStyles.text.size.subtitle};
`;

export const LogoutArea = styled.View`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
`;