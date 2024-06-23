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
import {PaymentMethod} from '../../utils/enums';
import {useState} from 'react';

const CartPage = observer(() => {
  const {cartStore} = useStores();
  const [observations, setObservations] = useState('');

  const onPlaceOrder = () => {
    console.log(cartStore.cart?.cartItems);
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
            <RadioGroup options={enumToArray(PaymentMethod)} />
          </View>
        </View>
        <View style={CartPageStyles.observationsContainer}>
          <Input
            value={observations}
            onChangeText={onObservationsChange}
            placeholder={t('Observations')}
            style={CartPageStyles.observations}
          />
        </View>
      </ScrollView>
      <View style={CartPageStyles.placeOrderContainer}>
        <Button style={CartPageStyles.placeOrder} onPress={onPlaceOrder}>
          {t('Place order')}
        </Button>
      </View>
    </View>
  );
});

export default CartPage;
