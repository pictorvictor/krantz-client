import {t} from 'i18next';
import React from 'react';
import {View} from 'react-native';
import Svg from 'react-native-svg';
import {
  BoldText,
  DashedLine,
  IconButton,
  LightText,
  RegularText,
  SemiBoldText,
  ZigZagBorder,
} from '../../components';
import {Order} from '../../types/order.types';
import {OrderItemStyles} from './styles';
import theme from '../../utils/theme';

const OrderItem = ({
  order,
  onArrowPress,
}: {
  order: Order;
  onArrowPress: () => void;
}) => {
  return (
    <View style={OrderItemStyles.container}>
      <View style={OrderItemStyles.order}>
        <View style={OrderItemStyles.orderNumberContainer}>
          <RegularText>{t('orderNo')}</RegularText>
          <BoldText
            style={OrderItemStyles.orderNumber}>{`${order.orderId}`}</BoldText>
        </View>
        {order.items?.map(item => (
          <SemiBoldText
            numberOfLines={
              1
            }>{`${item?.quantity} x ${item?.meal?.name}`}</SemiBoldText>
        ))}
        <DashedLine style={OrderItemStyles.dashedLine} />
        <View style={OrderItemStyles.footer}>
          <View style={OrderItemStyles.priceContainer}>
            <BoldText style={OrderItemStyles.total}>
              {`${order.totalPrice}`}
            </BoldText>
            <LightText style={OrderItemStyles.currency}>{t('lei')}</LightText>
          </View>
          <IconButton
            iconColor={theme.palette.white}
            iconName="right"
            iconSize={20}
            backgroundColor={theme.palette.primary}
            onPress={onArrowPress}
          />
        </View>
      </View>
      <Svg height={10}>
        <ZigZagBorder />
      </Svg>
    </View>
  );
};

export default OrderItem;
