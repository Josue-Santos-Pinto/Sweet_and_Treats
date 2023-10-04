import styled from 'styled-components/native';
import { MainStyles } from '../../theme/MainStyles';

export const Container = styled.View`
  flex: 1;
`;
export const HeaderMenuArea = styled.View`
  width: 100%;
  min-height: 80px;
  padding: 12px;
  flex-direction: row;
  border-bottom-width: 0.5px;
  border-bottom-color: #000;
`;
export const UserPhoto = styled.View`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
  border-radius: 35px;
  overflow: hidden;
  margin-horizontal: 10px;
`;
export const UserPhotoImg = styled.Image`
  width: 100%;
  height: 100%;
`;
export const UserInfo = styled.View`
  flex: 1;
  padding: 10px;
  flex-direction: column;
`;
export const UserName = styled.Text`
  font-size: ${MainStyles.text.size.subtitle};
  color: ${MainStyles.text.color.primary};
`;
export const UserEmail = styled.Text`
  font-size: ${MainStyles.text.size.small};
  color: ${MainStyles.text.color.secundary};
`;
export const MenuButton = styled.TouchableOpacity`
  width: 96%;
  min-height: 40px;
  flex-direction: row;
  margin: 12px auto;
  padding-horizontal: 12px;
  align-items: center;
  background-color: ${(props: { isActive: boolean }) =>
    props.isActive ? MainStyles.background.primary : 'transparent'};
  border-radius: 10px;
`;
export const IconArea = styled.View`
  width: 40px;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`;
export const MenuText = styled.Text`
  color: ${(props: { isActive: boolean }) =>
    props.isActive ? MainStyles.text.color.primary : MainStyles.text.color.secundary};
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
