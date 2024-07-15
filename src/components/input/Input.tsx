import {TextInput} from 'react-native';
import React, {LegacyRef} from 'react';

import {InputStyles} from './styles';
import theme from '../../utils/theme';

const Input = React.forwardRef(
  (
    {
      value,
      onChangeText,
      style,
      placeholder,
      onPress,
      multiline,
      numberOfLines,
      scrollEnabled,
      type,
      showSoftInputOnFocus,
    }: {
      value?: string;
      onChangeText?: (text: string) => void;
      style?: {[x: string]: string | number};
      placeholder?: string;
      onPress?: (event?: any) => void;
      multiline?: boolean;
      numberOfLines?: number;
      scrollEnabled?: boolean;
      type?: string;
      showSoftInputOnFocus?: boolean;
    },
    ref: LegacyRef<TextInput>,
  ) => (
    <TextInput
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      style={{...InputStyles.inputContainer, ...style}}
      placeholderTextColor={theme.palette.textSecondary}
      onPressIn={onPress}
      numberOfLines={numberOfLines}
      multiline={multiline}
      blurOnSubmit={multiline}
      scrollEnabled={scrollEnabled}
      ref={ref}
      {...(type === 'password' && {secureTextEntry: true})}
      showSoftInputOnFocus={showSoftInputOnFocus}
    />
  ),
);

export default Input;
