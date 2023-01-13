import React, { useState,useEffect } from "react";
import { ScrollView,View,Image,TouchableOpacity, Text, Alert,StyleSheet } from "react-native";
import axios from "axios";
import {
  collection,
  setDoc,
  doc,
  query,
  where,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { auth } from "../Api/Authentication/Auth";
import { db } from "../Api/Authentication/FireStore";

const Bookmethod = ({navigation,...props}) => {
  var user = auth.currentUser;
  const [results, setResults] = useState([]);
  
  const result = props.route.params.result;

const searchApi = () => {
  let arr=[];

const options = {
  method: 'GET',
  url: 'https://airbnb13.p.rapidapi.com/search-location',
  params: {
    location: result,
    limit:'1',
    adults: '1',
    children: '0',
    infants: '0',
    page: '1',
    checkin: '2023-05-16',
    checkout: '2023-05-18',

  },
  headers: {
    'X-RapidAPI-Key': 'a9049d9d0emshd876d1f42bf930ap1e606ajsn6333d0983e77',
    'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
  }
};
  axios.request(options).then(function (response) {
    for (let i = 0; i < 1; i++) {
        arr.push(response.data.results[i]);
      }
      setResults(arr);
	  console.log(response.data);
  }).catch(function (error) {
	  console.error(error);
  });
};
    useEffect(()=>{
        searchApi()
        if(!user){
            Alert.alert(
                'Error',
                'You are not logged in',
            )
            navigation.navigate("Login")
        }
    },[])

    function create() {
      setDoc(doc(collection(db, "Trips")), {
        result
      })
        .then(() => {
          console.log("Trips saved ");
          Alert.alert("Booking Done.");
          navigation.navigate("Trips");
        })
        .catch((error) => {
          console.log(error);
        });
  }
  return (
    <ScrollView>
      <View style={{marginTop:20}}>
          <Text style={style.title}>Welcome to Booking Screen </Text>
          <View>
            {
              results.map((item) => <View key={item.index}>
                        <Image style={style.imageCss} 
                            source={{ uri: `${item.images[3]}` }} />
                <View style={{marginHorizontal:10,marginBottom:5}}>                
                    <Text style={{fontSize:16,fontStyle:"bold"}}>
                        Place Name: {item.name}
                    </Text>
                    <Text style={{fontSize:16,fontStyle:"bold"}}>
                        Bed Rooms: {item.bedrooms}
                    </Text>
                    <Text style={{fontSize:16,fontStyle:"bold"}}>
                        Bath Rooms: {item.bathrooms}
                    </Text>
                    <Text style={{fontSize:16,fontStyle:"bold"}}>
                        Beds: {item.bathrooms}
                    </Text>
                    <Text style={{fontSize:16,fontStyle:"bold"}}>
                        Reviews: {item.reviewCount}          
                    </Text>
                    <Text style={{fontSize:16,fontStyle:"bold"}}>
                        Address: {item.address}
                    </Text>
                    
                    <Text style={{fontSize:16,fontStyle:"bold"}}>
                        Facilities: {item.previewAmenities[0]}  &&
                           {item.previewAmenities[1]}
                    </Text>    
                    
                    <Text style={{fontSize:16,fontStyle:"bold"}}>
                        Price: {item.price.total}$
                    </Text>  
                </View>
                    <TouchableOpacity  style={style.TouchableOpacityCss} onPress={create}>
                        <Text style={{fontSize:16,fontStyle:"bold"}}>
                          Book Now
                        </Text>
                    </TouchableOpacity>
                </View>

            )}
          </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  title: {
    marginTop:20,
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

    },
    TouchableOpacityCss:{
        opacity: 0.5,
        backgroundColor: 'transparent',
        borderRadius: 5,
        width: 350,
        height: 30,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        borderColor: 'black',
        borderWidth: 1,
        overflow: 'hidden'
    }
});

export default Bookmethod;