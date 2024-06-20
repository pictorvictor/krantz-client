import {Image, View} from 'react-native';
import {Kitchen} from '../../types/kitchen.types';
import {BoldText, SemiBoldText} from '../text/Text';
import {KitchenComponentStyles} from './styles';
import React from 'react';
import {IconFill, IconOutline} from '@ant-design/icons-react-native';
import theme from '../../utils/theme';

const KitchenComponent = ({kitchen}: {kitchen: Kitchen}) => {
  return (
    <View style={KitchenComponentStyles.container}>
      <Image
        source={{uri: kitchen.kitchenImage}}
        style={KitchenComponentStyles.image}
      />
      <View style={KitchenComponentStyles.infoContainer}>
        <View style={KitchenComponentStyles.headerContainer}>
          <BoldText style={KitchenComponentStyles.name}>
            {kitchen.name}
          </BoldText>
          <View style={KitchenComponentStyles.ratingContainer}>
            <BoldText style={KitchenComponentStyles.rating}>
              {`${kitchen.rating}`}
            </BoldText>
            <IconFill name="star" color={theme.palette.yellow} />
          </View>
        </View>
        <View style={KitchenComponentStyles.hoursContainer}>
          <IconOutline
            name="clock-circle"
            size={10}
            color={theme.palette.textSecondary}
          />
          <SemiBoldText style={KitchenComponentStyles.hours}>
            {/* TODO: get current day and get the endTime of current day from kitchen.workingHours */}
            {'22:00'}
          </SemiBoldText>
        </View>
      </View>
    </View>
  );
};

export default KitchenComponent;
