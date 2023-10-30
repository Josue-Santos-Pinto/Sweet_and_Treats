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
import { RecipesType } from '../../Model/Recipes';
import { useNavigation } from '@react-navigation/native';

type RecipeCardProps = {
  data: RecipesType;
};

export function RecipeCard({ data }: RecipeCardProps) {
  const navigation = useNavigation();
  return (
    <Container onPress={() => navigation.navigate('RecipePreparation', data)}>
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
