import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import ResultList from './ResultList';
const NewApi =(id)=>{
    const [results,setResult]=useState([]);

    const apiMethods =()=>{
        console.log("Api Method Called")
const options = {
  method: 'GET',
  url: 'https://booking-com.p.rapidapi.com/v1/hotels/photos',
  params: {hotel_id: id, locale: 'en-gb'},
  headers: {
    'X-RapidAPI-Key': 'a9049d9d0emshd876d1f42bf930ap1e606ajsn6333d0983e77',
    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
  }
};
axios.request(options).then(function (response) {
	console.log(response.data.ml_tags);
    setResult(response.data);
}).catch(function (error) {
	console.error(error);
});
}
useEffect(()=>{
    apiMethods();
},[]);
    return(
        <View>
            <Text>We have total values of {results.length} length</Text>
            <ResultList results={results} title="Sort by Country" />
        </View>
    );
}


const styles=StyleSheet.create({
    button:{
        backgroundColor:'red',
        color:'white',
        padding:10,
        margin:10,
        textAlign:'center'
    }
});
export  default NewApi;