import {NavigationContainer} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';
import React from 'react';

import {useStores} from './hooks/useStores';
import {AuthNavigator, MainNavigator} from './navigation';

const RootNavigator = observer(() => {
  const {authStore} = useStores();

  return (
    <NavigationContainer>
      {authStore?.isAuth ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
});

export default RootNavigator;
