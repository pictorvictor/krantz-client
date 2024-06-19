import React, {useEffect, useState} from 'react';
import {View, TextInput} from 'react-native';
import {useStores} from '../../hooks/useStores';
import {SearchPageStyles} from './styles';
import {useTranslation} from 'react-i18next';

const SearchPage = () => {
  const {kitchenStore} = useStores();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTypes, setSelectedTypes] = useState([]);
  const {t} = useTranslation();

  useEffect(() => {
    kitchenStore.fetchKitchenTypes();
  }, []);

  const onSearchQueryChange = (text: string) => {
    setSearchQuery(text);
    kitchenStore.searchKitchens(text, selectedTypes);
  };

  return (
    <View style={SearchPageStyles.container}>
      <TextInput
        style={SearchPageStyles.searchBar}
        placeholder={t('search')}
        onChangeText={onSearchQueryChange}
      />
    </View>
  );
};

export default SearchPage;
