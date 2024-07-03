import {useNavigation} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';
import React, {useEffect} from 'react';
import {ImageBackground, StatusBar, TouchableOpacity, View} from 'react-native';
import {BoldText, IconButton} from '../../components';
import {useStores} from '../../hooks/useStores';
import theme from '../../utils/theme';
import {ProviderKitchenPageStyles} from './styles';
import {Route} from '../../utils/enums';

const ProviderOrdersPage = observer(() => {
  const {kitchenStore} = useStores();
  const navigation = useNavigation();

  useEffect(() => {
    kitchenStore.getProviderKitchen();
  }, [kitchenStore]);

  const onAddMealPress = () =>
    // @ts-ignore
    navigation.navigate(Route.ProviderÁddMeal);

  return (
    <View style={ProviderKitchenPageStyles.container}>
      <StatusBar backgroundColor="transparent" translucent />
      <ImageBackground
        source={{uri: kitchenStore.providerKitchen?.kitchenImage}}
        style={ProviderKitchenPageStyles.imageBackground}
        imageStyle={ProviderKitchenPageStyles.image}>
        <View style={ProviderKitchenPageStyles.overlayContainer}>
          <View style={ProviderKitchenPageStyles.overlay}>
            <BoldText style={ProviderKitchenPageStyles.restaurantName}>
              {kitchenStore.providerKitchen?.name ?? ''}
            </BoldText>
          </View>
        </View>
      </ImageBackground>
      <TouchableOpacity onPress={onAddMealPress}>
        <IconButton
          iconName="plus"
          iconColor={theme.palette.white}
          backgroundColor={theme.palette.primary}
        />
      </TouchableOpacity>
    </View>
  );
});

export default ProviderOrdersPage;
