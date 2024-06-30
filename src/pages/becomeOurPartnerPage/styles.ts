import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';

export const BecomeOurPartnerPageStyles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 30,
    marginTop: 30,
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    color: theme.palette.textSecondary,
    textAlign: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    marginLeft: 10,
    marginBottom: 5,
    marginTop: 20,
  },
  field: {
    marginBottom: 10,
  },
  typesLabel: {
    color: theme.palette.textSecondary,
    marginLeft: 20,
    marginBottom: 10,
  },
  infoLabel: {
    color: theme.palette.textSecondary,
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 10,
    marginTop: 30,
  },
});
