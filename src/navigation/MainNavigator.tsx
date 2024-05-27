import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import {HomePage} from '../pages';

const Tabs = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={HomePage} />
    </Tabs.Navigator>
  );
};

export default MainNavigator;
