import {TextInput} from 'react-native';

import {InputStyles} from './styles';

const Input = ({
  value,
  onChangeText,
  style,
  placeholder,
}: {
  value: string;
  onChangeText: (text: string) => void;
  style?: {[x: string]: string | number};
  placeholder?: string;
}) => (
  <TextInput
    value={value}
    placeholder={placeholder}
    onChangeText={onChangeText}
    style={{...InputStyles.inputContainer, ...style}}
  />
);

export default Input;
