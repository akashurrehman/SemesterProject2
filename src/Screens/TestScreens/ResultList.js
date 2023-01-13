import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ScrollView } from "react-native";

const ResultList = ({ results,image }) => {
  console.log("Location String", results.location_string)
  return (
    <View>
        <Image style={{ width: 250, height: 250,resizeMode:'contain', justifyContent:'center',alignItems:'center', marginTop:10, borderRadius:10}} 
              source={{ uri: `${image.url}` }} />
        <Text>{results.location_string}</Text>
        <Text>Reviews:{results.num_reviews}</Text>
        
    </View>
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
    paddingHorizontal: 5,
    borderRadius:10
  }
});

export default ResultList;