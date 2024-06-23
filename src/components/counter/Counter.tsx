import {useState, useEffect} from 'react';
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
  const [quantity, setQuantity] = useState(initialQuantity);

  useEffect(() => {
    if (onQuantityChange) {
      onQuantityChange(quantity, mealId);
    }
  }, [quantity, onQuantityChange, mealId]);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={CounterStyles.container}>
      <TouchableOpacity
        onPress={decrementQuantity}
        style={CounterStyles.button}>
        <Text style={CounterStyles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text style={CounterStyles.quantityText}>{`${quantity}`}</Text>
      <TouchableOpacity
        onPress={incrementQuantity}
        style={CounterStyles.button}>
        <Text style={CounterStyles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
