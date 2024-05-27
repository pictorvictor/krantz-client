import {Button} from '@ant-design/react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {StyleSheet, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useTranslation} from 'react-i18next';

import {AuthStackParamList} from '../../navigation/AuthNavigator';

const LoginPage = ({
  navigation,
}: StackScreenProps<AuthStackParamList, 'login'>) => {
  const {t} = useTranslation();
  const onRegisterPress = () => {
    navigation.navigate('register');
  };

  return (
    <ScrollView contentContainerStyle={LoginPageStyles.body}>
      <Text style={LoginPageStyles.title}>{t('loginPage')}</Text>
      <Button type="primary" onPress={onRegisterPress}>
        {t('register')}
      </Button>
    </ScrollView>
  );
};

const LoginPageStyles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {fontSize: 33, color: 'black'},
});

export default LoginPage;
