import {StackScreenProps} from '@react-navigation/stack';
import {View} from 'react-native';
import {AuthStackParamList} from '../../navigation/AuthNavigator';
import {BoldText, Input, Logo, Button, SemiBoldText} from '../../components';
import {t} from 'i18next';
import React, {useState} from 'react';
import {useStores} from '../../hooks/useStores';
import {RegisterPageStyles} from './styles';

const RegisterPage = ({
  navigation,
}: StackScreenProps<AuthStackParamList, 'register'>) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    confirmPassword: '',
  });
  const {authStore} = useStores();

  const onCredentialsChange = (field: string) => (text: string) =>
    setCredentials(currentCredentials => ({
      ...currentCredentials,
      [field]: text,
    }));

  const onLoginPress = () => {
    navigation.navigate('login');
  };

  const onRegisterPress = async () => {
    await authStore.register(credentials);
  };

  return (
    <View style={RegisterPageStyles.registerContainer}>
      <View style={RegisterPageStyles.logoContainer}>
        <Logo />
      </View>
      <View style={RegisterPageStyles.inputsContainer}>
        <BoldText style={RegisterPageStyles.registerLabel}>
          {t('register')}
        </BoldText>
        <View style={RegisterPageStyles.nameInputContainer}>
          <Input
            value={credentials.firstName}
            placeholder={t('firstName')}
            onChangeText={onCredentialsChange('firstName')}
            style={RegisterPageStyles.firstNameInput}
          />
          <Input
            value={credentials.lastName}
            placeholder={t('lastName')}
            onChangeText={onCredentialsChange('lastName')}
            style={RegisterPageStyles.firstNameInput}
          />
        </View>
        <Input
          value={credentials.email}
          placeholder={t('Email')}
          onChangeText={onCredentialsChange('email')}
          style={RegisterPageStyles.emailInput}
        />
        <Input
          value={credentials.password}
          placeholder={t('Password')}
          onChangeText={onCredentialsChange('password')}
          style={RegisterPageStyles.emailInput}
        />
        <Input
          value={credentials.confirmPassword}
          placeholder={t('confirmPassword')}
          onChangeText={onCredentialsChange('confirmPassword')}
        />
      </View>
      <View style={RegisterPageStyles.registerButtonContainer}>
        <Button
          onPress={onRegisterPress}
          style={RegisterPageStyles.registerButton}>
          {t('Register')}
        </Button>
        <View style={RegisterPageStyles.loginContainer}>
          <SemiBoldText style={RegisterPageStyles.alreadyHaveAnAccountText}>
            {t('alreadyHaveAnAccount')}
          </SemiBoldText>
          <BoldText style={RegisterPageStyles.loginText} onPress={onLoginPress}>
            {t('login')}
          </BoldText>
        </View>
      </View>
    </View>
  );
};

export default RegisterPage;
