import {createStackNavigator} from '@react-navigation/stack';
import {LoginPage, RegisterPage} from './pages';

const Stack = createStackNavigator<AuthStackParamList>();

export type AuthStackParamList = {
  login: undefined;
  register: undefined;
};

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="login" component={LoginPage} />
      <Stack.Screen name="register" component={RegisterPage} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
