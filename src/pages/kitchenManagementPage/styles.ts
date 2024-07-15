import {Dimensions, StyleSheet} from 'react-native';
import theme from '../../utils/theme';

const {height} = Dimensions.get('window');

export const KitchenManagementPageStyles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 30,
  },
  tabItemText: {
    fontFamily: 'Montserrat-Medium',
    textTransform: 'capitalize',
  },
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
  orders: {
    paddingTop: 20,
    paddingHorizontal: 30,
  },
  ordersTitle: {
    fontSize: 50,
    lineHeight: 65,
    color: theme.palette.primary,
    marginBottom: 20,
  },
});

export const OrderItemStyles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  order: {
    backgroundColor: theme.palette.white,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  orderNumberContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  orderNumber: {
    color: theme.palette.primary,
  },
  dashedLine: {
    marginVertical: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  total: {
    color: theme.palette.textTertiary,
    fontSize: 18,
  },
  currency: {
    color: theme.palette.textTertiary,
    fontSize: 14,
  },
});
