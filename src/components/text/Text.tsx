import {Text as AntdText, GestureResponderEvent} from 'react-native';
import {TextStyles} from './styles';

const Text = ({
  children,
  style,
  onPress,
}: {
  children: string;
  style?: {[x: string]: string | number};
  onPress?: (e: GestureResponderEvent) => void;
}) => (
  <AntdText
    style={{
      ...TextStyles.medium,
      ...style,
    }}
    onPress={onPress}>
    {children}
  </AntdText>
);

export const BoldText = ({
  children,
  style,
  onPress,
}: {
  children: string;
  style?: {[x: string]: string | number};
  onPress?: (e: GestureResponderEvent) => void;
}) => (
  <Text style={{...style, ...TextStyles.bold}} onPress={onPress}>
    {children}
  </Text>
);

export const ExtraBoldText = ({
  children,
  style,
  onPress,
}: {
  children: string;
  style?: {[x: string]: string | number};
  onPress?: (e: GestureResponderEvent) => void;
}) => (
  <Text style={{...style, ...TextStyles.extraBold}} onPress={onPress}>
    {children}
  </Text>
);

export const LightText = ({
  children,
  style,
  onPress,
}: {
  children: string;
  style?: {[x: string]: string | number};
  onPress?: (e: GestureResponderEvent) => void;
}) => (
  <Text style={{...style, ...TextStyles.light}} onPress={onPress}>
    {children}
  </Text>
);

export const RegularText = ({
  children,
  style,
  onPress,
}: {
  children: string;
  style?: {[x: string]: string | number};
  onPress?: (e: GestureResponderEvent) => void;
}) => (
  <Text style={{...style, ...TextStyles.regular}} onPress={onPress}>
    {children}
  </Text>
);

export const SemiBoldText = ({
  children,
  style,
  onPress,
}: {
  children: string;
  style?: {[x: string]: string | number};
  onPress?: (e: GestureResponderEvent) => void;
}) => (
  <Text style={{...style, ...TextStyles.semiBold}} onPress={onPress}>
    {children}
  </Text>
);

export default Text;
