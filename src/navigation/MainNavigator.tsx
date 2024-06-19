import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import {CartPage, HomePage, ProfilePage, SearchPage} from '../pages';
import {MenuOption} from '../utils/enums';
import {BottomTabBar} from '../components';

const Tabs = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tabs.Navigator
      tabBar={BottomTabBar}
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen name={MenuOption.Home} component={HomePage} />
      <Tabs.Screen name={MenuOption.Search} component={SearchPage} />
      <Tabs.Screen name={MenuOption.Cart} component={CartPage} />
      <Tabs.Screen name={MenuOption.Profile} component={ProfilePage} />
    </Tabs.Navigator>
  );
};

export default MainNavigator;
