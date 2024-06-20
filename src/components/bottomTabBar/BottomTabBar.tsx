import {IconOutline} from '@ant-design/icons-react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {TouchableOpacity, View} from 'react-native';

import React from 'react';
import theme from '../../utils/theme';
import {SemiBoldText} from '../text/Text';
import {BottomBarStyles} from './styles';
import {Route} from '../../utils/enums';

const MenuOptionMapping: {[key: string]: any} = {
  [Route.Home]: 'home',
  [Route.Search]: 'search',
  [Route.Cart]: 'shopping-cart',
  [Route.Profile]: 'user',
};

const BottomTabBar = ({state, navigation}: BottomTabBarProps) => {
  return (
    <View style={BottomBarStyles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={route.name}
            onPress={onPress}
            style={BottomBarStyles.tabBarItem}>
            <IconOutline
              name={MenuOptionMapping[route.name]}
              size={20}
              color={
                isFocused ? theme.palette.primary : theme.palette.textSecondary
              }
            />
            {isFocused && (
              <SemiBoldText style={BottomBarStyles.tabBarItemText}>
                {route.name}
              </SemiBoldText>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomTabBar;
