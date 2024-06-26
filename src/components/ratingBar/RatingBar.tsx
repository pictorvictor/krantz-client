import {TouchableOpacity, View} from 'react-native';
import {IconFill, IconOutline} from '@ant-design/icons-react-native';

import {RatingBarStyles} from './styles';
import theme from '../../utils/theme';

const stars = [1, 2, 3, 4, 5];

const RatingBar = ({
  rating,
  onRatingBarClick,
}: {
  rating: number;
  onRatingBarClick: (rating: number) => void;
}) => {
  const onStarClick = (value: number) => () => onRatingBarClick(value);

  return (
    <View style={RatingBarStyles.container}>
      {stars.map(item => (
        <TouchableOpacity onPress={onStarClick(item)} key={item}>
          {rating >= item ? (
            <IconFill name="star" color={theme.palette.yellow} size={35} />
          ) : (
            <IconOutline name="star" color={theme.palette.yellow} size={35} />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RatingBar;
