import {Text, TouchableOpacity, View} from 'react-native';
import {MultiselectStyles} from './styles';

const Multiselect = ({
  values,
  selectedValues,
  onValuePress,
}: {
  values: {value: string; label: string}[];
  selectedValues: string[];
  onValuePress: (value: string) => void;
}) => {
  const onMultiselectItemPress = (value: string) => () => {
    onValuePress && onValuePress(value);
  };

  return (
    <View style={MultiselectStyles().container}>
      {values.map(({value, label}) => {
        const isSelected = selectedValues.includes(value);
        return (
          <TouchableOpacity
            key={value}
            style={MultiselectStyles(isSelected).chip}
            onPress={onMultiselectItemPress(value)}>
            <Text style={MultiselectStyles(isSelected).text}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Multiselect;
