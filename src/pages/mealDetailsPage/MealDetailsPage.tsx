import {StackScreenProps} from '@react-navigation/stack';
import {ImageBackground, StatusBar, View} from 'react-native';
import {
  BackButton,
  BoldText,
  Button,
  Counter,
  DiscountedPrice,
  InitialPrice,
  SemiBoldText,
} from '../../components';
import {HomeStackParamList} from '../../navigation/HomeNavigator';
import {Route} from '../../utils/enums';
import {MealDetailsPageStyles} from './styles';
import {observer} from 'mobx-react-lite';
import {t} from 'i18next';
import {useStores} from '../../hooks/useStores';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const MealDetailsPage = observer(
  ({route}: StackScreenProps<HomeStackParamList, Route.MealDetails>) => {
    const {cartStore} = useStores();
    const [quantity, setQuantity] = useState(1);
    const kitchen = route.params?.kitchen;
    const navigation = useNavigation();

    const onAddToCartPress = () => {
      cartStore.addToCart(
        {
          meal: meal,
          quantity,
        },
        kitchen,
      );
      navigation.goBack();
    };

    const onQuantityChange = (newQuantity: number) => {
      setQuantity(newQuantity);
    };

    const {meal} = route.params;

    return (
      <View style={MealDetailsPageStyles.container}>
        <StatusBar backgroundColor="transparent" translucent />
        <ImageBackground
          source={{uri: meal?.mealImage}}
          style={MealDetailsPageStyles.imageBackground}
          imageStyle={MealDetailsPageStyles.image}>
          <BackButton style={MealDetailsPageStyles.backButton} />
        </ImageBackground>
        <View style={MealDetailsPageStyles.contentContainer}>
          <View style={MealDetailsPageStyles.headerContainer}>
            <BoldText
              style={MealDetailsPageStyles.mealName}
              numberOfLines={2}
              ellipsizeMode={'tail'}>
              {meal.name}
            </BoldText>
            <View style={MealDetailsPageStyles.pricesContainer}>
              <InitialPrice>{`${meal.initialPrice}`}</InitialPrice>
              <DiscountedPrice>{`${meal.discountedPrice}`}</DiscountedPrice>
            </View>
          </View>
          <SemiBoldText
            style={MealDetailsPageStyles.mealDescription}
            ellipsizeMode="tail"
            numberOfLines={8}>
            {meal.description}
          </SemiBoldText>
          <View style={MealDetailsPageStyles.buttonsContainer}>
            <View style={MealDetailsPageStyles.counterContainer}>
              <Counter
                initialQuantity={1}
                onQuantityChange={onQuantityChange}
                mealId={meal.id}
              />
            </View>
            <Button
              style={MealDetailsPageStyles.addToCartButton}
              onPress={onAddToCartPress}>
              {t('Add to cart')}
            </Button>
          </View>
        </View>
      </View>
    );
  },
);

export default MealDetailsPage;
