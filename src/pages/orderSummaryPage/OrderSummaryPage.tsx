import React from 'react';
import {View, ScrollView} from 'react-native';
import {observer} from 'mobx-react-lite';
import {BoldText, Text, BackButton, LightText} from '../../components';
import {useStores} from '../../hooks/useStores';
import {t} from 'i18next';
import {OrderSummaryPageStyles} from './styles';

const OrderSummaryPage = observer(() => {
  const {cartStore} = useStores();
  const order = cartStore.orderSummary;

  if (!order) {
    return null;
  }

  return (
    <View style={OrderSummaryPageStyles.container}>
      <BackButton style={OrderSummaryPageStyles.backButton} />
      <ScrollView style={OrderSummaryPageStyles.scrollView}>
        <View style={OrderSummaryPageStyles.orderSummaryContainer}>
          <BoldText style={OrderSummaryPageStyles.title}>
            {t('Order placed successfully!')}
          </BoldText>
          <View style={OrderSummaryPageStyles.orderNumberContainer}>
            <Text style={OrderSummaryPageStyles.orderNumberText}>
              {t('No.')}
            </Text>
            <BoldText style={OrderSummaryPageStyles.orderId}>
              {`${order.orderId}`}
            </BoldText>
          </View>
          <View style={OrderSummaryPageStyles.section}>
            <BoldText style={OrderSummaryPageStyles.sectionTitle}>
              {t('Order items')}
            </BoldText>
            {order.items.map(item => (
              <View
                style={OrderSummaryPageStyles.orderItemContainer}
                key={item.meal.id}>
                <Text
                  style={OrderSummaryPageStyles.itemText}
                  numberOfLines={1}
                  ellipsizeMode="tail">
                  {`${item.quantity} x ${item.meal.name}`}
                </Text>
                <View style={OrderSummaryPageStyles.priceContainer}>
                  <BoldText style={OrderSummaryPageStyles.itemPrice}>
                    {`${item.unitPrice}`}
                  </BoldText>
                  <LightText style={OrderSummaryPageStyles.itemPrice}>
                    {t('lei')}
                  </LightText>
                </View>
              </View>
            ))}
          </View>
          <View style={OrderSummaryPageStyles.section}>
            <View style={OrderSummaryPageStyles.totalContainer}>
              <BoldText style={OrderSummaryPageStyles.totalLabel}>
                {t('TOTAL')}
              </BoldText>
              <View style={OrderSummaryPageStyles.priceContainer}>
                <BoldText style={OrderSummaryPageStyles.total}>
                  {`${order.totalPrice}`}
                </BoldText>
                <LightText style={OrderSummaryPageStyles.total}>
                  {t('lei')}
                </LightText>
              </View>
            </View>
          </View>
          <View style={OrderSummaryPageStyles.section}>
            <BoldText style={OrderSummaryPageStyles.sectionTitle}>
              {t('Pick-up location')}
            </BoldText>
            <Text style={OrderSummaryPageStyles.pickupLocation}>
              {order.address}
            </Text>
          </View>
          <View style={OrderSummaryPageStyles.section}>
            <BoldText style={OrderSummaryPageStyles.sectionTitle}>
              {t('Payment option')}
            </BoldText>
            <Text style={OrderSummaryPageStyles.paymentOption}>
              {t(order.paymentMethod)}
            </Text>
          </View>
          <View style={OrderSummaryPageStyles.section}>
            <BoldText style={OrderSummaryPageStyles.sectionTitle}>
              {t('Observations')}
            </BoldText>
            <Text style={OrderSummaryPageStyles.observations}>
              {order.observations || t('No observations')}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
});

export default OrderSummaryPage;
