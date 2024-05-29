import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';

export const TextStyles = StyleSheet.create({
  medium: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 18,
    color: theme.palette.textPrimary,
  },
  bold: {
    fontFamily: 'Montserrat-Bold',
  },
  extraBold: {
    fontFamily: 'Montserrat-ExtraBold',
  },
  semiBold: {
    fontFamily: 'Montserrat-SemiBold',
  },
  light: {
    fontFamily: 'Montserrat-Light',
  },
  regular: {
    fontFamily: 'Montserrat-Regular',
  },
});
