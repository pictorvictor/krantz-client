import {View, ViewStyle} from 'react-native';
import {DashedLineStyles} from './styles';

const dottedLineDots = Array.from({length: 100}, (_, index) => (
  <View key={index} style={DashedLineStyles.dottedLineDot} />
));

const DashedLine = ({style}: {style?: ViewStyle}) => (
  <View style={{...DashedLineStyles.dottedLineContainer, ...style}}>
    {dottedLineDots}
  </View>
);

export default DashedLine;
