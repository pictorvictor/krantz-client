import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';

export const LoginPageStyles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    backgroundColor: theme.palette.backgroundGrey,
  },
  logoContainer: {display: 'flex', flexGrow: 0.5, justifyContent: 'flex-end'},
  inputsContainer: {display: 'flex', flexGrow: 1, alignSelf: 'stretch'},
  loginButtonContainer: {display: 'flex', flexGrow: 0.5},
  loginLabel: {
    fontSize: 25,
    marginBottom: 10,
    marginLeft: 5,
  },
  forgotYourPassword: {
    alignSelf: 'flex-end',
    color: theme.palette.textSecondary,
    fontSize: 16,
  },
  registerContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  noAccountText: {
    fontSize: 16,
    color: theme.palette.textSecondary,
  },
  registerText: {
    fontSize: 16,
    color: theme.palette.primary,
  },
  loginButton: {
    alignSelf: 'stretch',
    marginBottom: 5,
  },
  emailInput: {
    marginBottom: 20,
  },
});
