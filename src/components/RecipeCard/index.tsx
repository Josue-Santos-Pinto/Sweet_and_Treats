import React from 'react';
import {
  Container,
  RecipeImg,
  RecipeImgArea,
  RecipeInfoArea,
  RecipeTime,
  RecipeTimeText,
  RecipeTitle,
} from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Recipes } from '../../Model/Recipes';

type RecipeCardProps = {
  data: Recipes;
};

export function RecipeCard({ data }: RecipeCardProps) {
  return (
    <Container>
      <RecipeImgArea>
        <RecipeImg source={{ uri: data.img }} resizeMode="cover" />
      </RecipeImgArea>
      <RecipeInfoArea>
        <RecipeTitle>{data.title}</RecipeTitle>
        <RecipeTime>
          <FontAwesome name="clock-o" size={24} color="#000" />
          <RecipeTimeText>{data.duration} min</RecipeTimeText>
        </RecipeTime>
      </RecipeInfoArea>
    </Container>
  );
}
