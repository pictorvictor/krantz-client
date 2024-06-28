import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import {observer} from 'mobx-react-lite';
import {BottomTabBar} from '../components';
import {useStores} from '../hooks/useStores';
import {KitchenManagementPage, SearchPage} from '../pages';
import {Route} from '../utils/enums';
import CartNavigator from './CartNavigator';
import HomeNavigator from './HomeNavigator';
import ProfileNavigator from './ProfileNavigator';

const Tabs = createBottomTabNavigator<MainBottomTabBarParamList>();

export type MainBottomTabBarParamList = {
  [Route.Home]: undefined;
  [Route.Search]: {fromHome: boolean};
  [Route.Cart]: undefined;
  [Route.Profile]: undefined;
  [Route.KitchenManagement]: undefined;
};

const MainNavigator = observer(() => {
  const {cartStore, userStore} = useStores();

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
      <Tabs.Screen name={Route.Cart} component={CartNavigator} />
      <Tabs.Screen name={Route.Profile} component={ProfileNavigator} />
      {userStore.isProvider && (
        <Tabs.Screen
          name={Route.KitchenManagement}
          component={KitchenManagementPage}
        />
      )}
    </Tabs.Navigator>
  );
});

export default MainNavigator;
