import {IconOutline} from '@ant-design/icons-react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, ViewStyle} from 'react-native';

import theme from '../../utils/theme';
import {BackButtonStyles} from './styles';

const BackButton = ({style}: {style?: ViewStyle}) => {
  const navigation = useNavigation();

  const onBackButtonPress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <TouchableOpacity
      style={{...BackButtonStyles.container, ...style}}
      onPress={onBackButtonPress}>
      <IconOutline name="left" size={25} color={theme.palette.textPrimary} />
    </TouchableOpacity>
  );
};
export default BackButton;
