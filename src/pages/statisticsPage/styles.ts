import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';

export const StatisticsPageStyles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    color: theme.palette.primary,
    fontSize: 30,
    marginBottom: 30,
    marginTop: 10,
  },
  description: {
    marginBottom: 50,
  },
  barChartContainer: {
    borderRadius: 10,
    flexGrow: 1,
  },
});
