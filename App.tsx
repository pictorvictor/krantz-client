import {Provider} from '@ant-design/react-native';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import RootNavigator from './src';
import antdTheme from './src/utils/antd-theme';
import {StoreProvider} from './src/hooks/useStores';
import {rootStore} from './src/stores';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <StoreProvider value={rootStore}>
        <Provider theme={antdTheme}>
          <RootNavigator />
        </Provider>
      </StoreProvider>
    </SafeAreaView>
  );
}

export default App;
