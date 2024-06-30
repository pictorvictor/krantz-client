import {
  BoldText,
  MealComponent,
  RadioGroup,
  SemiBoldText,
  Text,
  Button,
  Input,
} from '../../components';
import {ScrollView, View} from 'react-native';
import {CartPageStyles} from './styles';
import {useStores} from '../../hooks/useStores';
import {observer} from 'mobx-react-lite';
import {t} from 'i18next';
import {CartItem} from '../../types/cart.types';
import {enumToArray} from '../../utils/helpers';
import {PaymentMethod, Route} from '../../utils/enums';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

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
    <View style={CartPageStyles.container}>
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
    </View>
  );
});

export default CartPage;
