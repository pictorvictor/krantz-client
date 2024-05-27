import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {MainNavigator, AuthNavigator} from './navigation';

const RootNavigator = () => {
  const [isAuth] = useState();

  return (
    <NavigationContainer>
      {isAuth ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
