import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';

export const ProfilePageStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
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
    marginBottom: 10,
    color: theme.palette.textPrimary,
  },
  ordersContainer: {
    paddingBottom: 20,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 80,
    marginBottom: 20,
  },
  logoutButton: {
    marginTop: 20,
  },
});
