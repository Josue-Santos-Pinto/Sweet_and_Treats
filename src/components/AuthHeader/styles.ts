import styled from 'styled-components/native';
import { MainStyles } from '../../theme/MainStyles';

export const Header = styled.View`
  width: 100%;
  max-height: 150px;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;
export const HeaderLogo = styled.Text`
  font-size: ${MainStyles.text.size.title};
  font-family: ${MainStyles.text.family.waterbrush};
  color: ${MainStyles.text.color.primary};
`;
