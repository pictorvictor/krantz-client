import {StyleSheet} from 'react-native';

export const IconButtonStyles = (backgroundColor?: string, size?: number) =>
  StyleSheet.create({
    container: {
      backgroundColor: backgroundColor,
      borderRadius: 20,
      width: size,
      height: size,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
