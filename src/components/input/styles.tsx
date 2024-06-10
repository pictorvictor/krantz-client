import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';

export const InputStyles = StyleSheet.create({
  inputContainer: {
    backgroundColor: theme.palette.grey,
    borderRadius: 15,
    color: theme.palette.textSecondary,
    alignSelf: 'stretch',
    paddingLeft: 20,
    borderBottomWidth: 0,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
  },
});
