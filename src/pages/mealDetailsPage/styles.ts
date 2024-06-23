import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../utils/theme';

const {height} = Dimensions.get('window');

export const MealDetailsPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  imageBackground: {
    top: 0,
    width: '100%',
    height: height / 2.27 - 100,
    justifyContent: 'flex-end',
  },
  image: {
    resizeMode: 'cover',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 2,
  },
  contentContainer: {
    backgroundColor: theme.palette.backgroundGrey,
    padding: 20,
    marginTop: 10,
    flexGrow: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  pricesContainer: {
    flexDirection: 'row',
  },
  mealName: {
    fontSize: 18,
  },
  mealDescription: {
    marginTop: 20,
    fontSize: 15,
    color: theme.palette.textTertiary,
    textAlign: 'left',
  },
  buttonsContainer: {
    justifyContent: 'flex-end',
    marginBottom: 10,
    flex: 1,
  },
  counterContainer: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  addToCartButton: {
    alignSelf: 'stretch',
  },
});
