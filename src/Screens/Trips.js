import React,{useState,useEffect} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { db } from "./../Api/Authentication/FireStore";
import {
  doc,
  getDoc,
} from "firebase/firestore";
import { auth } from '../Api/Authentication/Auth';

function  Trips({navigation}) {
    var user = auth.currentUser;
    let results = [];

const  [saved,setsaved]=useState('');
useEffect(() => {
    if(user)
    {
        console.log("user id",user.id)
    getDoc(doc(db, "Trips", "6LJIJuVdPkMjfzeA9skD")).then((doc) => {
      if (doc.exists()) {
        console.log("Document Data",doc.data())
            setsaved(doc.data().result)

            console.log("results",setsaved)
        
      } else {
        // doc.data() will be undefined in this case
        console.log("No such data exit!");
      }
    });
    }

},[])
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Trips</Text>
            {
                setsaved? (
                    <View>
                        <Text>{saved}</Text>
                    </View>
                ):(
                    <>
                     <Text style={styles.paraStyle}>No trips booked...yet!</Text>
                        <Text style={styles.paraStyle}>Time to dust off your bags and start planning your next adventure.</Text>
                        <TouchableOpacity style={{borderRadius:5,borderColor:"#000",borderWidth:1,backgroundColor:"#fff",width:150}} onPress={()=>{navigation.navigate("Explore")}}>
                            <Text style={{color:"#000",fontSize:20,textAlign:"center",justifyContent:"center",paddingVertical:6}}>Start Searching</Text> 
                        </TouchableOpacity>
                    </>
                )
            }
           
        </View>
    )
}
const styles = StyleSheet.create({
    textStyle: {
        paddingTop:40,
        fontSize:20,
        fontWeight:"bold",
        textAlign:"justify",

    },
    paraStyle:{
        width:300,
        paddingVertical:10,
        fontSize:16,
        textAlign:"justify",

    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingLeft: 25,
    },
});

export default Trips;