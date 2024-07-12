import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';

export const CartPageStyles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: theme.palette.backgroundGrey,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
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
    paddingHorizontal: 10,
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
    marginBottom: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  placeOrder: {
    flexGrow: 1,
  },
  observationsContainer: {
    marginTop: 20,
    height: 100,
    borderRadius: 20,
    backgroundColor: theme.palette.grey,
  },
  observations: {
    fontSize: 14,
    alignSelf: 'auto',
    height: '100%',
  },
  viewOrder: {
    marginLeft: 10,
  },
});
