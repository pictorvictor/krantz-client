import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {
  OrderDetailsPage,
  ProfileOptionsPage,
  ProfilePage,
  StatisticsPage,
} from '../pages';
import {Route} from '../utils/enums';
import BecomeOurPartnerPage from '../pages/becomeOurPartnerPage/BecomeOurPartnerPage';
import {Order} from '../types/order.types';

const Stack = createStackNavigator<ProfileStackParamList>();

export type ProfileStackParamList = {
  [Route.ProfilePage]: undefined;
  [Route.ProfileOptions]: undefined;
  [Route.Statistics]: undefined;
  [Route.BecomeOurPartner]: undefined;
  [Route.OrderDetails]: {order: Order};
};

const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Route.ProfilePage} component={ProfilePage} />
      <Stack.Screen
        name={Route.ProfileOptions}
        component={ProfileOptionsPage}
      />
      <Stack.Screen name={Route.Statistics} component={StatisticsPage} />
      <Stack.Screen
        name={Route.BecomeOurPartner}
        component={BecomeOurPartnerPage}
      />
      <Stack.Screen name={Route.OrderDetails} component={OrderDetailsPage} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
