import {useNavigation} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {ExtraBoldText, IconButton, Multiselect} from '../../components';
import {useStores} from '../../hooks/useStores';
import {Order, OrderStatus} from '../../types/order.types';
import {Route} from '../../utils/enums';
import OrderItem from './OrderItem';
import {ProviderOrdersPageStyles} from './styles';

const ProviderOrdersPage = observer(() => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {orderStore} = useStores();
  const [activeTabs, setActiveTab] = useState([OrderStatus.PLACED]);

  const tabs = [
    {value: OrderStatus.PLACED, label: t(OrderStatus.PLACED)},
    {value: OrderStatus.CONFIRMED, label: t(OrderStatus.CONFIRMED)},
    {value: OrderStatus.PICKED_UP, label: t(OrderStatus.PICKED_UP)},
  ];

  useEffect(() => {
    orderStore.getKitchenOrders();
  }, [orderStore]);

  const updateOrderStatus = (order: Order) => () => {
    orderStore.updateOrderStatus(
      order.orderId,
      order.status === OrderStatus.PLACED
        ? OrderStatus.CONFIRMED
        : OrderStatus.PICKED_UP,
    );
    orderStore.getKitchenOrders();
  };

  const onTabChange = (value: string) => {
    setActiveTab([value as OrderStatus]);
  };

  const onProviderKitchenPress = () =>
    // @ts-ignore
    navigation.navigate(Route.ProviderKitchen);

  return (
    <View style={ProviderOrdersPageStyles.container}>
      <View style={ProviderOrdersPageStyles.headerContainer}>
        <ExtraBoldText style={ProviderOrdersPageStyles.ordersTitle}>
          {t('orders')}
        </ExtraBoldText>
        <TouchableOpacity onPress={onProviderKitchenPress}>
          <IconButton iconName="shop" />
        </TouchableOpacity>
      </View>
      <Multiselect
        values={tabs}
        selectedValues={activeTabs}
        onValuePress={onTabChange}
        single
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={ProviderOrdersPageStyles.orders}>
        {orderStore.kitchenOrders?.[activeTabs?.[0]]?.map((order: Order) => (
          <OrderItem
            order={order}
            key={order.orderId}
            onArrowPress={updateOrderStatus(order)}
          />
        ))}
      </ScrollView>
    </View>
  );
});

export default ProviderOrdersPage;
