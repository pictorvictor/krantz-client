import {NavigationContainer} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';
import React, {useEffect} from 'react';
import Keychain, {UserCredentials} from 'react-native-keychain';
import {useStores} from './hooks/useStores';
import {AuthNavigator, MainNavigator} from './navigation';

const RootNavigator = observer(() => {
  const {authStore, userStore} = useStores();

  useEffect(() => {
    async function isAuthenticated() {
      const credentials =
        (await Keychain.getGenericPassword()) as UserCredentials;
      if (credentials?.password) {
        if (await userStore.me()) {
          authStore.setIsAuth(true);
        }
      }
    }
    isAuthenticated();
  }, [authStore, userStore]);

  return (
    <NavigationContainer>
      {authStore?.isAuth ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
});

export default RootNavigator;
