import React,{useEffect} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Searchbar } from 'react-native-paper'
import MIcon    from 'react-native-vector-icons/MaterialCommunityIcons';
import { auth } from '../Api/Authentication/Auth';
function AccountSettings({navigation}) {
    const user=auth.currentUser;
    useEffect(() => {
        if(!user)
        {
            navigation.navigate("Login");

        }
},[])
    const Logout=()=>{
        if(user)
        {
            auth.signOut().then(()=>
            {
                navigation.navigate("Explore");
                console.log("Logout");
            }).catch(error=>alert(error.message))
        }
    }
    return (
        <View style={styles.container}>
            <Text style={{marginVertical:10, fontSize:20,textAlign:'center',fontWeight:'bold' }}> Account Settings</Text>
            <View style={styles.rowcontainer}>
            </View>
            <View style={styles.rowcontainer}>
                <MIcon name="account-circle" 
                    style={{ flex: 1, width: 68, height: 75, resizeMode: "cover" }}
                />
                <TouchableOpacity onPress={()=>{navigation.navigate("PersonalInformation")}}>
                    <Text style={{fontSize:16 }}>Personal Information</Text>
                </TouchableOpacity>
            </View>
            
                <View style={styles.rowcontainer}>
                    <TouchableOpacity onPress={Logout} style={styles.button}>
                        <Text style={styles.buttonText}>Logout</Text>
                    </TouchableOpacity>
                </View>
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
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
      },
      buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
      },
    rowcontainer: {
        flexDirection: 'row',
        marginHorizontal: 2,
        marginVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    }
});

export default AccountSettings;