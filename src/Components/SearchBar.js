import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';

const SearchBar = (search, onTermChange, onTermSubmit) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar style={{marginHorizontal: 15, borderRadius: 20, marginTop: 10}}
      placeholder="Where to? Anywhere  |  Any week "
      onChangeText={onChangeSearch}
      value={searchQuery}
      loading={true}
      testID="searchbar"
      theme={{colors: {primary: 'black'}}}
      inputStyle={{fontSize: 16, color: 'black'}}
    />
  );
};
export default SearchBar;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
}); 