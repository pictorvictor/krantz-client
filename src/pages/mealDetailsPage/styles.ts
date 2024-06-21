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
});
