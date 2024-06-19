import React, {useEffect, useMemo, useState} from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react-lite';
import {debounce} from 'lodash';

import {useStores} from '../../hooks/useStores';
import {SearchPageStyles} from './styles';
import {useTranslation} from 'react-i18next';
import {Input, Multiselect} from '../../components';

const SearchPage = observer(() => {
  const {kitchenStore} = useStores();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const {t} = useTranslation();

  useEffect(() => {
    kitchenStore.fetchKitchenTypes();
  }, [kitchenStore]);

  const debouncedSearch = useMemo(
    () =>
      debounce((query, types) => {
        kitchenStore.searchKitchens(query, types);
      }, 500),
    [kitchenStore],
  );

  useEffect(() => {
    debouncedSearch(searchQuery, selectedTypes);
    return () => {
      debouncedSearch.cancel();
    };
  }, [searchQuery, selectedTypes, debouncedSearch]);

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
      />
      <Multiselect
        values={kitchenStore.kitchenTypes.map(type => ({
          value: type,
          label: t(`kitchenTypes.${type}`),
        }))}
        selectedValues={selectedTypes}
        onValuePress={onSelectType}
      />
    </View>
  );
});

export default SearchPage;
