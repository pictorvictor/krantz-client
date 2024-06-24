import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {ImageBackground, ScrollView, StatusBar, View} from 'react-native';
import {
  Button,
  BackButton,
  BoldText,
  LightText,
  SemiBoldText,
  Text,
} from '../../components';
import {HomeStackParamList} from '../../navigation/HomeNavigator';
import {Route} from '../../utils/enums';
import {OrderDetailsPageStyles} from './styles';
import {useTranslation} from 'react-i18next';
import {useStores} from '../../hooks/useStores';
import {observer} from 'mobx-react-lite';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import {IconFill} from '@ant-design/icons-react-native';
import theme from '../../utils/theme';

const OrderDetailsPage = observer(
  ({route}: StackScreenProps<HomeStackParamList, Route.OrderDetails>) => {
    const {cartStore} = useStores();
    const {t} = useTranslation();
    const {order} = route.params;
    const navigation = useNavigation();

    const onAddToCart = () => {
      order.items.forEach(item => {
        cartStore.addToCart(
          {
            meal: item.meal,
            quantity: item.quantity,
          },
          order.kitchen,
        );
      });
      // @ts-ignore
      navigation.navigate(Route.Cart);
    };

    return (
      <View style={OrderDetailsPageStyles().container}>
        <StatusBar backgroundColor="transparent" translucent />
        <ImageBackground
          source={{uri: order?.kitchen.kitchenImage}}
          style={OrderDetailsPageStyles().imageBackground}
          imageStyle={OrderDetailsPageStyles().image}>
          <BackButton style={OrderDetailsPageStyles().backButton} />
          <View style={OrderDetailsPageStyles().overlay}>
            <View style={OrderDetailsPageStyles().detailsContainer}>
              <BoldText style={OrderDetailsPageStyles().restaurantName}>
                {order?.kitchen.name}
              </BoldText>
            </View>
          </View>
        </ImageBackground>
        <View style={OrderDetailsPageStyles().contentContainer}>
          <View style={OrderDetailsPageStyles().dateAndStatusContainer}>
            <View style={OrderDetailsPageStyles().dateContainer}>
              <SemiBoldText style={OrderDetailsPageStyles().label}>
                {t('Date')}
              </SemiBoldText>
              <Text style={OrderDetailsPageStyles().date}>
                {moment(order.createdAt).format('DD MMM [at] HH:mm')}
              </Text>
            </View>
            <View style={OrderDetailsPageStyles().dateContainer}>
              <SemiBoldText style={OrderDetailsPageStyles().label}>
                {t('Status')}
              </SemiBoldText>
              <View
                style={OrderDetailsPageStyles(order.status).statusContainer}>
                <Text style={OrderDetailsPageStyles().status}>
                  {t(order.status)}
                </Text>
              </View>
            </View>
          </View>
          <ScrollView style={OrderDetailsPageStyles().scrollView}>
            {order.items.map(item => (
              <BoldText
                style={OrderDetailsPageStyles().itemText}
                key={item.meal.id}>
                {`${item.quantity} x ${item.meal.name}`}
              </BoldText>
            ))}
          </ScrollView>
          <View style={OrderDetailsPageStyles().priceContainer}>
            <BoldText style={OrderDetailsPageStyles().total}>
              {`${order.totalPrice}`}
            </BoldText>
            <LightText style={OrderDetailsPageStyles().totalLabel}>
              {t('lei')}
            </LightText>
          </View>
          <View style={OrderDetailsPageStyles().bottomContainer}>
            <View style={OrderDetailsPageStyles().feedbackContainer}>
              <Text style={OrderDetailsPageStyles().feedbackLabel}>
                {t('Were you satisfied?')}
              </Text>
              <SemiBoldText style={OrderDetailsPageStyles().feedback}>
                {t('Leave a review!')}
              </SemiBoldText>
              <IconFill name="star" color={theme.palette.yellow} size={20} />
            </View>
            <Button onPress={onAddToCart}>
              {t('Add these items to cart')}
            </Button>
          </View>
        </View>
      </View>
    );
  },
);

export default OrderDetailsPage;
