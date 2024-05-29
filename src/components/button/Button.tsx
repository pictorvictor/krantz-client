import {Button as AntdButton} from '@ant-design/react-native';
import {GestureResponderEvent} from 'react-native';

import React from 'react';
import {SemiBoldText} from '../text/Text';
import {ButtonStyles} from './styles';

const Button = ({
  children,
  onPress,
}: {
  children: React.ReactNode;
  onPress: (e: GestureResponderEvent) => void;
}) => (
  <AntdButton onPress={onPress} type="primary">
    {typeof children === 'string' ? (
      <SemiBoldText style={ButtonStyles.buttonText}>{children}</SemiBoldText>
    ) : (
      children
    )}
  </AntdButton>
);

export default Button;
