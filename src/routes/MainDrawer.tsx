import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Location from '../screens/Location';
import Recipes from '../screens/Recipes';
import CustomDrawer from '../components/CustomDrawer';

export type RootMainDrawerType = {
  Home: undefined;
  Location: undefined;
  Recipes: undefined;
};

const Drawer = createDrawerNavigator<RootMainDrawerType>();

export function MainDrawer() {
  return (
    <Drawer.Navigator drawerContent={CustomDrawer}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Location" component={Location} />
      <Drawer.Screen name="Recipes" component={Recipes} />
    </Drawer.Navigator>
  );
}
