import {Polygon} from 'react-native-svg';
import theme from '../../utils/theme';

const ZigZagBorder = ({color = theme.palette.white}: {color?: string}) => {
  let nodes = [];
  for (let i = 0; i < 40; i++) {
    const points = `${20 * i},0 ${20 * i + 10},10 ${20 * (i + 1)},0`;
    nodes.push(
      <Polygon
        points={points}
        fill={color}
        stroke={color}
        strokeWidth="1"
        key={i}
      />,
    );
  }
  return nodes;
};

export default ZigZagBorder;
