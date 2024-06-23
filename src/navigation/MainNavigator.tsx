import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import {BottomTabBar} from '../components';
import {CartPage, ProfilePage, SearchPage} from '../pages';
import {Route} from '../utils/enums';
import HomeNavigator from './HomeNavigator';
import {useStores} from '../hooks/useStores';
import {observer} from 'mobx-react-lite';

const Tabs = createBottomTabNavigator<MainBottomTabBarParamList>();

export type MainBottomTabBarParamList = {
  [Route.Home]: undefined;
  [Route.Search]: {fromHome: boolean};
  [Route.Cart]: undefined;
  [Route.Profile]: undefined;
};

const MainNavigator = observer(() => {
  const {cartStore} = useStores();

  return (
    <Tabs.Navigator
      tabBar={props => (
        <BottomTabBar {...props} isCartEmpty={cartStore.isCartEmpty} />
      )}
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen name={Route.Home} component={HomeNavigator} />
      <Tabs.Screen name={Route.Search} component={SearchPage} />
      <Tabs.Screen name={Route.Cart} component={CartPage} />
      <Tabs.Screen name={Route.Profile} component={ProfilePage} />
    </Tabs.Navigator>
  );
});

export default MainNavigator;
