import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';

export const MultiselectStyles = (isSelected?: boolean) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    chip: {
      borderRadius: 15,
      backgroundColor: isSelected ? theme.palette.primary : theme.palette.grey,
      marginHorizontal: 5,
      marginBottom: 10,
      paddingHorizontal: 15,
      paddingVertical: 3,
    },
    text: {
      color: isSelected ? theme.palette.white : theme.palette.textSecondary,
    },
  });
