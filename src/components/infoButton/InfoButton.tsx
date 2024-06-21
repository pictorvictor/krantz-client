import {IconOutline} from '@ant-design/icons-react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, ViewStyle} from 'react-native';

import theme from '../../utils/theme';
import {InfoButtonStyles} from './styles';
import {Kitchen} from '../../types/kitchen.types';
import {Route} from '../../utils/enums';

const InfoButton = ({
  kitchen,
  style,
}: {
  kitchen: Kitchen;
  style?: ViewStyle;
}) => {
  const navigation = useNavigation();

  const onInfoButtonPress = () => {
    // @ts-ignore
    navigation.navigate(Route.KitchenInformation, {
      kitchen,
    });
  };

  return (
    <TouchableOpacity
      style={{...InfoButtonStyles.container, ...style}}
      onPress={onInfoButtonPress}>
      <IconOutline
        name="info-circle"
        size={25}
        color={theme.palette.textPrimary}
      />
    </TouchableOpacity>
  );
};

export default InfoButton;
