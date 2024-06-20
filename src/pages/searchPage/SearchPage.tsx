import {debounce} from 'lodash';
import {observer} from 'mobx-react-lite';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {View} from 'react-native';

import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {useTranslation} from 'react-i18next';
import {FlatList, GestureHandlerRootView} from 'react-native-gesture-handler';
import {Input, KitchenComponent, Multiselect} from '../../components';
import {useStores} from '../../hooks/useStores';
import {MainBottomTabBarParamList} from '../../navigation/MainNavigator';
import {MenuOption} from '../../utils/enums';
import {SearchPageStyles} from './styles';

const SearchPage = observer(
  ({
    route,
  }: BottomTabScreenProps<MainBottomTabBarParamList, MenuOption.Search>) => {
    const {kitchenStore} = useStores();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const searchInputRef = useRef<any>(null);
    const numColumns = 2;
    const {t} = useTranslation();

    useEffect(() => {
      if (route.params?.fromHome) {
        if (searchInputRef && searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }
      kitchenStore.fetchKitchenTypes();
    }, [kitchenStore, searchInputRef, route.params?.fromHome]);

    const debouncedSearch = useMemo(
      () =>
        debounce((query, types) => {
          kitchenStore.searchKitchens(query, types);
        }, 500),
      [kitchenStore],
    );

    useEffect(() => {
      if (searchQuery !== '') {
        debouncedSearch(searchQuery, selectedTypes);
      } else {
        kitchenStore.searchKitchens(searchQuery, selectedTypes);
      }
      return () => {
        debouncedSearch.cancel();
      };
    }, [searchQuery, selectedTypes, debouncedSearch, kitchenStore]);

    const onSearchQueryChange = (text: string) => setSearchQuery(text);

    const onSelectType = (type: string) =>
      setSelectedTypes(prevSelectedTypes =>
        prevSelectedTypes.includes(type)
          ? prevSelectedTypes.filter(selectedType => selectedType !== type)
          : [...prevSelectedTypes, type],
      );

    return (
      <View style={SearchPageStyles.container}>
        <Input
          placeholder={t('search')}
          value={searchQuery}
          onChangeText={onSearchQueryChange}
          style={SearchPageStyles.searchInput}
          ref={searchInputRef}
        />
        <Multiselect
          values={kitchenStore.kitchenTypes.map(type => ({
            value: type,
            label: t(`kitchenTypes.${type}`),
          }))}
          selectedValues={selectedTypes}
          onValuePress={onSelectType}
        />
        <View style={SearchPageStyles.kitchensContainer}>
          <GestureHandlerRootView>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={kitchenStore.kitchens}
              renderItem={({item}) => <KitchenComponent kitchen={item} />}
              keyExtractor={item => item.id}
              numColumns={numColumns}
              key={numColumns}
            />
          </GestureHandlerRootView>
        </View>
      </View>
    );
  },
);

export default SearchPage;
