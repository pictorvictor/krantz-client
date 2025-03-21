import {isEmpty} from 'lodash';
import {observer} from 'mobx-react-lite';
import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Dimensions, StatusBar, View} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import {BackButton, BoldText, Text} from '../../components';
import {useStores} from '../../hooks/useStores';
import theme from '../../utils/theme';
import {StatisticsPageStyles} from './styles';

const StatisticsPage = observer(() => {
  const {userStore} = useStores();
  const {t} = useTranslation();

  useEffect(() => {
    userStore.getStatistics();
  }, [userStore]);

  const formatData = (data: any) => {
    return data.map((value: number) => {
      if (value >= 1000) {
        return (value / 1000).toFixed(2);
      }
      return value.toFixed(2);
    });
  };

  const getYAxisLabel = () => {
    const maxValue = Math.max(...(userStore.statistics?.data || []));
    return maxValue >= 1000 ? t('tonnes') : t('kg');
  };

  return (
    <View style={StatisticsPageStyles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.palette.backgroundGrey}
      />
      <BackButton />
      <BoldText style={StatisticsPageStyles.title}>
        {t('co2SavingsTitle')}
      </BoldText>
      <Text style={StatisticsPageStyles.description}>
        {t('co2SavingsDescription')}
      </Text>
      {!isEmpty(userStore.statistics?.data) && (
        <BarChart
          data={{
            labels: userStore.statistics?.labels,
            datasets: [{data: formatData(userStore.statistics?.data)}],
          }}
          width={Dimensions.get('window').width - 40}
          height={400}
          showValuesOnTopOfBars
          yAxisSuffix={getYAxisLabel()}
          yAxisLabel=""
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: theme.palette.backgroundGrey,
            backgroundGradientFrom: theme.palette.primaryDark,
            backgroundGradientTo: theme.palette.primaryLight,
            //   decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          style={StatisticsPageStyles.barChartContainer}
        />
      )}
    </View>
  );
});

export default StatisticsPage;
