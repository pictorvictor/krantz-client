import {View, TouchableOpacity} from 'react-native';
import {Text} from '../index';
import {CounterStyles} from './styles';

const Counter = ({
  initialQuantity = 1,
  onQuantityChange,
  mealId,
}: {
  initialQuantity: number;
  mealId: string;
  onQuantityChange?: (newQuantity: number, mealId: string) => void;
}) => {
  const incrementQuantity = () => {
    onQuantityChange?.(initialQuantity + 1, mealId);
  };

  const decrementQuantity = () => {
    if (initialQuantity > 0) {
      onQuantityChange?.(initialQuantity - 1, mealId);
    }
  };

  return (
    <View style={CounterStyles.container}>
      <TouchableOpacity
        onPress={decrementQuantity}
        style={CounterStyles.button}>
        <Text style={CounterStyles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text style={CounterStyles.quantityText}>{`${initialQuantity}`}</Text>
      <TouchableOpacity
        onPress={incrementQuantity}
        style={CounterStyles.button}>
        <Text style={CounterStyles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
