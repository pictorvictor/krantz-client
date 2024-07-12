import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';

export const OrderSummaryPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.palette.backgroundGrey,
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  scrollView: {
    height: '100%',
  },
  orderSummaryContainer: {
    marginTop: 70,
    paddingVertical: 20,
    backgroundColor: theme.palette.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 8,
  },
  orderNumberContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderNumberText: {
    fontSize: 14,
  },
  orderId: {
    fontSize: 16,
    marginTop: -2,
    marginLeft: 20,
    color: theme.palette.primary,
  },
  section: {
    marginTop: 40,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 8,
  },
  orderItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  itemText: {
    maxWidth: 200,
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 16,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalLabel: {
    fontSize: 20,
    color: theme.palette.primary,
  },
  total: {
    fontSize: 18,
    color: theme.palette.primary,
  },
  pickupLocation: {
    fontSize: 14,
  },
  paymentOption: {
    fontSize: 14,
  },
  observations: {
    fontSize: 14,
    fontStyle: 'italic',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 10,
    zIndex: 2,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
