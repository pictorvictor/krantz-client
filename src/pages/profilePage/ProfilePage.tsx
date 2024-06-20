import {t} from 'i18next';
import {Button} from '../../components';
import {LoginPageStyles} from '../loginPage/styles';
import {useStores} from '../../hooks/useStores';

const ProfilePage = () => {
  const {authStore} = useStores();

  const onLogoutPress = async () => {
    await authStore.logout();
  };

  return (
    <Button onPress={onLogoutPress} style={LoginPageStyles.loginButton}>
      {t('Logout')}
    </Button>
  );
};

export default ProfilePage;
