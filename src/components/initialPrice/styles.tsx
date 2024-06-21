import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';

export const InitialPriceStyles = StyleSheet.create({
  initialPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  initialPrice: {
    fontSize: 12,
    color: theme.palette.textTertiary,
    textDecorationLine: 'line-through',
  },
  initialCurrency: {
    fontSize: 10,
    color: theme.palette.textTertiary,
    textDecorationLine: 'line-through',
  },
});
