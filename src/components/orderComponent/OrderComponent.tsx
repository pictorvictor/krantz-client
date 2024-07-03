import {t} from 'i18next';
import moment from 'moment';
import React from 'react';
import {
  GestureResponderEvent,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import {Order, OrderStatus} from '../../types/order.types';
import theme from '../../utils/theme';
import {
  BoldText,
  IconButton,
  LightText,
  RegularText,
  SemiBoldText,
} from '../index';
import {OrderComponentStyles} from './styles';

interface OrderComponentProps {
  order: Order;
  onPress?: (order: Order) => void;
  onArrowPress?: () => void;
  noPicture?: boolean;
}

const OrderComponent: React.FC<OrderComponentProps> = ({
  order,
  onPress,
  onArrowPress,
  noPicture,
}) => {
  const handlePress = (_event: GestureResponderEvent) => {
    if (onPress) {
      onPress(order);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} disabled={!onPress}>
      <View style={OrderComponentStyles(undefined, noPicture).container}>
        {!noPicture && (
          <Image
            source={{uri: order.kitchen.kitchenImage}}
            style={OrderComponentStyles().image}
          />
        )}
        <View style={OrderComponentStyles(undefined, noPicture).infoContainer}>
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
            {!noPicture && (
              <View style={OrderComponentStyles().statusAndDateContainer}>
                <RegularText style={OrderComponentStyles().date}>
                  {moment(order.createdAt).format('D MMM [at] HH:mm')}
                </RegularText>
                <View
                  style={OrderComponentStyles(order.status).statusContainer}>
                  <SemiBoldText style={OrderComponentStyles().status}>
                    {t(order.status)}
                  </SemiBoldText>
                </View>
              </View>
            )}
          </View>
        </View>
        {noPicture && order.status !== OrderStatus.PICKED_UP && (
          <IconButton
            backgroundColor={theme.palette.primary}
            iconColor={theme.palette.white}
            iconName="right"
            onPress={onArrowPress as any}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default OrderComponent;
