import {Dimensions, StyleSheet} from 'react-native';
import theme from '../../utils/theme';
import {OrderStatus} from '../../types/order.types';

const {height} = Dimensions.get('window');

export const OrderDetailsPageStyles = (orderStatus?: OrderStatus) =>
  StyleSheet.create({
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
      height: 115,
    },
    restaurantName: {
      fontWeight: 'bold',
      alignSelf: 'center',
      fontSize: 36,
    },
    content: {
      padding: 20,
    },
    contentContainer: {
      flex: 1,
      marginTop: 60,
      paddingHorizontal: 20,
    },
    dateAndStatusContainer: {
      maxWidth: '45%',
      justifyContent: 'space-between',
      marginTop: 20,
      marginLeft: 30,
    },
    statusContainer: {
      borderRadius: 10,
      alignSelf: 'flex-end',
      justifyContent: 'center',
      width: 90,
      backgroundColor:
        orderStatus === OrderStatus.PLACED
          ? theme.palette.yellow
          : theme.palette.green,
    },
    status: {
      fontSize: 12,
      color: theme.palette.white,
      padding: 5,
      textAlign: 'center',
      borderRadius: 10,
    },
    date: {
      color: theme.palette.textTertiary,
      fontSize: 12,
      textAlign: 'right',
    },
    dateContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    label: {
      fontSize: 15,
      color: theme.palette.textPrimary,
    },
    scrollView: {
      paddingTop: 40,
      marginLeft: 30,
      height: 80,
    },
    itemText: {
      fontSize: 20,
    },
    priceContainer: {
      marginBottom: 80,
      alignSelf: 'flex-end',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
    },
    total: {
      fontSize: 40,
      color: theme.palette.primary,
    },
    totalLabel: {
      fontSize: 30,
      color: theme.palette.primary,
    },
    bottomContainer: {
      marginTop: 'auto',
      marginBottom: 30,
    },
    feedbackContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 10,
    },
    feedbackLabel: {
      fontSize: 16,
      color: theme.palette.textTertiary,
    },
    feedback: {
      fontSize: 16,
      color: theme.palette.primary,
    },
  });
