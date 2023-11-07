import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Location from '../screens/Location';
import Recipes from '../screens/Recipes';
import CustomDrawer from '../components/CustomDrawer';
import { MainStyles } from '../theme/MainStyles';
import { RecipeStack } from './RecipeStack';

export type RootMainDrawerType = {
  Home: undefined;
  Location: undefined;
  RecipeStack: undefined;
};

const Drawer = createDrawerNavigator<RootMainDrawerType>();

export function MainDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        headerStyle: {
          backgroundColor: MainStyles.background.primary,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Sweet & Treats',
          headerTitleStyle: {
            fontSize: parseInt(MainStyles.text.size.title),
            fontFamily: MainStyles.text.family.waterbrush,
            color: MainStyles.text.color.primary,
            textAlign: 'center',
          },
        }}
      />
      <Drawer.Screen
        name="Location"
        component={Location}
        options={{ title: '', headerTransparent: true }}
      />
      <Drawer.Screen
        name="RecipeStack"
        component={RecipeStack}
        options={{
          title: 'Receitas',
          headerTitleStyle: {
            fontSize: parseInt(MainStyles.text.size.title),
            fontFamily: MainStyles.text.family.waterbrush,
            color: MainStyles.text.color.primary,
            textAlign: 'center',
          },
        }}
      />
    </Drawer.Navigator>
  );
}
