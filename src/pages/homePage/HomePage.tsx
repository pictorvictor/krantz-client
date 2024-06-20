import {ScrollView} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useEffect} from 'react';

import {useStores} from '../../hooks/useStores';
import {BoldText, Button, ExtraBoldText, Input} from '../../components';
import {HomePageStyles} from './styles';
import {LoginPageStyles} from '../loginPage/styles';
import {MenuOption} from '../../utils/enums';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {MainBottomTabBarParamList} from '../../navigation/MainNavigator';

const HomePage = ({
  navigation,
}: BottomTabScreenProps<MainBottomTabBarParamList, MenuOption.Home>) => {
  const {authStore, userStore} = useStores();
  const {t} = useTranslation();

  useEffect(() => {
    userStore.me();
  });

  const onLogoutPress = async () => {
    await authStore.logout();
  };

  const onSearchInputPress = () => {
    navigation.navigate(MenuOption.Search, {fromHome: true});
  };

  return (
    <ScrollView contentContainerStyle={HomePageStyles.container}>
      <BoldText style={HomePageStyles.welcomeLabel}>{t('welcome')}</BoldText>
      <ExtraBoldText style={HomePageStyles.firstName}>
        {userStore.firstName}
      </ExtraBoldText>
      <Input
        placeholder={t('search')}
        // value={searchQuery}
        // onChangeText={onSearchQueryChange}
        onPress={onSearchInputPress}
        style={HomePageStyles.searchInput}
      />
      <Button onPress={onLogoutPress} style={LoginPageStyles.loginButton}>
        {t('Logout')}
      </Button>
    </ScrollView>
  );
};

export default HomePage;
