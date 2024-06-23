import React from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import {BoldText, Counter, SemiBoldText} from '../index';
import {MealComponentStyles} from './styles';
import {Meal} from '../../types/meal.types';
import InitialPrice from '../initialPrice/InitialPrice';
import DiscountedPrice from '../discountedPrice/DiscountedPrice';

interface MealComponentProps {
  meal: Meal;
  onPress?: (meal: Meal) => void;
  showCounter?: boolean;
  onQuantityChange?: (newQuantity: number, mealId: string) => void;
  initialQuantity?: number;
}

const MealComponent: React.FC<MealComponentProps> = ({
  meal,
  onPress,
  showCounter = false,
  onQuantityChange,
  initialQuantity = 1,
}) => {
  const handlePress = (_event: GestureResponderEvent) => {
    if (onPress) {
      onPress(meal);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} disabled={!onPress}>
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
          {!showCounter && (
            <SemiBoldText
              style={MealComponentStyles.mealDescription}
              ellipsizeMode="tail"
              numberOfLines={3}>
              {meal.description}
            </SemiBoldText>
          )}
          <View style={MealComponentStyles.pricesAndCounterContainer}>
            <View style={MealComponentStyles.pricesContainer}>
              <InitialPrice>{`${meal.initialPrice}`}</InitialPrice>
              <DiscountedPrice>{`${meal.discountedPrice}`}</DiscountedPrice>
            </View>
            {showCounter && (
              <View style={MealComponentStyles.counterContainer}>
                <Counter
                  initialQuantity={initialQuantity}
                  onQuantityChange={onQuantityChange}
                  mealId={meal.id}
                />
              </View>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MealComponent;
