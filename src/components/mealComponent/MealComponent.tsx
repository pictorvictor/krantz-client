import {Image, View} from 'react-native';
import {BoldText, SemiBoldText} from '../index';
import {MealComponentStyles} from './styles';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Meal} from '../../types/meal.types';
import InitialPrice from '../initialPrice/InitialPrice';
import DiscountedPrice from '../discountedPrice/DiscountedPrice';
import {useNavigation} from '@react-navigation/native';
import {Route} from '../../utils/enums';

const MealComponent = ({meal}: {meal: Meal}) => {
  const navigation = useNavigation();

  const onMealPress = () => {
    //@ts-ignore
    navigation.navigate(Route.MealDetails, {meal});
  };

  return (
    <TouchableOpacity onPress={onMealPress}>
      <View style={MealComponentStyles.container}>
        <Image
          source={{uri: meal.mealImage}}
          style={MealComponentStyles.image}
        />
        <View style={MealComponentStyles.infoContainer}>
          <BoldText
            style={MealComponentStyles.mealName}
            numberOfLines={1}
            ellipsizeMode={'tail'}>
            {meal.name}
          </BoldText>
          <SemiBoldText
            style={MealComponentStyles.mealDescription}
            ellipsizeMode="tail"
            numberOfLines={3}>
            {meal.description}
          </SemiBoldText>
          <View style={MealComponentStyles.pricesContainer}>
            <InitialPrice>{`${meal.initialPrice}`}</InitialPrice>
            <DiscountedPrice>{`${meal.discountedPrice}`}</DiscountedPrice>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MealComponent;
