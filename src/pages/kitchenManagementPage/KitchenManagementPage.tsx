import {observer} from 'mobx-react-lite';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView, View} from 'react-native';
import {ExtraBoldText, Multiselect} from '../../components';
import {useStores} from '../../hooks/useStores';
import {Order, OrderStatus} from '../../types/order.types';
import OrderItem from './OrderItem';
import {KitchenManagementPageStyles} from './styles';

const KitchenManagementPage = observer(() => {
  const {t} = useTranslation();
  const {kitchenStore, orderStore} = useStores();
  const [activeTabs, setActiveTab] = useState([OrderStatus.PLACED]);

  const tabs = [
    {value: OrderStatus.PLACED, label: t(OrderStatus.PLACED)},
    {value: OrderStatus.CONFIRMED, label: t(OrderStatus.CONFIRMED)},
    {value: OrderStatus.PICKED_UP, label: t(OrderStatus.PICKED_UP)},
  ];

  useEffect(() => {
    kitchenStore.getProviderKitchen();
    orderStore.getKitchenOrders();
  }, [orderStore, kitchenStore]);

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

  return (
    <View style={KitchenManagementPageStyles.container}>
      {/* <StatusBar backgroundColor="transparent" translucent /> */}
      {/* <ImageBackground
        source={{uri: kitchenStore.providerKitchen?.kitchenImage}}
        style={KitchenManagementPageStyles.imageBackground}
        imageStyle={KitchenManagementPageStyles.image}>
        <View style={KitchenManagementPageStyles.overlayContainer}>
          <View style={KitchenManagementPageStyles.overlay}>
            <BoldText style={KitchenManagementPageStyles.restaurantName}>
              {kitchenStore.providerKitchen?.name ?? ''}
            </BoldText>
            <Tabs
              onTabClick={tab =>
                setActiveTab(tab as {title: string; key: OrderStatus})
              }
              tabs={tabs}
              tabBarBackgroundColor={theme.palette.white}
              tabBarUnderlineStyle={{backgroundColor: theme.palette.primary}}
              tabBarTextStyle={KitchenManagementPageStyles.tabItemText}
            />
          </View>
        </View>
      </ImageBackground> */}
      <ExtraBoldText style={KitchenManagementPageStyles.ordersTitle}>
        {t('orders')}
      </ExtraBoldText>
      <Multiselect
        values={tabs}
        selectedValues={activeTabs}
        onValuePress={onTabChange}
        single
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={KitchenManagementPageStyles.orders}>
        {/* @ts-ignore */}
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

export default KitchenManagementPage;
