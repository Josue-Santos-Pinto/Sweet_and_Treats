import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Recipes from '../screens/Recipes';
import RecipePreparation from '../screens/RecipePreparation';

export type RootRecipeStackType = {
  Recipes: undefined;
  RecipePreparation: undefined;
};

const Stack = createStackNavigator<RootRecipeStackType>();

export function RecipeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Recipes" component={Recipes} />
      <Stack.Screen name="RecipePreparation" component={RecipePreparation} />
    </Stack.Navigator>
  );
}
