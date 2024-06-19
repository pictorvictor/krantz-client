import {t} from 'i18next';
import {LoginPageStyles} from '../loginPage/styles';
import {useStores} from '../../hooks/useStores';
import {Button, Text} from '../../components';

const HomePage = () => {
  const {authStore} = useStores();

  const onLogoutPress = async () => {
    await authStore.logout();
  };

  return (
    <>
      <Text>Home Page</Text>
      <Button onPress={onLogoutPress} style={LoginPageStyles.loginButton}>
        {t('Logout')}
      </Button>
    </>
  );
};

export default HomePage;
