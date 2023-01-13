import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ScrollView } from "react-native";

const SearchList = ({ images }) => {
  return (
    <ScrollView>
      <FlatList
        data={images}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <View style = {style.container}> 
              <Image style={{ width: 250, height: 250,resizeMode:'contain', justifyContent:'center',alignItems:'center', marginTop:10, borderRadius:10}} 
              source={{ uri: `${item.url}` }} />
              <Text>{item.ml_tags.tag_name}</Text>
            </View>
          );
        }}
      />
    </ScrollView>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },

  image:{
    height:250,
    width:275,
  },

  container: {
    borderRadius:10
  }
});

export default SearchList;