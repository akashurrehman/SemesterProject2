import React,{useState,useEffect} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { db } from "./../Api/Authentication/FireStore";
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
import { auth } from '../Api/Authentication/Auth';

function  Saved() {
    var user = auth.currentUser;
let users = [];

const  [wish,setWish]=useState('');
useEffect(() => {
    if(user)
    {
        console.log("user id",`"${user.id}"`)
    getDoc(doc(db, "wishlist","qrnmGGcNLn8oBUtkLM4o")).then((doc) => {
      if (doc.exists()) {
        console.log("Document Data",doc.data())
            setWish(doc.data().detail)
      } else {
        // doc.data() will be undefined in this case
        console.log("No such data exit!");
      }
    });
    }

},[])
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Wishlists</Text>
             <View>
                {
                    setWish? (
                        <View>
                            <Text>{wish}</Text>
                        </View>
                    )
                    :(
                        <>
                             <Text style={styles.paraStyle}>Create your first wishlist</Text>
                            <Text style={styles.paraStyle}>As you search, tap the heart icon to save your favorite places to stay or things to do to a wishlist.</Text>  
                        </>
                    )
                }
                


            </View>            
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

export default Saved;