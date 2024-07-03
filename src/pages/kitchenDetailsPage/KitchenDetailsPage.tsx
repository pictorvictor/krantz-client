import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import {BackButton, BoldText, InfoButton, Text} from '../../components';
import {HomeStackParamList} from '../../navigation/HomeNavigator';
import {Route} from '../../utils/enums';
import {KitchenDetailsPageStyles} from './styles';
import {IconFill, IconOutline} from '@ant-design/icons-react-native';
import theme from '../../utils/theme';
import {useTranslation} from 'react-i18next';
import {useStores} from '../../hooks/useStores';
import {observer} from 'mobx-react-lite';
import MealComponent from '../../components/mealComponent/MealComponent';
import {useNavigation} from '@react-navigation/native';
import {Meal} from '../../types/meal.types';

const KitchenDetailsPage = observer(
  ({route}: StackScreenProps<HomeStackParamList, Route.KitchenDetails>) => {
    const {t} = useTranslation();
    const {kitchen} = route.params;
    const {kitchenStore} = useStores();
    const navigation = useNavigation();

    const onMealPress = (meal: Meal) => {
      //@ts-ignore
      navigation.navigate(Route.MealDetails, {meal, kitchen});
    };

    useEffect(() => {
      kitchenStore.getMeals(kitchen.id);
    }, [kitchen.id, kitchenStore]);

    const onInfoButtonPress = () => {
      // @ts-ignore
      navigation.navigate(Route.KitchenInformation, {
        kitchen,
      });
    };

    return (
      <View style={KitchenDetailsPageStyles.container}>
        <StatusBar backgroundColor="transparent" translucent />
        <ImageBackground
          source={{uri: kitchen?.kitchenImage}}
          style={KitchenDetailsPageStyles.imageBackground}
          imageStyle={KitchenDetailsPageStyles.image}>
          <BackButton style={KitchenDetailsPageStyles.backButton} />
          <InfoButton
            onPress={onInfoButtonPress}
            style={KitchenDetailsPageStyles.infoButton}
          />
          <View style={KitchenDetailsPageStyles.overlay}>
            <View style={KitchenDetailsPageStyles.detailsContainer}>
              <View style={KitchenDetailsPageStyles.ratingContainer}>
                <BoldText style={KitchenDetailsPageStyles.rating}>
                  {`${kitchen.rating}`}
                </BoldText>
                <IconFill name="star" color={theme.palette.yellow} size={24} />
              </View>
              <BoldText style={KitchenDetailsPageStyles.restaurantName}>
                {kitchen?.name}
              </BoldText>
              <Text style={KitchenDetailsPageStyles.address}>
                {kitchen.address}
              </Text>
            </View>
          </View>
        </ImageBackground>
        <View style={KitchenDetailsPageStyles.contentContainer}>
          <View style={KitchenDetailsPageStyles.pickupInfoContainer}>
            <IconOutline
              name="info-circle"
              size={20}
              color={theme.palette.textTertiary}
              style={KitchenDetailsPageStyles.infoIcon}
            />
            <BoldText style={KitchenDetailsPageStyles.pickupInfo}>
              {t('Only self pick-up available until 22:00')}
            </BoldText>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {kitchenStore.getKitchenMeals(kitchen.id).map(meal => (
              <TouchableOpacity
                key={meal.id}
                style={KitchenDetailsPageStyles.mealContainer}>
                <MealComponent meal={meal} onPress={onMealPress} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  },
);

export default KitchenDetailsPage;
