import {StackScreenProps} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';
import {StatusBar, View} from 'react-native';
import {BackButton, ExtraBoldText, LightText, Text} from '../../components';
import {HomeStackParamList} from '../../navigation/HomeNavigator';
import {Route} from '../../utils/enums';
import theme from '../../utils/theme';
import {KitchenInformationPageStyles} from './styles';

const KitchenInformationPage = ({
  route,
}: StackScreenProps<HomeStackParamList, Route.KitchenInformation>) => {
  const {t} = useTranslation();
  const kitchen = route.params.kitchen;

  return (
    <View style={KitchenInformationPageStyles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.palette.backgroundGrey}
      />
      <BackButton style={KitchenInformationPageStyles.backButton} />
      <ExtraBoldText style={KitchenInformationPageStyles.title}>
        {kitchen.name}
      </ExtraBoldText>

      <View style={KitchenInformationPageStyles.section}>
        <Text style={KitchenInformationPageStyles.sectionTitle}>
          {t('Address')}
        </Text>
        <LightText style={KitchenInformationPageStyles.sectionContent}>
          {kitchen.address}
        </LightText>
      </View>

      <View style={KitchenInformationPageStyles.section}>
        <Text style={KitchenInformationPageStyles.sectionTitle}>
          {t('Schedule')}
        </Text>
        <LightText style={KitchenInformationPageStyles.sectionContent}>
          {'L-V: 10:00 - 20:00\nS-D: 8:00 - 14:00'}
        </LightText>
      </View>

      <View style={KitchenInformationPageStyles.section}>
        <Text style={KitchenInformationPageStyles.sectionTitle}>
          {t('Contact')}
        </Text>
        <LightText style={KitchenInformationPageStyles.sectionContent}>
          {kitchen.contactPhone}
        </LightText>
        <LightText style={KitchenInformationPageStyles.sectionContent}>
          {kitchen.contactEmail}
        </LightText>
      </View>

      <View style={KitchenInformationPageStyles.section}>
        <Text style={KitchenInformationPageStyles.sectionTitle}>
          {t('Company info')}
        </Text>
        <LightText style={KitchenInformationPageStyles.sectionContent}>
          {kitchen.companyName}
        </LightText>
        <LightText style={KitchenInformationPageStyles.sectionContent}>
          {kitchen.companyCUI}
        </LightText>
        <LightText style={KitchenInformationPageStyles.sectionContent}>
          {kitchen.companyAddress}
        </LightText>
        <LightText style={KitchenInformationPageStyles.sectionContent}>
          {kitchen.companyRegCom}
        </LightText>
      </View>
    </View>
  );
};

export default KitchenInformationPage;
