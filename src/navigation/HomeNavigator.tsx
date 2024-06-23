import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {HomePage, KitchenDetailsPage, KitchenInformationPage} from '../pages';
import {Route} from '../utils/enums';
import {Kitchen} from '../types/kitchen.types';
import MealDetailsPage from '../pages/mealDetailsPage/MealDetailsPage';
import {Meal} from '../types/meal.types';

const Stack = createStackNavigator<HomeStackParamList>();

export type HomeStackParamList = {
  [Route.HomePage]: undefined;
  [Route.KitchenDetails]: {kitchen: Kitchen};
  [Route.KitchenInformation]: {kitchen: Kitchen};
  [Route.MealDetails]: {meal: Meal; kitchen: Kitchen};
};

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Route.HomePage} component={HomePage} />
      <Stack.Screen
        name={Route.KitchenDetails}
        component={KitchenDetailsPage}
      />
      <Stack.Screen
        name={Route.KitchenInformation}
        component={KitchenInformationPage}
      />
      <Stack.Screen name={Route.MealDetails} component={MealDetailsPage} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
