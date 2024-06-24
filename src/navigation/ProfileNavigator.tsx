import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {ProfileOptionsPage, ProfilePage} from '../pages';
import {Route} from '../utils/enums';

const Stack = createStackNavigator<ProfileStackParamList>();

export type ProfileStackParamList = {
  [Route.ProfilePage]: undefined;
  [Route.ProfileOptions]: undefined;
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
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
