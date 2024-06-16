import React from 'react';
import {Provider} from '@ant-design/react-native';
import {SafeAreaView, StatusBar, View} from 'react-native';
import RootNavigator from './src';
import {StoreProvider} from './src/hooks/useStores';
import {rootStore} from './src/stores';
import antdTheme from './src/utils/antd-theme';
import theme from './src/utils/theme';
import {AppStyles} from './styles';

function App(): JSX.Element {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.palette.backgroundGrey}
      />
      <SafeAreaView style={AppStyles.safeAreaView}>
        <View style={AppStyles.container}>
          <StoreProvider value={rootStore}>
            <Provider theme={antdTheme}>
              <RootNavigator />
            </Provider>
          </StoreProvider>
        </View>
      </SafeAreaView>
    </>
  );
}

export default App;
