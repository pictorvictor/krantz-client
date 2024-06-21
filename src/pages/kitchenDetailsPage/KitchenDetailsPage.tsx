import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import {BackButton, Text} from '../../components';
import {HomeStackParamList} from '../../navigation/HomeNavigator';
import {Route} from '../../utils/enums';
import {KitchenDetailsPageStyles} from './styles';

const KitchenDetailsPage = ({
  route,
}: StackScreenProps<HomeStackParamList, Route.KitchenDetails>) => {
  return (
    <View style={KitchenDetailsPageStyles.container}>
      <BackButton style={KitchenDetailsPageStyles.backButton} />
      <Text>KitchenDetails for:</Text>
      <Text>{route.params?.kitchen?.id}</Text>
    </View>
  );
};

export default KitchenDetailsPage;
