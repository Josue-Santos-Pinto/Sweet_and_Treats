import { FlatList, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { RecipeCard } from '../../components/RecipeCard';
import getRecipesList from '../../services/DB/getRecipesList';

export default function Recipes() {
  const [list, setList] = useState([]);

  const getRecipes = () => {
    getRecipesList().then((recipes: any) => {
      setList(recipes);
    });
  };

  useEffect(() => {
    getRecipes();
  }, []);

  console.log(list);

  return (
    <Container>
      {list && (
        <FlatList
          style={{ flex: 1, width: '100%' }}
          data={list}
          renderItem={({ item, index }) => <RecipeCard data={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </Container>
  );
}
