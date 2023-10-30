import { FlatList, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { RecipeCard } from '../../components/RecipeCard';
import getRecipesList from '../../services/DB/getRecipesList';

export default function RecipePreparation() {
  const [list, setList] = useState([]);

  console.log(list);

  return <Container></Container>;
}
