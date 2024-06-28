import {Tabs} from '@ant-design/react-native';
import {observer} from 'mobx-react-lite';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {ImageBackground, ScrollView, StatusBar, View} from 'react-native';
import {BoldText} from '../../components';
import OrderComponent from '../../components/orderComponent/OrderComponent';
import {useStores} from '../../hooks/useStores';
import {Order, OrderStatus} from '../../types/order.types';
import theme from '../../utils/theme';
import {KitchenManagementPageStyles} from './styles';

const KitchenManagementPage = observer(() => {
  const {t} = useTranslation();
  const {kitchenStore, orderStore} = useStores();
  const [activeTab, setActiveTab] = useState({
    key: OrderStatus.PLACED,
    title: t(OrderStatus.PLACED),
  });

  const tabs = [
    {key: OrderStatus.PLACED, title: t(OrderStatus.PLACED)},
    {key: OrderStatus.CONFIRMED, title: t(OrderStatus.CONFIRMED)},
    {key: OrderStatus.PICKED_UP, title: t(OrderStatus.PICKED_UP)},
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

  return (
    <View style={KitchenManagementPageStyles.container}>
      <StatusBar backgroundColor="transparent" translucent />
      <ImageBackground
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
      </ImageBackground>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={KitchenManagementPageStyles.orders}>
        {/* @ts-ignore */}
        {orderStore.kitchenOrders?.[activeTab?.key]?.map((order: Order) => (
          <OrderComponent
            order={order}
            key={order.orderId}
            noPicture
            onArrowPress={updateOrderStatus(order)}
          />
        ))}
      </ScrollView>
    </View>
  );
});

export default KitchenManagementPage;
