import {StyleSheet} from 'react-native';
import theme from './src/utils/theme';

export const AppStyles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: theme.palette.backgroundGrey,
  },
  container: {
    flex: 1,
    backgroundColor: theme.palette.backgroundGrey,
  },
});
