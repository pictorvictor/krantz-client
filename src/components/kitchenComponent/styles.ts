import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';

export const KitchenComponentStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
    overflow: 'hidden',
    width: '42%',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  name: {
    fontSize: 13,
  },
  rating: {
    fontSize: 13,
  },
  hours: {
    color: theme.palette.textSecondary,
    fontSize: 10,
    fontStyle: 'italic',
    marginLeft: 2,
  },
  hoursContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
