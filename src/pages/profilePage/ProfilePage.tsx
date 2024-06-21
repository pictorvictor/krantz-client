import {useStores} from '../../hooks/useStores';
import {View} from 'react-native';
import {ProfilePageStyles} from './styles';
import {useTranslation} from 'react-i18next';
import {IconOutline} from '@ant-design/icons-react-native';
import React from 'react';
import theme from '../../utils/theme';
import {BoldText, Button, ExtraBoldText, SemiBoldText} from '../../components';

const ProfilePage = () => {
  const {userStore, authStore} = useStores();
  const {t} = useTranslation();

  const onLogoutPress = () => {
    authStore.logout();
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
          <IconOutline
            name="setting"
            size={30}
            color={theme.palette.textSecondary}
          />
        </View>
      </View>
      <BoldText style={ProfilePageStyles.sectionTitle}>
        {t('My orders')}
      </BoldText>
      {/* <ScrollView contentContainerStyle={ProfilePageStyles.ordersContainer}>
        {orders.map(order => (
          <OrderItem key={order.id} order={order} />
        ))}
      </ScrollView> */}
      <Button onPress={onLogoutPress} style={ProfilePageStyles.logoutButton}>
        {t('Logout')}
      </Button>
    </View>
  );
};

export default ProfilePage;
