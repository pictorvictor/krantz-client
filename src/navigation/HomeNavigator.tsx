import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {
  HomePage,
  KitchenDetailsPage,
  KitchenInformationPage,
  OrderDetailsPage,
} from '../pages';
import {Route} from '../utils/enums';
import {Kitchen} from '../types/kitchen.types';
import MealDetailsPage from '../pages/mealDetailsPage/MealDetailsPage';
import {Meal} from '../types/meal.types';
import {Order} from '../types/order.types';

const Stack = createStackNavigator<HomeStackParamList>();

export type HomeStackParamList = {
  [Route.HomePage]: undefined;
  [Route.KitchenDetails]: {kitchen: Kitchen};
  [Route.KitchenInformation]: {kitchen: Kitchen};
  [Route.MealDetails]: {meal: Meal; kitchen: Kitchen};
  [Route.OrderDetails]: {order: Order};
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
      <Stack.Screen name={Route.OrderDetails} component={OrderDetailsPage} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
