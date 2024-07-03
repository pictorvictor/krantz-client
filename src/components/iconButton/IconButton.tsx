import {useNavigation} from '@react-navigation/native';
import {IconOutline, OutlineGlyphMapType} from '@ant-design/icons-react-native';
import {TouchableOpacity, ViewStyle} from 'react-native';

import theme from '../../utils/theme';
import {IconButtonStyles} from './styles';

interface IconButtonProps {
  iconName?: OutlineGlyphMapType;
  iconColor?: string;
  iconSize?: number;
  backgroundColor?: string;
  style?: ViewStyle;
  onPress?: () => void;
  size?: number;
}

const IconButton = ({
  style,
  onPress,
  backgroundColor = theme.palette.white,
  iconColor = theme.palette.textPrimary,
  iconName = 'left',
  iconSize = 25,
  size = 40,
}: IconButtonProps) => {
  return (
    <TouchableOpacity
      style={{...IconButtonStyles(backgroundColor, size).container, ...style}}
      onPress={onPress}>
      <IconOutline name={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
};

export default IconButton;

export const InfoButton = ({
  style,
  onPress,
}: {
  style?: ViewStyle;
  onPress?: () => void;
}) => <IconButton iconName="info-circle" onPress={onPress} style={style} />;

export const BackButton = ({style}: {style: ViewStyle}) => {
  const navigation = useNavigation();

  const onBackIconButtonPress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return <IconButton style={style} onPress={onBackIconButtonPress} />;
};
