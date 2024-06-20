import {IconOutline} from '@ant-design/icons-react-native';
import {useNavigation} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';
import {ScrollView, TouchableOpacity, View} from 'react-native';

import {BoldText, KitchenComponent} from '../../../components';
import {Kitchen} from '../../../types/kitchen.types';
import {Route} from '../../../utils/enums';
import theme from '../../../utils/theme';
import {KitchenListComponentStyles} from './styles';

const KitchenListComponent = observer(
  ({title, kitchens}: {title: string; kitchens: Kitchen[]}) => {
    const navigation = useNavigation();

    const onKitchenPress = (id: string) => () =>
      // @ts-ignore
      navigation.navigate(Route.KitchenDetails, {
        kitchenId: id,
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
              onPress={onKitchenPress(kitchen.id)}>
              <KitchenComponent kitchen={kitchen} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  },
);

export default KitchenListComponent;
