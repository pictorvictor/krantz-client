import {IconOutline} from '@ant-design/icons-react-native';
import {useNavigation} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {StatusBar, TouchableOpacity, View} from 'react-native';
import {
  BackButton,
  BoldText,
  Button,
  SemiBoldText,
  Text,
} from '../../components';
import {useStores} from '../../hooks/useStores';
import {Route} from '../../utils/enums';
import theme from '../../utils/theme';
import {ProfileOptionsPageStyles} from './styles';

const ProfileOptionsPage = observer(() => {
  const {authStore} = useStores();
  const {t} = useTranslation();
  const navigation = useNavigation();

  const onLogout = () => {
    authStore.logout();
  };

  const onBecomeOurPartnerPress = () =>
    // @ts-ignore
    navigation.navigate(Route.BecomeOurPartner);

  const onStatisticsPress = () =>
    // @ts-ignore
    navigation.navigate(Route.Statistics);

  return (
    <View style={ProfileOptionsPageStyles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.palette.backgroundGrey}
      />
      <BackButton style={ProfileOptionsPageStyles.backButton} />
      <View style={ProfileOptionsPageStyles.contentContainer}>
        <View style={ProfileOptionsPageStyles.section}>
          <View style={ProfileOptionsPageStyles.iconContainer}>
            <SemiBoldText style={ProfileOptionsPageStyles.dollar}>
              $
            </SemiBoldText>
          </View>
          <BoldText style={ProfileOptionsPageStyles.label}>
            {t('Payment details')}
          </BoldText>
        </View>
        <View style={ProfileOptionsPageStyles.cardContainer}>
          <SemiBoldText style={ProfileOptionsPageStyles.cardType}>
            {'Visa'}
          </SemiBoldText>
          <SemiBoldText style={ProfileOptionsPageStyles.cardInfo}>
            {'0000 0000 0000 0000'}
          </SemiBoldText>
          <View style={ProfileOptionsPageStyles.cardHolderAndExpiryContainer}>
            <Text style={ProfileOptionsPageStyles.cardInfo}>{'John Doe'}</Text>
            <Text style={ProfileOptionsPageStyles.cardInfo}>{'09/28'}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={ProfileOptionsPageStyles.section}
          onPress={onBecomeOurPartnerPress}>
          <View style={ProfileOptionsPageStyles.iconContainer}>
            <IconOutline name="usergroup-add" size={24} />
          </View>
          <BoldText style={ProfileOptionsPageStyles.label}>
            {t('Become a partner')}
          </BoldText>
        </TouchableOpacity>
        <View style={ProfileOptionsPageStyles.section}>
          <View style={ProfileOptionsPageStyles.iconContainer}>
            <IconOutline name="info-circle" size={24} />
          </View>
          <BoldText style={ProfileOptionsPageStyles.label}>
            {t('About us')}
          </BoldText>
        </View>
        <TouchableOpacity
          style={ProfileOptionsPageStyles.section}
          onPress={onStatisticsPress}>
          <View style={ProfileOptionsPageStyles.iconContainer}>
            <IconOutline name="bar-chart" size={24} />
          </View>
          <BoldText style={ProfileOptionsPageStyles.label}>
            {t('statistics')}
          </BoldText>
        </TouchableOpacity>
      </View>
      <Button style={ProfileOptionsPageStyles.logoutButton} onPress={onLogout}>
        {t('Log out')}
      </Button>
    </View>
  );
});

export default ProfileOptionsPage;
