import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';

export const StatisticsPageStyles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
  },
  title: {
    color: theme.palette.primary,
    fontSize: 28,
    marginBottom: 20,
    marginTop: 20,
  },
  description: {
    marginBottom: 30,
  },
  barChartContainer: {
    borderRadius: 10,
    flexGrow: 1,
  },
});
