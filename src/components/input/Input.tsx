import {TextInput} from 'react-native';

import {InputStyles} from './styles';
import theme from '../../utils/theme';

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
    placeholderTextColor={theme.palette.textSecondary}
  />
);

export default Input;
