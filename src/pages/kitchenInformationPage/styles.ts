import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';

export const KitchenInformationPageStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.palette.backgroundGrey,
    paddingHorizontal: 20,
    height: '100%',
    paddingTop: 40,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 10,
    zIndex: 2,
  },
  title: {
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 30,
    fontSize: 35,
    lineHeight: 40,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  section: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 10,
    color: theme.palette.textPrimary,
  },
  sectionContent: {
    fontSize: 14,
    color: theme.palette.textPrimary,
    marginBottom: 3,
  },
});
