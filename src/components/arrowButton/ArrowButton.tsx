import {IconOutline} from '@ant-design/icons-react-native';
import {TouchableOpacity, ViewStyle} from 'react-native';

import React from 'react';
import theme from '../../utils/theme';
import {ArrowButtonStyles} from './styles';

const ArrowButton = ({
  style,
  onPress,
}: {
  style?: ViewStyle;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      style={{...ArrowButtonStyles.container, ...style}}
      onPress={onPress}>
      <IconOutline name="right" size={25} color={theme.palette.white} />
    </TouchableOpacity>
  );
};
export default ArrowButton;
