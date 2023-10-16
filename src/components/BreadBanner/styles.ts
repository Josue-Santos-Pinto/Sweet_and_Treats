import styled from 'styled-components/native';
import { MainStyles } from '../../theme/MainStyles';

export const Container = styled.View`
  width: 90%;
  margin: 12px auto;
  border-radius: 20px;
  max-height: 160px;
  background-color: #fff;
  overflow: hidden;
`;

export const BreadBG = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const Shadow = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  flex-direction: row;
  padding: 20px;
`;

export const BreadBannerInfo = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: ${MainStyles.text.color.white};
`;

export const BreadBannerFlexCenter = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BreadBannerTime = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${MainStyles.text.color.white};
`;
