import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {CartPage} from '../pages';
import {Route} from '../utils/enums';
import {Kitchen} from '../types/kitchen.types';
import {Meal} from '../types/meal.types';
import OrderSummaryPage from '../pages/orderSummaryPage/OrderSummaryPage';

const Stack = createStackNavigator<CartStackParamList>();

export type CartStackParamList = {
  [Route.CartPage]: undefined;
  [Route.OrderSummary]: {meal: Meal; kitchen: Kitchen};
};

const CartNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Route.CartPage} component={CartPage} />
      <Stack.Screen name={Route.OrderSummary} component={OrderSummaryPage} />
    </Stack.Navigator>
  );
};

export default CartNavigator;
