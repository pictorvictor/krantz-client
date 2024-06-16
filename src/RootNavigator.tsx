import {NavigationContainer} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';
import React, {useEffect} from 'react';
import Keychain from 'react-native-keychain';
import {useStores} from './hooks/useStores';
import {AuthNavigator, MainNavigator} from './navigation';
import {UserCredentials} from 'react-native-keychain';

const RootNavigator = observer(() => {
  const {authStore} = useStores();

  useEffect(() => {
    async function isAuthenticated() {
      const credentials =
        (await Keychain.getGenericPassword()) as UserCredentials;
      if (credentials?.password) {
        authStore.setIsAuth(true);
      }
    }
    isAuthenticated();
  }, [authStore]);

  return (
    <NavigationContainer>
      {authStore?.isAuth ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
});

export default RootNavigator;
