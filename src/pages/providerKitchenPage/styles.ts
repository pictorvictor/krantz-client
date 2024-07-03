import {Dimensions, StyleSheet} from 'react-native';
import theme from '../../utils/theme';

const {height} = Dimensions.get('window');

export const ProviderKitchenPageStyles = StyleSheet.create({
  container: {},
  imageBackground: {
    width: '100%',
    height: height / 3.32 - 50,
    position: 'relative',
  },
  image: {
    resizeMode: 'cover',
  },
  overlayContainer: {
    width: '100%',
    bottom: -40,
    position: 'absolute',
    alignItems: 'center',
  },
  overlay: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 30,
    width: '90%',
    backgroundColor: theme.palette.white,
    borderRadius: 20,
  },
  restaurantName: {
    alignSelf: 'center',
    fontSize: 36,
    lineHeight: 50,
  },
});
