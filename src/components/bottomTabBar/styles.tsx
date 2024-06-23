import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';

export const BottomBarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 50,
    borderRadius: 30,
    backgroundColor: theme.palette.white,
    marginBottom: 30,
    marginHorizontal: 20,
  },
  tabBarItem: {
    alignItems: 'center',
  },
  tabBarItemText: {
    color: theme.palette.textPrimary,
    fontSize: 12,
  },
  disabledTabBarItem: {
    opacity: 0.5,
  },
});
