import React,{useState,useEffect} from "react"
import { Text,TextInput, StyleSheet,ScrollView, View, TouchableOpacity } from 'react-native'
import {auth} from '../Api/Authentication/Auth'
import { db } from "./../Api/Authentication/FireStore";
import {
  collection,
  setDoc,
  doc,
} from "firebase/firestore";


const SignUpScreen=({navigation})=>{
    useEffect(()=>{
        const user=auth.currentUser;
            console.log(user);
            if(user){
                navigation.navigate('Login');
                console.log("Inbox");
            }
            else{
                alert("You are not logged in");
                navigation.navigate('signup');
            }	
        
    },[])
	const [email, setEmail]=useState('');
	const [password, setPassword]= useState('');
    const [name, setName]= useState('');
    const [address, setAddress]= useState('');
    const [gender, setGender]= useState('');
    const [EmergencyContact,setEmergencyContact]=useState('')
    
    let users = [];
    
    function create() {
    setDoc(doc(collection(db, "users")), {
      email: email,
      password:password,
      name:name,
      address:address,
      gender:gender,
      EmergencyContact: EmergencyContact
    })
    .then(() => {
        console.log("Data saved of the New Users Collection");
    })
      .catch((error) => {
        console.log(error);
    });
}

  /*
  function getDataId() {
    getDoc(doc(db, "users", "eZtfd1hFLC6mDbmQXJ1t")).then((doc) => {
      if (doc.exists()) {
        setEmail(doc.data().email);
        setPassword(doc.data().password);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such data exit!");
      }
    });
  }
    function Update() {
    updateDoc(doc(db, "users", "nnO4S8s0eshrm7hkjtto"), {
      email: email,
      password: password,
    })
      .then(() => {
        console.log("data updated ");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function Delete() {
    deleteDoc(doc(db, "users", "nnO4S8s0eshrm7hkjtto"))
      .then(() => {
        console.log("data deleted ");
      })
      .catch((error) => {
        console.log(error);
      });
  }
    function getAllData() {
    getDocs(collection(db, "users")).then((docSnap) => {
      docSnap.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });
      console.log("Document data:", users);
    });
  }

  function getDataWithQuery() {
    getDocs(query(collection(db, "users"), where("email", "==", "akash123@gmail.com"))).then(
      (docSnap) => {
        let users = [];
        docSnap.forEach((doc) => {
          users.push({ ...doc.data(), id: doc.id });
        });
        console.log("Document data:", users);
      }
    );
  }
  */
	const handleSignUp =()=>
	{
		auth
		.createUserWithEmailAndPassword(email,password)
		.then(userCredentials => 
		{
			const user=userCredentials.user;
            create();
			console.log("registered with: ",user);

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
          placeholder="Full Name"
          value={name}
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
          value={address}
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

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={()=>{navigation.navigate("Login")}}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Already Have account? Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register!</Text>
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
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: '#F5FCFF',
    borderColor: '#E0E0E0',
  },
  input: {
    width: '100%',
    justifyContent:"center",
    alignItems:"center",
    height: 50,
    alignContent:"center",
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

export default SignUpScreen;