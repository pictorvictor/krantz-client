import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';

export const BackButtonStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.palette.white,
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
