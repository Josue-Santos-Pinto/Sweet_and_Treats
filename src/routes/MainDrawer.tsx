import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Location from '../screens/Location';
import Recipes from '../screens/Recipes';
import CustomDrawer from '../components/CustomDrawer';
import Notifications from '../screens/Notifications';

export type RootMainDrawerType = {
  Home: undefined;
  Location: undefined;
  Recipes: undefined;
  Notifications: undefined;
};

const Drawer = createDrawerNavigator<RootMainDrawerType>();

export function MainDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        title: '',
        headerStyle: { borderBottomWidth: 0, elevation: 0, backgroundColor: 'transparent' },
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Location" component={Location} />
      <Drawer.Screen name="Recipes" component={Recipes} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
}
