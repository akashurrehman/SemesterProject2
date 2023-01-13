import React,{useState,useEffect} from "react"
import {Image,Text,TextInput, StyleSheet,ScrollView, View,TouchableOpacity } from 'react-native'
import {auth} from '../Api/Authentication/Auth'
import { db } from "./../Api/Authentication/FireStore";
import {
  collection,
  setDoc,
  doc,
} from "firebase/firestore";
import { Alert } from "react-native";


const LoginScreen=({navigation})=>{

  useEffect(()=>{
		const session = auth.onAuthStateChanged(
		user => {
			if(user)
			{
				navigation.navigate("Explore");
        Alert.alert(user.displayName, "Hello " + user.email)
			}
		}
		)
		return session;
},[])

	const [email, setEmail]=useState('');
	const [password, setPassword]= useState('');

    
  let users = [];
    function create() {
    setDoc(doc(collection(db, "users")), {
      email: email,
      password:password,
    })
      .then(() => {
        console.log("data saved ");
      })
      .catch((error) => {
        console.log(error);
      });
}

	const handleLogin =()=>
	{
		auth
		.signInWithEmailAndPassword(email,password)
		.then(userCredentials => 
		{
			const user=userCredentials.user;
			console.log("Logged in with: ",user.email);
      create();
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
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{navigation.navigate("signup")}}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register to the Application</Text>
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
    width: '100%',
    marginTop:20,

  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '100%',
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

export default LoginScreen;