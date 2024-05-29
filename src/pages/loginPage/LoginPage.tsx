import {StackScreenProps} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useTranslation} from 'react-i18next';

import {AuthStackParamList} from '../../navigation/AuthNavigator';
import {
  BoldText,
  ExtraBoldText,
  LightText,
  RegularText,
  SemiBoldText,
  Text,
  Button,
} from '../../components';

const LoginPage = ({
  navigation,
}: StackScreenProps<AuthStackParamList, 'login'>) => {
  const {t} = useTranslation();
  const onRegisterPress = () => {
    navigation.navigate('register');
  };

  return (
    <ScrollView contentContainerStyle={LoginPageStyles.body}>
      <LightText style={LoginPageStyles.title}>{t('loginPage')}</LightText>
      <RegularText style={LoginPageStyles.title}>{t('loginPage')}</RegularText>
      <Text style={LoginPageStyles.title}>{t('loginPage')}</Text>
      <SemiBoldText style={LoginPageStyles.title}>
        {t('loginPage')}
      </SemiBoldText>
      <BoldText style={LoginPageStyles.title}>{t('loginPage')}</BoldText>
      <ExtraBoldText style={LoginPageStyles.title}>
        {t('loginPage')}
      </ExtraBoldText>

      <Button onPress={onRegisterPress}>{t('register')}</Button>
    </ScrollView>
  );
};

const LoginPageStyles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {fontSize: 25, color: 'black'},
});

export default LoginPage;
