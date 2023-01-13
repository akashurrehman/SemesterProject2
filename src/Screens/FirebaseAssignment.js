import React,{useState,useEffect} from "react"
import {Image, Text,TextInput, StyleSheet,ScrollView, View,FlatList, Button, TouchableOpacity } from 'react-native'
import {auth} from '../Api/Authentication/Auth'
import { db } from "./../Api/Authentication/FireStore";
import {
  collection,
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore";


const FirebaseAssignment=({navigation})=>
{
	const [email, setEmail]=useState('');
	const [password, setPassword]= useState('');
    const [lastName, setLastName]= useState('');
    const [firstName, setfirstName]= useState('');
  let users = [];
function create() {
    setDoc(doc(collection(db, "users")), {
        email:email,
        password:password,
    })
      .then(() => {
        console.log("data saved ");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function getDataId() {
    getDoc(doc(db, "users", "eZtfd1hFLC6mDbmQXJ1t")).then((doc) => {
      if (doc.exists()) {
        setfirstName(doc.data().firstName);
        setLastName(doc.data().lastName);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such data exit!");
      }
    });
  }

	const handleSignUp =()=>
	{
		auth
		.createUserWithEmailAndPassword(email,password)
		.then(userCredentials => 
		{
			const user=userCredentials.user;
            create();
			console.log("registered with: ",user.email);

		}).catch(error => alert(error.message))
	}
	const handleLogin =()=>
	{
		auth
		.signInWithEmailAndPassword(email,password)
		.then(userCredentials => 
		{
			const user=userCredentials.user;
			console.log("Logged in with: ",user.email);
		}).catch(error => alert(error.message))
	}
	return(
	<ScrollView>
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
          placeholder="firstName"
          value={firstName}
          onChangeText={text => setfirstName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Last Name"
          value={lastName}
          onChangeText={text => setLastName(text)}
          style={styles.input}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
      
	</ScrollView>
	);
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
})

export default FirebaseAssignment;