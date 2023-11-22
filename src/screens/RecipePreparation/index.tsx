import { FlatList, ScrollView, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  Container,
  Ingredients,
  IngredientsInfoTitle,
  RecipeInfoArea,
  RecipeText,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
  VideoPlayer,
} from './styles';
import { RecipeCard } from '../../components/RecipeCard';
import getRecipesList from '../../services/DB/getRecipesList';
import YoutubeIframe from 'react-native-youtube-iframe';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootRecipeStackType } from '../../routes/RecipeStack';
import { Loading } from '../../components/Loading';

export default function RecipePreparation() {
  const [videoReady, setVideoReady] = useState(false);

  const route = useRoute<RouteProp<RootRecipeStackType, 'RecipePreparation'>>();

  const { video, ingredients, preparation } = route.params;

  return (
    <Container>
      <VideoPlayer>
        <YoutubeIframe
          videoId={video}
          width={VIDEO_WIDTH}
          height={VIDEO_HEIGHT}
          onReady={() => setVideoReady(true)}
        />
        {!videoReady && <Loading />}
      </VideoPlayer>
      <RecipeInfoArea>
        <ScrollView showsVerticalScrollIndicator={false}>
          <RecipeText>Ingredientes</RecipeText>
          {ingredients.dough && (
            <>
              <IngredientsInfoTitle>Massa</IngredientsInfoTitle>
              {ingredients.dough.map((item, index) => (
                <Ingredients key={index}>- {item}</Ingredients>
              ))}
            </>
          )}
          {ingredients.filling && (
            <>
              <IngredientsInfoTitle>Recheio</IngredientsInfoTitle>
              {ingredients.filling.map((item, index) => (
                <Ingredients key={index}>- {item}</Ingredients>
              ))}
            </>
          )}
          {ingredients.icings && (
            <>
              <IngredientsInfoTitle>Cobertura</IngredientsInfoTitle>
              {ingredients.icings.map((item, index) => (
                <Ingredients key={index}>- {item}</Ingredients>
              ))}
            </>
          )}
          <RecipeText>Modo de preparo</RecipeText>
          {preparation.dough && (
            <>
              <IngredientsInfoTitle>Massa</IngredientsInfoTitle>
              {preparation.dough.map((item, index) => (
                <Ingredients key={index}>- {item}</Ingredients>
              ))}
            </>
          )}
          {preparation.filling && (
            <>
              <IngredientsInfoTitle>Recheio</IngredientsInfoTitle>
              {preparation.filling.map((item, index) => (
                <Ingredients key={index}>- {item}</Ingredients>
              ))}
            </>
          )}
          {preparation.icings && (
            <>
              <IngredientsInfoTitle>Cobertura</IngredientsInfoTitle>
              {preparation.icings.map((item, index) => (
                <Ingredients key={index}>- {item}</Ingredients>
              ))}
            </>
          )}
          {preparation.make && (
            <>
              <IngredientsInfoTitle>Modo de Preparo</IngredientsInfoTitle>
              {preparation.make.map((item, index) => (
                <Ingredients key={index}>- {item}</Ingredients>
              ))}
            </>
          )}
        </ScrollView>
      </RecipeInfoArea>
    </Container>
  );
}
