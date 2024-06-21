import {IconOutline} from '@ant-design/icons-react-native';
import {useNavigation} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {KitchenListComponentStyles} from './styles';
import {Kitchen} from '../../types/kitchen.types';
import theme from '../../utils/theme';
import KitchenComponent from '../kitchenComponent/KitchenComponent';
import {BoldText} from '../text/Text';
import {Route} from '../../utils/enums';

const KitchenListComponent = observer(
  ({title, kitchens}: {title: string; kitchens: Kitchen[]}) => {
    const navigation = useNavigation();

    const onKitchenPress = (kitchen: Kitchen) => () =>
      // @ts-ignore
      navigation.navigate(Route.KitchenDetails, {
        kitchen,
      });

    return (
      <View style={KitchenListComponentStyles.container}>
        <View style={KitchenListComponentStyles.headerContainer}>
          <BoldText>{title}</BoldText>
          <IconOutline
            name="right"
            size={16}
            color={theme.palette.textPrimary}
          />
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {kitchens.map((kitchen, index) => (
            <TouchableOpacity
              key={kitchen.id}
              style={
                index !== kitchens.length - 1 &&
                KitchenListComponentStyles.kitchenComponentSpacing
              }
              onPress={onKitchenPress(kitchen)}>
              <KitchenComponent kitchen={kitchen} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  },
);

export default KitchenListComponent;
