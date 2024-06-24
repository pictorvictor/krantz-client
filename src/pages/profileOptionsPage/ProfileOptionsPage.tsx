import {ProfileOptionsPageStyles} from './styles';
import {useTranslation} from 'react-i18next';
import {IconOutline} from '@ant-design/icons-react-native';
import React from 'react';
import {
  BackButton,
  BoldText,
  Button,
  SemiBoldText,
  Text,
} from '../../components';
import {observer} from 'mobx-react-lite';
import {View} from 'react-native';
import {useStores} from '../../hooks/useStores';

const ProfileOptionsPage = observer(() => {
  const {authStore} = useStores();
  const {t} = useTranslation();

  const onLogout = () => {
    authStore.logout();
  };

  return (
    <View style={ProfileOptionsPageStyles.container}>
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
        <View style={ProfileOptionsPageStyles.section}>
          <View style={ProfileOptionsPageStyles.iconContainer}>
            <IconOutline name="usergroup-add" size={24} />
          </View>
          <BoldText style={ProfileOptionsPageStyles.label}>
            {t('Become a partner')}
          </BoldText>
        </View>
        <View style={ProfileOptionsPageStyles.section}>
          <View style={ProfileOptionsPageStyles.iconContainer}>
            <IconOutline
              name="info"
              size={30}
              style={ProfileOptionsPageStyles.bold}
            />
          </View>
          <BoldText style={ProfileOptionsPageStyles.label}>
            {t('About us')}
          </BoldText>
        </View>
      </View>
      <Button style={ProfileOptionsPageStyles.logoutButton} onPress={onLogout}>
        {t('Log out')}
      </Button>
    </View>
  );
});

export default ProfileOptionsPage;
