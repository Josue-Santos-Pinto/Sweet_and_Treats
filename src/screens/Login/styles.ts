import styled from 'styled-components/native';
import { MainStyles } from '../../theme/MainStyles';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${MainStyles.background.primary};
`;
export const Header = styled.View``;
export const HeaderLogo = styled.Text`
  font-size: ${MainStyles.text.size.title};
  font-family: ${MainStyles.text.family.waterbrush};
`;
