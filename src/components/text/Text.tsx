import {Text as AntdText, GestureResponderEvent, TextStyle} from 'react-native';
import {TextStyles} from './styles';

type TextProps = {
  children: string;
  style?: TextStyle;
  onPress?: (e: GestureResponderEvent) => void;
  numberOfLines?: number;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
};

const Text = ({
  children,
  style,
  onPress,
  ellipsizeMode,
  numberOfLines,
}: TextProps) => (
  <AntdText
    style={{
      ...TextStyles.medium,
      ...style,
    }}
    onPress={onPress}
    numberOfLines={numberOfLines}
    ellipsizeMode={ellipsizeMode}>
    {children}
  </AntdText>
);

export const BoldText = ({
  children,
  style,
  onPress,
  ellipsizeMode,
  numberOfLines,
}: TextProps) => (
  <Text
    style={{...style, ...TextStyles.bold}}
    onPress={onPress}
    numberOfLines={numberOfLines}
    ellipsizeMode={ellipsizeMode}>
    {children}
  </Text>
);

export const ExtraBoldText = ({
  children,
  style,
  onPress,
  ellipsizeMode,
  numberOfLines,
}: TextProps) => (
  <Text
    style={{...style, ...TextStyles.extraBold}}
    onPress={onPress}
    numberOfLines={numberOfLines}
    ellipsizeMode={ellipsizeMode}>
    {children}
  </Text>
);

export const LightText = ({
  children,
  style,
  onPress,
  ellipsizeMode,
  numberOfLines,
}: TextProps) => (
  <Text
    style={{...style, ...TextStyles.light}}
    onPress={onPress}
    numberOfLines={numberOfLines}
    ellipsizeMode={ellipsizeMode}>
    {children}
  </Text>
);

export const RegularText = ({
  children,
  style,
  onPress,
  ellipsizeMode,
  numberOfLines,
}: TextProps) => (
  <Text
    style={{...style, ...TextStyles.regular}}
    onPress={onPress}
    numberOfLines={numberOfLines}
    ellipsizeMode={ellipsizeMode}>
    {children}
  </Text>
);

export const SemiBoldText = ({
  children,
  style,
  onPress,
  numberOfLines,
  ellipsizeMode,
}: TextProps) => (
  <Text
    style={{...style, ...TextStyles.semiBold}}
    onPress={onPress}
    numberOfLines={numberOfLines}
    ellipsizeMode={ellipsizeMode}>
    {children}
  </Text>
);

export default Text;
