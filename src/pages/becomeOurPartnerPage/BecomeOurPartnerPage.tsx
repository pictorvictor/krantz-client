import {t} from 'i18next';
import {isEmpty} from 'lodash';
import {observer} from 'mobx-react-lite';
import {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {
  BackButton,
  BoldText,
  Button,
  Input,
  Multiselect,
  SemiBoldText,
  Text,
} from '../../components';
import {useStores} from '../../hooks/useStores';
import {Kitchen, KitchenType} from '../../types/kitchen.types';
import {BecomeOurPartnerPageStyles} from './styles';

const BecomeOurPartnerPage = observer(() => {
  const {kitchenStore} = useStores();
  const [fields, setFields] = useState<
    Omit<Kitchen, 'id' | 'kitchenImage' | 'workingHours' | 'rating'>
  >({
    name: '',
    description: '',
    types: [],
    contactEmail: '',
    contactPhone: '',
    companyName: '',
    companyCUI: '',
    companyAddress: '',
    companyRegCom: '',
    address: '',
  });

  useEffect(() => {
    if (isEmpty(kitchenStore.kitchenTypes)) {
      kitchenStore.getKitchenTypes();
    }
  }, [kitchenStore]);

  const onFieldChange = (field: string) => (value: string | KitchenType) => {
    setFields(currentFields => {
      let newValue: {[field: string]: string | KitchenType[]} = {
        [field]: value,
      };
      if (field === 'types') {
        if (fields.types?.includes(value as KitchenType)) {
          newValue = {types: fields.types.filter(type => type !== value)};
        } else {
          newValue = {types: [...currentFields.types, value as KitchenType]};
        }
      }
      return {...currentFields, ...newValue};
    });
  };

  const onPress = () => {
    kitchenStore.becomeOurPartner(fields);
  };

  return (
    <ScrollView contentContainerStyle={BecomeOurPartnerPageStyles.container}>
      <BackButton />
      <BoldText style={BecomeOurPartnerPageStyles.title}>
        {t('becomeOurPartner')}
      </BoldText>
      <Text style={BecomeOurPartnerPageStyles.description}>
        {t('doYouHaveLeftoverFood')}
      </Text>

      <BoldText style={BecomeOurPartnerPageStyles.sectionTitle}>
        {t('generalInfo')}
      </BoldText>
      <Input
        value={fields.name}
        onChangeText={onFieldChange('name')}
        placeholder={t('restaurantName')}
        style={BecomeOurPartnerPageStyles.field}
      />
      <Input
        value={fields.description}
        onChangeText={onFieldChange('description')}
        placeholder={t('description')}
        style={BecomeOurPartnerPageStyles.field}
        multiline
        numberOfLines={3}
      />
      <SemiBoldText style={BecomeOurPartnerPageStyles.typesLabel}>
        {t('restaurantTypes')}
      </SemiBoldText>
      <Multiselect
        selectedValues={fields.types}
        values={kitchenStore.kitchenTypes.map(type => ({
          value: type,
          label: t(`kitchenTypes.${type}`),
        }))}
        onValuePress={onFieldChange('types')}
      />

      <BoldText style={BecomeOurPartnerPageStyles.sectionTitle}>
        {t('contact')}
      </BoldText>
      <Input
        value={fields.contactEmail}
        onChangeText={onFieldChange('contactEmail')}
        placeholder={t('email')}
        style={BecomeOurPartnerPageStyles.field}
      />
      <Input
        value={fields.contactPhone}
        onChangeText={onFieldChange('contactPhone')}
        placeholder={t('phone')}
        style={BecomeOurPartnerPageStyles.field}
      />

      <BoldText style={BecomeOurPartnerPageStyles.sectionTitle}>
        {t('companyInfo')}
      </BoldText>
      <Input
        value={fields.companyName}
        onChangeText={onFieldChange('companyName')}
        placeholder={t('companyName')}
        style={BecomeOurPartnerPageStyles.field}
      />
      <Input
        value={fields.companyCUI}
        onChangeText={onFieldChange('companyCUI')}
        placeholder={t('cui')}
        style={BecomeOurPartnerPageStyles.field}
      />
      <Input
        value={fields.companyAddress}
        onChangeText={onFieldChange('companyAddress')}
        placeholder={t('address')}
        style={BecomeOurPartnerPageStyles.field}
      />
      <Input
        value={fields.companyRegCom}
        onChangeText={onFieldChange('companyRegCom')}
        placeholder={t('regCom')}
        style={BecomeOurPartnerPageStyles.field}
      />

      <Text style={BecomeOurPartnerPageStyles.infoLabel}>
        {t('yourPersonalData')}
      </Text>
      <Button onPress={onPress}>{t('becomeOurPartner')}</Button>
    </ScrollView>
  );
});

export default BecomeOurPartnerPage;
