import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';

export const DiscountedPriceStyles = StyleSheet.create({
  discountedPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  discountedPrice: {
    fontSize: 20,
    color: theme.palette.primary,
  },
  discountedCurrency: {
    fontSize: 12,
    color: theme.palette.primary,
  },
});
