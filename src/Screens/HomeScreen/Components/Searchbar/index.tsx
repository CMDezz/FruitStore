import React, {useState} from 'react';
import {View, ViewStyle,StyleSheet} from 'react-native';
import TextInput from '@Controls/Common/TextInput';
import Button from '@Controls/Common/Button';
import { Layout } from '@Layout/Layout';
const SearchBar = () => {
  const [keyword, setKeyword] = useState<string>('');
  return (
    <View style={Style.searchBar}>
      <TextInput
        testID="searchKeyword"
        accessible
        accessibilityLabel="search keyword"
        accessibilityHint="please enter keyword"
        placeholder="Search"
        value={keyword}
        onChangeText={(_, text) => setKeyword(text)}
        leftIcon="search-outline"
        containerStyle={{flex:1}}
      />
      <Button
        leftIcons='filter-outline'
        onButtonPressed={()=>console.log('pressed filter')}
      />
    </View>
  );
};

const Style = StyleSheet.create({
    searchBar:{
        flex:1,
        flexDirection:'row',
        gap:Layout.Padding.lg
    }
})

export default SearchBar;
