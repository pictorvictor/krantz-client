import {Button as AntdButton} from '@ant-design/react-native';
import {GestureResponderEvent} from 'react-native';

import React from 'react';
import Text from '../text/Text';
import {ButtonStyles} from './styles';

const Button = ({
  children,
  onPress,
  style,
  type,
}: {
  children: React.ReactNode;
  onPress: (e: GestureResponderEvent) => void;
  style?: {[x: string]: string | number};
  type?: 'secondary';
}) => (
  <AntdButton
    onPress={onPress}
    type="primary"
    style={{
      ...(type === 'secondary' && ButtonStyles.secondaryButton),
      ...style,
    }}
    activeStyle={{...(type === 'secondary' && ButtonStyles.secondaryButton)}}>
    {typeof children === 'string' ? (
      <Text
        style={
          type === 'secondary'
            ? ButtonStyles.secondaryButtonText
            : ButtonStyles.buttonText
        }>
        {children}
      </Text>
    ) : (
      children
    )}
  </AntdButton>
);

export default Button;
