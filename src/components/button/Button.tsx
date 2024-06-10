import {Button as AntdButton} from '@ant-design/react-native';
import {GestureResponderEvent} from 'react-native';

import React from 'react';
import Text from '../text/Text';
import {ButtonStyles} from './styles';

const Button = ({
  children,
  onPress,
  style,
}: {
  children: React.ReactNode;
  onPress: (e: GestureResponderEvent) => void;
  style?: {[x: string]: string | number};
}) => (
  <AntdButton onPress={onPress} type="primary" style={style}>
    {typeof children === 'string' ? (
      <Text style={ButtonStyles.buttonText}>{children}</Text>
    ) : (
      children
    )}
  </AntdButton>
);

export default Button;
