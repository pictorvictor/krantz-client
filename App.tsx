import {Provider} from '@ant-design/react-native';
import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import RootNavigator from './src';
import {StoreProvider} from './src/hooks/useStores';
import {rootStore} from './src/stores';
import antdTheme from './src/utils/antd-theme';
import {AppStyles} from './styles';

function App(): JSX.Element {
  return (
    <>
      <StatusBar backgroundColor="transparent" translucent />
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
