import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';

export const HomePageStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  welcomeLabel: {
    fontSize: 30,
    color: theme.palette.textTertiary,
  },
  firstName: {
    fontSize: 60,
    lineHeight: 65,
    color: theme.palette.primary,
  },
  searchInput: {
    marginBottom: 10,
  },
});
