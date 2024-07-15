import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';

export const ProfilePageStyles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 20,
    backgroundColor: theme.palette.backgroundGrey,
    paddingTop: 50,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 30,
    color: theme.palette.primary,
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 14,
    color: theme.palette.textSecondary,
  },
  editIcon: {
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 10,
    color: theme.palette.textPrimary,
  },
  ordersContainer: {
    width: '100%',
    paddingBottom: 20,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: 80,
    marginBottom: 20,
  },
  logoutButtonContainer: {
    marginBottom: 30,
    marginTop: 'auto',
  },
  logoutButton: {
    margin: 'auto',
  },
});
