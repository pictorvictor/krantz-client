import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';

export const CounterStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: theme.palette.grey,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 28,
    color: theme.palette.textTertiary,
    alignSelf: 'center',
    marginTop: -3,
  },
  quantityText: {
    fontSize: 20,
    width: 15,
    textAlign: 'center',
    color: theme.palette.textPrimary,
  },
});
