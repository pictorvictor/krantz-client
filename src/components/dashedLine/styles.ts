import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';

export const DashedLineStyles = StyleSheet.create({
  dottedLineContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  dottedLineDot: {
    width: 10,
    height: 1,
    backgroundColor: theme.palette.textTertiary,
    borderRadius: 100,
    marginLeft: 2,
  },
});
