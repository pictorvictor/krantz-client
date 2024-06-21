import {StackScreenProps} from '@react-navigation/stack';
import {ImageBackground, StatusBar, View} from 'react-native';
import {BackButton, InfoButton, Text} from '../../components';
import {HomeStackParamList} from '../../navigation/HomeNavigator';
import {Route} from '../../utils/enums';
import {MealDetailsPageStyles} from './styles';
import {observer} from 'mobx-react-lite';

const MealDetailsPage = observer(
  ({route}: StackScreenProps<HomeStackParamList, Route.MealDetails>) => {
    const {meal} = route.params;
    return (
      <View style={MealDetailsPageStyles.container}>
        <StatusBar backgroundColor="transparent" translucent />
        <ImageBackground
          source={{uri: meal?.mealImage}}
          style={MealDetailsPageStyles.imageBackground}
          imageStyle={MealDetailsPageStyles.image}>
          <BackButton style={MealDetailsPageStyles.backButton} />
        </ImageBackground>
      </View>
    );
  },
);

export default MealDetailsPage;
