import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';

export const MealComponentStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: theme.palette.white,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 20,
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  mealName: {
    marginTop: 20,
    fontSize: 18,
    alignSelf: 'flex-start',
    textAlign: 'center',
  },
  mealDescription: {
    marginTop: 10,
    fontSize: 12,
    color: theme.palette.textTertiary,
    textAlign: 'left',
    lineHeight: 12,
  },
  pricesAndCounterContainer: {
    flexDirection: 'row',
    marginTop: 'auto',
  },
  pricesContainer: {
    marginBottom: 10,
  },
  counterContainer: {
    marginTop: 10,
    marginLeft: 'auto',
  },
});
