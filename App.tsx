import {Provider} from '@ant-design/react-native';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import RootNavigator from './src';
import {StoreProvider} from './src/hooks/useStores';
import {rootStore} from './src/stores';
import antdTheme from './src/utils/antd-theme';
import theme from './src/utils/theme';
import {AppStyles} from './styles';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={AppStyles.safeAreaView}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={
          isDarkMode ? theme.palette.textPrimary : theme.palette.backgroundGrey
        }
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
