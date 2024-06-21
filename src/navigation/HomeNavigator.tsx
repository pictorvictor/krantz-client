import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {HomePage, KitchenDetailsPage} from '../pages';
import {Route} from '../utils/enums';
import {Kitchen} from '../types/kitchen.types';

const Stack = createStackNavigator<HomeStackParamList>();

export type HomeStackParamList = {
  [Route.Home]: undefined;
  [Route.KitchenDetails]: {kitchen: Kitchen};
};

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Route.Home} component={HomePage} />
      <Stack.Screen
        name={Route.KitchenDetails}
        component={KitchenDetailsPage}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
