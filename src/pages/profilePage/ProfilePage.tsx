import {useStores} from '../../hooks/useStores';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {ProfilePageStyles} from './styles';
import {useTranslation} from 'react-i18next';
import {IconOutline} from '@ant-design/icons-react-native';
import React, {useEffect} from 'react';
import theme from '../../utils/theme';
import {BoldText, ExtraBoldText, SemiBoldText} from '../../components';
import OrderComponent from '../../components/orderComponent/OrderComponent';
import {observer} from 'mobx-react-lite';
import {Order} from '../../types/order.types';
import {useNavigation} from '@react-navigation/native';
import {Route} from '../../utils/enums';

const ProfilePage = observer(() => {
  const {userStore, orderStore} = useStores();
  const {t} = useTranslation();
  const navigation = useNavigation();

  useEffect(() => {
    orderStore.getMyOrders();
  }, [orderStore]);

  const onOrderPress = (order: Order) => {
    // @ts-ignore
    navigation.navigate(Route.OrderDetails, {order});
  };

  const onOptionsPress = () => {
    // @ts-ignore
    navigation.navigate(Route.ProfileOptions);
  };

  return (
    <View style={ProfilePageStyles.container}>
      <View style={ProfilePageStyles.profileContainer}>
        <View style={ProfilePageStyles.userInfo}>
          <ExtraBoldText style={ProfilePageStyles.userName}>
            {`${userStore.firstName} ${userStore.lastName}`}
          </ExtraBoldText>
          <SemiBoldText style={ProfilePageStyles.userEmail}>
            {userStore.email}
          </SemiBoldText>
        </View>
        <View style={ProfilePageStyles.iconsContainer}>
          <IconOutline
            name="edit"
            size={30}
            color={theme.palette.textSecondary}
          />
          <TouchableOpacity onPress={onOptionsPress}>
            <IconOutline
              name="setting"
              size={30}
              color={theme.palette.textSecondary}
            />
          </TouchableOpacity>
        </View>
      </View>
      <BoldText style={ProfilePageStyles.sectionTitle}>
        {t('My orders')}
      </BoldText>
      <ScrollView
        contentContainerStyle={ProfilePageStyles.ordersContainer}
        showsVerticalScrollIndicator={false}>
        {orderStore.orders.map(order => (
          <OrderComponent
            key={order.orderId}
            order={order}
            onPress={onOrderPress}
          />
        ))}
      </ScrollView>
    </View>
  );
});

export default ProfilePage;
