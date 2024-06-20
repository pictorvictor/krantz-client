import {IconOutline} from '@ant-design/icons-react-native';
import {observer} from 'mobx-react-lite';
import {View, ScrollView, TouchableOpacity} from 'react-native';

import {BoldText, KitchenComponent} from '../../../components';
import theme from '../../../utils/theme';
import {KitchenListComponentStyles} from './styles';
import {Kitchen} from '../../../types/kitchen.types';

const KitchenListComponent = observer(
  ({title, kitchens}: {title: string; kitchens: Kitchen[]}) => {
    const onKitchenPress = (id: string) => () => console.log(id);

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
