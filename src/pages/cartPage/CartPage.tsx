import {useNavigation} from '@react-navigation/native';
import {t} from 'i18next';
import {observer} from 'mobx-react-lite';
import React, {useState} from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  BoldText,
  Button,
  Input,
  MealComponent,
  RadioGroup,
  SemiBoldText,
  Text,
} from '../../components';
import {useStores} from '../../hooks/useStores';
import {CartItem} from '../../types/cart.types';
import {PaymentMethod, Route} from '../../utils/enums';
import {enumToArray} from '../../utils/helpers';
import theme from '../../utils/theme';
import {CartPageStyles} from './styles';

const CartPage = observer(() => {
  const {cartStore} = useStores();
  const [observations, setObservations] = useState(
    cartStore.cart?.observations as string,
  );
  const [paymentMethod, setPaymentMethod] = useState(
    cartStore.cart?.paymentMethod,
  );
  const navigation = useNavigation();

  const onPlaceOrder = () => {
    if (!cartStore.orderSummary) {
      cartStore.placeOrder().then(() => {
        // @ts-ignore
        navigation.navigate(Route.OrderSummary);
      });
    } else {
      cartStore.clearCart();
      // @ts-ignore
      navigation.navigate(Route.HomePage);
    }
  };

  const onViewOrder = () => {
    // @ts-ignore
    navigation.navigate(Route.OrderSummary);
  };

  const onPaymentMethodChange = (newPaymentMethod: PaymentMethod) => {
    setPaymentMethod(newPaymentMethod);
    cartStore.setPaymentMethod(paymentMethod as PaymentMethod);
  };

  const onObservationsChange = (newObservations: string) => {
    setObservations(newObservations);
    cartStore.setObservations(newObservations);
  };

  const onQuantityChange = (newQuantity: number, mealId: string) => {
    cartStore.setQuantity(newQuantity, mealId);
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={CartPageStyles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.palette.backgroundGrey}
      />
      <BoldText style={CartPageStyles.kitchenName}>
        {cartStore.cart?.kitchen.name as string}
      </BoldText>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={CartPageStyles.cartItemsContainer}>
        <View style={CartPageStyles.pickupLocationContainer}>
          <BoldText style={CartPageStyles.pickupLocationText}>
            {t('Pick-up location')}
          </BoldText>
          <Text style={CartPageStyles.pickupLocation}>
            {cartStore.cart?.kitchen.address as string}
          </Text>
        </View>
        {cartStore.cart?.cartItems.map((cartItem: CartItem) => (
          <View style={CartPageStyles.cartItemContainer} key={cartItem.meal.id}>
            <MealComponent
              meal={cartItem.meal}
              initialQuantity={cartItem.quantity}
              onQuantityChange={onQuantityChange}
              showCounter={true}
            />
          </View>
        ))}
        <View style={CartPageStyles.paymentMethodContainer}>
          <SemiBoldText style={CartPageStyles.paymentMethod}>
            {t('Payment method')}
          </SemiBoldText>
          <View style={CartPageStyles.radioGroupContainer}>
            <RadioGroup
              options={enumToArray(PaymentMethod)}
              onChange={onPaymentMethodChange}
            />
          </View>
        </View>
        <View style={CartPageStyles.observationsContainer}>
          <Input
            value={observations}
            onChangeText={onObservationsChange}
            placeholder={t('Observations')}
            style={CartPageStyles.observations}
            numberOfLines={1}
            multiline
          />
        </View>
      </ScrollView>
      <View style={CartPageStyles.placeOrderContainer}>
        <Button style={CartPageStyles.placeOrder} onPress={onPlaceOrder}>
          {cartStore.orderSummary ? t('Place new order') : t('Place order')}
        </Button>
        {cartStore.orderSummary && (
          <Button style={CartPageStyles.viewOrder} onPress={onViewOrder}>
            {t('View order')}
          </Button>
        )}
      </View>
    </KeyboardAwareScrollView>
  );
});

export default CartPage;
