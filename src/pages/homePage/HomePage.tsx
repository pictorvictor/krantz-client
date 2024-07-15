import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {observer} from 'mobx-react-lite';
import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {PermissionsAndroid, Platform, View} from 'react-native';
import {
  BoldText,
  ExtraBoldText,
  Input,
  KitchenListComponent,
} from '../../components';
import {useStores} from '../../hooks/useStores';
import {HomeStackParamList} from '../../navigation/HomeNavigator';
import {Route} from '../../utils/enums';
import {HomePageStyles} from './styles';

const HomePage = observer(
  (_route: StackScreenProps<HomeStackParamList, Route.HomePage>) => {
    const {userStore, kitchenStore} = useStores();
    const {t} = useTranslation();
    const navigation = useNavigation();

    useEffect(() => {
      (async () => {
        if (Platform.OS === 'android') {
          const locationPermissionGranted = await PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          );
          if (!locationPermissionGranted) {
            await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            );
          }
        }
      })();

      userStore.me();
      kitchenStore.searchKitchensByProximity();
      kitchenStore.getFavouriteKitchens();
    }, [userStore, kitchenStore]);

    const onSearchInputPress = () => {
      //@ts-ignore
      navigation.navigate(Route.Search, {fromHome: true});
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
