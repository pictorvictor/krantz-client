import {t} from 'i18next';
import moment from 'moment';
import React from 'react';
import {
  GestureResponderEvent,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import {Order} from '../../types/order.types';
import {BoldText, LightText, RegularText, SemiBoldText} from '../index';
import {OrderComponentStyles} from './styles';

interface OrderComponentProps {
  order: Order;
  onPress?: (order: Order) => void;
}

const OrderComponent: React.FC<OrderComponentProps> = ({order, onPress}) => {
  const handlePress = (_event: GestureResponderEvent) => {
    if (onPress) {
      onPress(order);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} disabled={!onPress}>
      <View style={OrderComponentStyles(undefined).container}>
        <Image
          source={{uri: order.kitchen.kitchenImage}}
          style={OrderComponentStyles().image}
        />
        <View style={OrderComponentStyles(undefined).infoContainer}>
          <BoldText
            style={OrderComponentStyles().kitchenName}
            numberOfLines={1}
            ellipsizeMode={'tail'}>
            {order.kitchen?.name}
          </BoldText>
          {order.items.slice(0, 2).map(item => (
            <SemiBoldText
              key={item.meal?.id}
              style={OrderComponentStyles().itemText}
              numberOfLines={1}
              ellipsizeMode="tail">
              {`${item.quantity} x ${item.meal?.name}`}
            </SemiBoldText>
          ))}
          {order.items.length > 2 && (
            <SemiBoldText style={OrderComponentStyles().itemText}>
              {`+ ${order.items.length - 2} more`}
            </SemiBoldText>
          )}
          <View style={OrderComponentStyles().pricesAndStatusContainer}>
            <View style={OrderComponentStyles().priceContainer}>
              <BoldText style={OrderComponentStyles().total}>
                {`${order.totalPrice}`}
              </BoldText>
              <LightText style={OrderComponentStyles().total}>
                {t('lei')}
              </LightText>
            </View>
            <View style={OrderComponentStyles().statusAndDateContainer}>
              <RegularText style={OrderComponentStyles().date}>
                {moment(order.createdAt).format('D MMM [at] HH:mm')}
              </RegularText>
              <View style={OrderComponentStyles(order.status).statusContainer}>
                <SemiBoldText style={OrderComponentStyles().status}>
                  {t(order.status)}
                </SemiBoldText>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OrderComponent;
