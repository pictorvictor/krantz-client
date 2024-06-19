import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';

export const RegisterPageStyles = StyleSheet.create({
  registerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    backgroundColor: theme.palette.backgroundGrey,
  },
  inputsContainer: {flexGrow: 1, alignSelf: 'stretch'},
  logoContainer: {flexGrow: 0.5, justifyContent: 'flex-end'},
  registerButtonContainer: {flexGrow: 0.5, width: '100%'},
  firstNameInput: {
    width: '48%',
  },
  nameInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  registerLabel: {
    fontSize: 25,
    marginBottom: 10,
    marginLeft: 5,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerButton: {
    alignSelf: 'stretch',
    marginBottom: 5,
    width: '100%',
  },
  alreadyHaveAnAccountText: {
    fontSize: 10,
    color: theme.palette.textSecondary,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 10,
    color: theme.palette.primary,
  },
  title: {fontSize: 33, color: 'black'},
  emailInput: {
    marginBottom: 20,
  },
});
