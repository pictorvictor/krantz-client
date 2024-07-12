import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';

export const SearchPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: theme.palette.backgroundGrey,
  },
  searchInput: {
    marginBottom: 10,
  },
  kitchensContainer: {
    flex: 1,
    marginTop: 25,
  },
});
