import React,{useState,useEffect} from 'react'
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import rapidApi from '../../Api/RapidApi/rapidApi';
import {TextInput} from 'react-native'


const RapidApiTest = () => {
    const [results,setResult]=useState([]);
    const searchApi =async()=>
    {
        console.log("searchApi called");
	    const response = await rapidApi.get('/search',{
	        params:
    	    {
	            limit:40,
	            location: 'san francisco'	
	        }
	    }).catch((err)=>{
            console.log(err)
        });
	        setResult(response.data.businesses);
    }
    useEffect(()=>{
        searchApi('pasta');
    },[]);
    return(
        <View>
            <Text>We have found {results.length} results</Text>    
        </View>
    );
}
export default RapidApiTest;

const styles=StyleSheet.create({
    button:{
        backgroundColor:'red',
        color:'white',
        padding:10,
        margin:10,
        borderRadius:10,
        textAlign:'center'
    }
});
