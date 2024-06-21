import {t} from 'i18next';
import {BoldText, Text} from '../index';
import {View} from 'react-native';
import {DiscountedPriceStyles} from './styles';

const InitialPrice = ({children}: {children: string}) => {
  return (
    <View style={DiscountedPriceStyles.discountedPriceContainer}>
      <BoldText style={DiscountedPriceStyles.discountedPrice}>
        {children}
      </BoldText>
      <Text style={DiscountedPriceStyles.discountedCurrency}>
        {t('currency')}
      </Text>
    </View>
  );
};

export default InitialPrice;
