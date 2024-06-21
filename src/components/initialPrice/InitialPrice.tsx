import {t} from 'i18next';
import {Text} from '../index';
import {View} from 'react-native';
import {InitialPriceStyles} from './styles';

const InitialPrice = ({children}: {children: string}) => {
  return (
    <View style={InitialPriceStyles.initialPriceContainer}>
      <Text style={InitialPriceStyles.initialPrice}>{children}</Text>
      <Text style={InitialPriceStyles.initialCurrency}>{t('currency')}</Text>
    </View>
  );
};

export default InitialPrice;
