import React, { useState,useEffect } from "react";
import { ScrollView,View,Image,TouchableOpacity, Text, StyleSheet } from "react-native";
import axios from "axios";
import SearchBar from "../../Components/SearchBar";
import SearchList from '../../Screens/TestScreens/SearchList'   
const SearchScreen = ({ navigation, ...props }) => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  
  const result = props.route.params.result;
  const timeout = React.useRef(null); 
  var valueResult = result.replace(/["']/g, "");
  
const searchApi = () => {
  let arr=[];
  const options = {
  method: 'GET',
  url: 'https://travel-advisor.p.rapidapi.com/locations/search',
  params: {
    query: result,
    limit: '30',
    offset: '0',
    units: 'km',
    location_id: '1',
    currency: 'USD',
    sort: 'relevance',
    lang: 'en_US'
  },
  headers: {
    'X-RapidAPI-Key': 'cb3c6f9f7cmsh113492b34cc6df8p125578jsn11a8ac9214be',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }

};
  axios.request(options).then(function (response) {
    for (let i = 0; i < response.data.data.length; i++) {
                arr.push(response.data.data[i].result_object);
      }
      setResults(arr);
	  console.log(response.data);
  }).catch(function (error) {
	  console.error(error);
  });
};
    useEffect(()=>{
        searchApi()
        results.map((result)=>{
            console.log(result.name)
        })
    },[])

    const method=()=>{
      clearTimeout(timeout.current);
      timeout.current = setTimeout(()=>{
        return(
          <View>
              <Text style={{fontSize:16,fontStyle:"bold",textAlign:"center"}}>
                  No result found
              </Text>
          </View>
      )
    }, 100000);                    
}
    
  return (
    <ScrollView>
      <View>
          <Text style={style.title}>Places in {valueResult} </Text>
          <View>
            {results.length ? (
              
              results.map((item,index) => <View key={item.index}>
                    <TouchableOpacity onPress={()=>{navigation.navigate("Bookmethod",{result:`${item.name}`})}}>
                        <Image style={style.imageCss} 
                            source={{ uri: `${item.photo.images.large.url}` }} />
                    </TouchableOpacity>
                  <View style={{marginHorizontal:20,}}>  
                    <Text style={{fontSize:18,fontStyle:"bold"}}>
                        Place Name: {item.name}
                    </Text>
                    <Text style={{fontSize:18,fontStyle:"bold"}}>
                        Rating: {item.rating}                     </Text>
                    <Text style={{fontSize:18,fontStyle:"bold"}}>
                        Address: {item.address}
                    </Text>
                    <Text style={{fontSize:18,fontStyle:"bold"}}>
                        Rent: 500$
                    </Text>
                  </View>
                </View>
                )
            ) : (
              method()
            )}
          </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  
  button:{
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 10
  },
  imageCss:{
        borderRadius: 40,
        width: 350,
        height: 300,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10

    }
});

export default SearchScreen;