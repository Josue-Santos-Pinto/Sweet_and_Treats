import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { MainStyles } from '../../theme/MainStyles';

export const VIDEO_HEIGHT = 210;
export const VIDEO_WIDTH = Dimensions.get('window').width;

export const Container = styled.View`
  flex: 1;
  background-color: ${MainStyles.background.primary};
`;
export const VideoPlayer = styled.View`
  width: 100%;
  height: ${VIDEO_HEIGHT}px;
`;
export const RecipeInfoArea = styled.View`
  flex: 1;
  padding-horizontal: 20px;
`;
export const RecipeText = styled.Text`
  font-size: ${MainStyles.text.size.title};
  color: ${MainStyles.text.color.primary};
  margin-top: 10px;
`;
export const IngredientsInfoTitle = styled.Text`
  font-size: ${MainStyles.text.size.subtitle};
  color: ${MainStyles.text.color.secundary};
  margin-vertical: 15px;
`;
export const Ingredients = styled.Text`
  color: ${MainStyles.text.color.secundary};
  margin-bottom: 10px;
`;
