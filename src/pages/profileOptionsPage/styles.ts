import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';

export const ProfileOptionsPageStyles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 20,
    backgroundColor: theme.palette.backgroundGrey,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 2,
  },
  contentContainer: {
    flex: 1,
    marginTop: 60,
  },
  section: {
    marginTop: 40,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.palette.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dollar: {
    fontSize: 22,
    color: theme.palette.textPrimary,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    color: theme.palette.textPrimary,
    marginLeft: 20,
    marginTop: 8,
  },
  cardContainer: {
    backgroundColor: theme.palette.grey,
    marginHorizontal: 30,
    borderRadius: 10,
    height: 150,
    marginTop: 20,
    padding: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  cardType: {
    marginBottom: 'auto',
    color: theme.palette.textTertiary,
  },
  cardInfo: {
    marginTop: 'auto',
    color: theme.palette.textTertiary,
  },
  cardHolderAndExpiryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  logoutButton: {
    marginBottom: 30,
  },
});
