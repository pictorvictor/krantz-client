import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';

import {Text} from '../../components';
import {Route} from '../../utils/enums';
import {HomeStackParamList} from '../../navigation/HomeNavigator';

const KitchenDetailsPage = ({
  route,
  navigation,
}: StackScreenProps<HomeStackParamList, Route.KitchenDetails>) => {
  return (
    <>
      <Text>KitchenDetails for:</Text>
      <Text>{route.params?.kitchenId}</Text>
      <Text onPress={() => navigation.goBack()}>Go back</Text>
    </>
  );
};

export default KitchenDetailsPage;
