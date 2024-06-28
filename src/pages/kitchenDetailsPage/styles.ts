import {Dimensions, StyleSheet} from 'react-native';
import theme from '../../utils/theme';

const {height} = Dimensions.get('window');

export const KitchenDetailsPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  imageBackground: {
    top: 0,
    width: '100%',
    height: height / 3.32 - 100,
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
  infoButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 2,
  },
  overlay: {
    padding: 10,
    width: '100%',
    bottom: -75,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    borderRadius: 20,
    backgroundColor: theme.palette.white,
    margin: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  restaurantName: {
    alignSelf: 'center',
    fontSize: 36,
    lineHeight: 40,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    alignSelf: 'flex-end',
  },
  rating: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  address: {
    fontStyle: 'italic',
    alignSelf: 'center',
    paddingBottom: 10,
    color: theme.palette.textSecondary,
    fontSize: 13,
  },
  content: {
    padding: 20,
  },
  contentContainer: {
    flex: 1,
    marginTop: 60,
    paddingHorizontal: 20,
  },
  pickupInfo: {
    fontStyle: 'italic',
    fontSize: 15,
    color: theme.palette.textTertiary,
  },
  pickupInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  infoIcon: {
    marginRight: 5,
  },
  mealContainer: {
    marginBottom: 20,
  },
});
