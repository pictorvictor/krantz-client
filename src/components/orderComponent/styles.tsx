import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';
import {OrderStatus} from '../../types/order.types';

export const OrderComponentStyles = (orderStatus?: OrderStatus) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.palette.white,
      borderRadius: 20,
      marginBottom: 20,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.1,
      shadowRadius: 2,
    },
    image: {
      width: 150,
      height: 150,
      borderRadius: 20,
    },
    infoContainer: {
      marginTop: 20,
      flex: 1,
      paddingHorizontal: 10,
    },
    kitchenName: {
      fontSize: 18,
      marginBottom: 10,
    },
    itemText: {
      fontSize: 12,
      color: theme.palette.textTertiary,
    },
    pricesAndStatusContainer: {
      flex: 1,
      width: '100%',
      alignSelf: 'flex-start',
      justifyContent: 'space-between',
      flexDirection: 'row',
      marginTop: 10,
    },
    priceContainer: {
      flexDirection: 'row',
      marginBottom: 20,
      marginTop: 'auto',
    },
    total: {
      color: theme.palette.primary,
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
      marginBottom: 10,
    },
    status: {
      fontSize: 12,
      color: theme.palette.white,
      padding: 5,
      textAlign: 'center',
      borderRadius: 10,
      textTransform: 'uppercase',
    },
    date: {
      color: theme.palette.textTertiary,
      fontSize: 10,
      textAlign: 'right',
    },
    statusAndDateContainer: {
      alignSelf: 'flex-end',
    },
  });
