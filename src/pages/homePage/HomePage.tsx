import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {observer} from 'mobx-react-lite';
import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {BoldText, ExtraBoldText, Input} from '../../components';
import {useStores} from '../../hooks/useStores';
import {MainBottomTabBarParamList} from '../../navigation/MainNavigator';
import {MenuOption} from '../../utils/enums';
import KitchenListComponent from './kitchenListComponent/KitchenListComponent';
import {HomePageStyles} from './styles';

const HomePage = observer(
  ({
    navigation,
  }: BottomTabScreenProps<MainBottomTabBarParamList, MenuOption.Home>) => {
    const {userStore, kitchenStore} = useStores();
    const {t} = useTranslation();

    useEffect(() => {
      userStore.me();
      kitchenStore.searchKitchensByProximity();
      kitchenStore.fetchFavouriteKitchens();
    }, [userStore, kitchenStore]);

    const onSearchInputPress = () => {
      navigation.navigate(MenuOption.Search, {fromHome: true});
    };

    return (
      <View style={HomePageStyles.container}>
        <BoldText style={HomePageStyles.welcomeLabel}>{t('welcome')}</BoldText>
        <ExtraBoldText style={HomePageStyles.firstName}>
          {userStore.firstName}
        </ExtraBoldText>
        <Input
          placeholder={t('search')}
          onPress={onSearchInputPress}
          style={HomePageStyles.searchInput}
        />
        <View style={HomePageStyles.contentContainer}>
          <KitchenListComponent
            title={t('yourFavourites')}
            kitchens={kitchenStore.kitchensFavorites}
          />
          <KitchenListComponent
            title={t('closestNearby')}
            kitchens={kitchenStore.kitchensByProximity}
          />
        </View>
      </View>
    );
  },
);

export default HomePage;
