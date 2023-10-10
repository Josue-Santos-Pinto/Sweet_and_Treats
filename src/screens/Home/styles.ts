import styled from 'styled-components/native';
import { MainStyles } from '../../theme/MainStyles';

export const Container = styled.View`
  flex: 1;
  background-color: ${MainStyles.background.primary};
`;

export const ProductsMenuArea = styled.View`
  width: 100%;
  min-height: 100px;
  margin-top: 20px;
  padding: 10px;
  flex-direction: row;
  justify-content: space-around;
`;

export const ProductsMenuItem = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #fff;
  align-items: center;
`;
export const ProductsMenuIcon = styled.View`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;
export const ProductsMenuArrow = styled.View`
  width: 0;
  height: 0;
  margin-top: -8px;
  background-color: transparent;
  border-style: solid;
  border-left-width: 20px;
  border-right-width: 20px;
  border-top-width: 40px;
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: #fff;
`;
