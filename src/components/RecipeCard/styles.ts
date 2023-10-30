import styled from 'styled-components/native';
import { MainStyles } from '../../theme/MainStyles';

export const Container = styled.TouchableOpacity`
  width: 90%;
  min-height: 200px;
  max-height: 250px;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${MainStyles.background.secundary};
  margin: 20px auto;
`;
export const RecipeImgArea = styled.View`
  width: 100%;
  height: 70%;
`;
export const RecipeImg = styled.Image`
  width: 100%;
  height: 100%;
`;

export const RecipeInfoArea = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const RecipeTitle = styled.Text`
  font-size: ${MainStyles.text.size.subtitle};
  color: ${MainStyles.text.color.primary};
`;
export const RecipeTime = styled.View`
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
export const RecipeTimeText = styled.Text`
  margin-left: 10px;
  font-size: ${MainStyles.text.size.subtitle};
  color: ${MainStyles.text.color.primary};
`;
