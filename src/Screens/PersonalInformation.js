import React,{useState,useEffect} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity,TextInput } from 'react-native'
import { Searchbar } from 'react-native-paper'
import MIcon    from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from   './Login'
import {auth} from '../Api/Authentication/Auth'
import { db } from "./../Api/Authentication/FireStore";
import {
  collection,
  setDoc,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";


function PersonalInformation() {
	const [email, setEmail]=useState('');
	const [password, setPassword]= useState('');
    const [Name, setName]= useState('');
    const [gender, setGender]= useState('');
    const [EmergencyContact, setEmergencyContact]= useState('');
    const [Address, setAddress]= useState(''); 
    
    var user = auth.currentUser;
    function getDataId() {
    if(user)
    {
        console.log("user id",user.uid)
    getDoc(doc(db, "users", "user.uid")).then((doc) => {
      if (doc.exists()) {
        console.log("Document Data",doc.data())
        setEmail(doc.data().email);
        setPassword(doc.data().password);
        setName(doc.data().Name);
        setGender(doc.data().gender);
        setEmergencyContact(doc.data().EmergencyContact);
        setAddress(doc.data().Address);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such data exit!");
      }
    });
    }
  }
    function Update() {
    updateDoc(doc(db, "users", ""), {
      email: email,
      password: password,
      Name: Name,
      gender: gender,
      EmergencyContact:EmergencyContact,
      Address:Address
    })
      .then(() => {
        console.log("data updated ");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    user;
    getDataId();
    }, []);
    return (
    <View style={styles.container}>
            <Text style={{marginVertical:10, fontSize:20,textAlign:'center',fontWeight:'bold' }}> Personal Information</Text>
        <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
        <TextInput
          placeholder="Account Holder Name"
          value={Name}
          onChangeText={text => setName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Gender"
          value={gender}
          onChangeText={text => setGender(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Address"
          value={Address}
          onChangeText={text => setAddress(text)}
          style={styles.input}
        />
        <TextInput
            placeholder="Emergency Contact"
            value={EmergencyContact}
            onChangeText={text => setEmergencyContact(text)}
            style={styles.input}
        />
      </View>
        <TouchableOpacity onPress={Update} style={styles.button}>
            <Text>Update</Text>
        </TouchableOpacity>
    </View>
    )
}
const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    },
    container: {
        flex: 1,
    },
    rowcontainer: {
        flexDirection: 'row',
        marginHorizontal: 2,
        marginVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
    inputContainer: {
        width: '100%'
  },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
  },
  button:{
    marginTop:20,
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  }
});

export default PersonalInformation;