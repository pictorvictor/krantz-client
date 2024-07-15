import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';

export const HomePageStyles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: theme.palette.backgroundGrey,
    flex: 1,
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
    marginTop: 20,
    marginBottom: 10,
  },
  contentContainer: {
    justifyContent: 'center',
    marginTop: 15,
  },
  yourFavouritesContainer: {
    marginTop: 10,
  },
  closestNearbyContainer: {
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
