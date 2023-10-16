import styled from 'styled-components/native';
import { MainStyles } from '../../theme/MainStyles';

export const Container = styled.View`
  width: 50%;
  min-height: 80px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-right-width: ${(props: { isEven: boolean }) => (props.isEven ? 1 : 0)}px;
  border-bottom-width: 1px;
  border-color: ${MainStyles.text.color.secundary};
`;
export const ProductImgArea = styled.View`
  width: 100%;
  min-height: 50px;
  max-height: 100px;
  justify-content: center;
  align-items: center;
  margin-vertical: 14px;
`;
export const ProductImg = styled.Image`
  width: 100%;
  height: 100%;
`;
export const OtherOptionText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-horizontal: 10px;
  color: ${MainStyles.text.color.placeholders};
`;
