import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';

export const ButtonStyles = StyleSheet.create({
  buttonText: {
    color: theme.palette.white,
    fontSize: 20,
  },
  secondaryButton: {
    backgroundColor: theme.palette.backgroundGrey,
  },
  secondaryButtonText: {
    color: theme.palette.primary,
    fontSize: 20,
  },
});
