import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';

export const CartPageStyles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: theme.palette.backgroundGrey,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  kitchenName: {
    fontSize: 31,
    color: theme.palette.textPrimary,
  },
  pickupLocationContainer: {
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
  },
  pickupLocationText: {
    fontSize: 20,
  },
  pickupLocation: {
    marginTop: 10,
    fontSize: 15,
  },
  cartItemsContainer: {
    marginTop: 20,
    width: '100%',
  },
  cartItemContainer: {
    width: '100%',
    marginTop: 20,
  },
  paymentMethodContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  paymentMethod: {
    fontSize: 18,
  },
  radioGroupContainer: {
    marginTop: 10,
  },
  placeOrderContainer: {
    alignSelf: 'center',
    paddingBottom: 20,
    width: '100%',
  },
  placeOrder: {
    // flexGrow: 1,
  },
  observationsContainer: {
    paddingVertical: 30,
  },
  observations: {
    height: 100,
    fontSize: 14,
    textAlignVertical: 'top',
  },
});
