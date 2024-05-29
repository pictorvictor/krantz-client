import {Text as AntdText} from 'react-native';
import {TextStyles} from './styles';

const Text = ({
  children,
  style,
}: {
  children: string;
  style?: {[x: string]: string | number};
}) => (
  <AntdText
    style={{
      ...TextStyles.medium,
      ...style,
    }}>
    {children}
  </AntdText>
);

export const BoldText = ({
  children,
  style,
}: {
  children: string;
  style?: {[x: string]: string | number};
}) => <Text style={{...style, ...TextStyles.bold}}>{children}</Text>;

export const ExtraBoldText = ({
  children,
  style,
}: {
  children: string;
  style?: {[x: string]: string | number};
}) => <Text style={{...style, ...TextStyles.extraBold}}>{children}</Text>;

export const LightText = ({
  children,
  style,
}: {
  children: string;
  style?: {[x: string]: string | number};
}) => <Text style={{...style, ...TextStyles.light}}>{children}</Text>;

export const RegularText = ({
  children,
  style,
}: {
  children: string;
  style?: {[x: string]: string | number};
}) => <Text style={{...style, ...TextStyles.regular}}>{children}</Text>;

export const SemiBoldText = ({
  children,
  style,
}: {
  children: string;
  style?: {[x: string]: string | number};
}) => <Text style={{...style, ...TextStyles.semiBold}}>{children}</Text>;

export default Text;
