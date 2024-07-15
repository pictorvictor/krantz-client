import {StackScreenProps} from '@react-navigation/stack';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {KeyboardAvoidingView, Platform, StatusBar, View} from 'react-native';

import {BoldText, Button, Input, Logo, SemiBoldText} from '../../components';
import {useStores} from '../../hooks/useStores';
import {AuthStackParamList} from '../../navigation/AuthNavigator';
import theme from '../../utils/theme';
import {LoginPageStyles} from './styles';

const LoginPage = ({
  navigation,
}: StackScreenProps<AuthStackParamList, 'login'>) => {
  const {t} = useTranslation();
  const {authStore} = useStores();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const onCredentialsChange = (field: string) => (text: string) =>
    setCredentials(currentCredentials => ({
      ...currentCredentials,
      [field]: text,
    }));

  const onLoginPress = async () => {
    await authStore.authenticate(credentials);
  };

  const onRegisterPress = () => {
    navigation.navigate('register');
  };

  return (
    <KeyboardAvoidingView
      style={LoginPageStyles.loginContainer}
      {...(Platform.OS === 'ios' && {behavior: 'padding'})}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.palette.backgroundGrey}
      />
      <View style={LoginPageStyles.logoContainer}>
        <Logo />
      </View>
      <View style={LoginPageStyles.inputsContainer}>
        <BoldText style={LoginPageStyles.loginLabel}>{t('login')}</BoldText>
        <Input
          value={credentials.email}
          placeholder={t('Email')}
          onChangeText={onCredentialsChange('email')}
          style={LoginPageStyles.emailInput}
        />
        <Input
          value={credentials.password}
          placeholder={t('Password')}
          onChangeText={onCredentialsChange('password')}
          type="password"
        />
        {/* <SemiBoldText style={LoginPageStyles.forgotYourPassword}>
          {t('forgotYourPassword')}
        </SemiBoldText> */}
      </View>
      <View style={LoginPageStyles.loginButtonContainer}>
        <Button onPress={onLoginPress} style={LoginPageStyles.loginButton}>
          {t('Login')}
        </Button>
        <View style={LoginPageStyles.registerContainer}>
          <SemiBoldText style={LoginPageStyles.noAccountText}>
            {t('noAccount')}
          </SemiBoldText>
          <BoldText
            style={LoginPageStyles.registerText}
            onPress={onRegisterPress}>
            {t('register')}
          </BoldText>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginPage;
