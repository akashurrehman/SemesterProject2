import React,{useEffect} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { auth } from '../Api/Authentication/Auth';



function  Inbox({navigation}) {
    
    useEffect(()=>{
	const user=auth.currentUser;
        console.log(user);
        if(user){
            navigation.navigate('Inbox');
            console.log("Inbox");
        }
        else{
            alert("You are not logged in");
            navigation.navigate('Login');
        }	
	
},[])
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Inbox</Text>
            <View style={{justifyContent:"center",alignItems:"center"}}>
                <Text style={styles.paraStyle}>You have no unread Messages</Text>
                <Text style={styles.paraStyle}>When you book a trip or experience, messages from your host will show up here.</Text>
                <TouchableOpacity style={{borderRadius:5,borderColor:"#000",borderWidth:1,backgroundColor:"#fff",width:150}} onPress={()=>navigation.navigate("Explore")}>
                    <Text style={{color:"#000",fontSize:20,textAlign:"center",justifyContent:"center",paddingVertical:6}}>Explore AirBNB</Text> 
                </TouchableOpacity>
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
        textAlign:"center",

    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingLeft: 25,
    },
});

export default Inbox;