import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Recipes from '../screens/Recipes';
import RecipePreparation from '../screens/RecipePreparation';
import { RecipesType } from '../Model/Recipes';

export type RootRecipeStackType = {
  Recipes: undefined;
  RecipePreparation: RecipesType;
};

const Stack = createStackNavigator<RootRecipeStackType>();

export function RecipeStack() {
  return (
    <Stack.Navigator initialRouteName="Recipes" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Recipes" component={Recipes} />
      <Stack.Screen name="RecipePreparation" component={RecipePreparation} />
    </Stack.Navigator>
  );
}
