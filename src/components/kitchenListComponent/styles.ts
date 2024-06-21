import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';

export const KitchenListComponentStyles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  textLabel: {
    fontSize: 14,
    color: theme.palette.textPrimary,
  },
  headerContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  kitchenComponentSpacing: {
    marginRight: 15,
    height: 190,
  },
});
