import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {
  ProviderAddMealPage,
  ProviderKitchenPage,
  ProviderOrdersPage,
} from '../pages';
import {Route} from '../utils/enums';

const Stack = createStackNavigator<ProviderKitchenStackParamList>();

export type ProviderKitchenStackParamList = {
  [Route.ProviderOrders]: undefined;
  [Route.ProviderKitchen]: undefined;
  [Route.ProviderAddMeal]: undefined;
};

const ProviderKitchenNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={Route.ProviderOrders}
        component={ProviderOrdersPage}
      />
      <Stack.Screen
        name={Route.ProviderKitchen}
        component={ProviderKitchenPage}
      />
      <Stack.Screen
        name={Route.ProviderAddMeal}
        component={ProviderAddMealPage}
      />
    </Stack.Navigator>
  );
};

export default ProviderKitchenNavigator;
