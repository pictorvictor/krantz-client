import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';

export const ProviderOrdersPageStyles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  orders: {
    paddingTop: 20,
    paddingHorizontal: 50,
  },
  ordersTitle: {
    fontSize: 50,
    lineHeight: 65,
    color: theme.palette.primary,
    marginBottom: 20,
  },
});

export const OrderItemStyles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  order: {
    backgroundColor: theme.palette.white,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  orderNumberContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  orderNumber: {
    color: theme.palette.primary,
  },
  dashedLine: {
    marginVertical: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  total: {
    color: theme.palette.textTertiary,
    fontSize: 18,
  },
  currency: {
    color: theme.palette.textTertiary,
    fontSize: 14,
  },
});
