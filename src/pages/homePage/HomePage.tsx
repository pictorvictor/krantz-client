import {ScrollView, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import React, {useEffect} from 'react';
import {useStores} from '../../hooks/useStores';
import {
  BoldText,
  ExtraBoldText,
  Input,
  KitchenComponent,
} from '../../components';
import {HomePageStyles} from './styles';
import {MenuOption} from '../../utils/enums';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {MainBottomTabBarParamList} from '../../navigation/MainNavigator';
import {observer} from 'mobx-react-lite';
import {IconOutline} from '@ant-design/icons-react-native';
import theme from '../../utils/theme';

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
          // value={searchQuery}
          // onChangeText={onSearchQueryChange}
          onPress={onSearchInputPress}
          style={HomePageStyles.searchInput}
        />
        <View style={HomePageStyles.contentContainer}>
          <View style={HomePageStyles.yourFavouritesContainer}>
            <View style={HomePageStyles.headerContainer}>
              <BoldText>{t('Your favourites')}</BoldText>
              <IconOutline
                name="right"
                size={16}
                color={theme.palette.textPrimary}
              />
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {kitchenStore.kitchensFavorites.map((kitchen, index) => (
                <View
                  key={kitchen.id}
                  style={
                    index !== kitchenStore.kitchensByProximity.length - 1
                      ? HomePageStyles.kitchenComponentSpacing
                      : {}
                  }>
                  <KitchenComponent kitchen={kitchen} />
                </View>
              ))}
            </ScrollView>
          </View>
          <View style={HomePageStyles.closestNearbyContainer}>
            <View style={HomePageStyles.headerContainer}>
              <BoldText>{t('Closest nearby')}</BoldText>
              <IconOutline
                name="right"
                size={16}
                color={theme.palette.textPrimary}
              />
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {kitchenStore.kitchensByProximity.map((kitchen, index) => (
                <View
                  key={kitchen.id}
                  style={
                    index !== kitchenStore.kitchensByProximity.length - 1
                      ? HomePageStyles.kitchenComponentSpacing
                      : {}
                  }>
                  <KitchenComponent kitchen={kitchen} />
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
    );
  },
);

export default HomePage;
