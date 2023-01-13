import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Searchbar } from 'react-native-paper'
import MIcon    from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from   './Login'
function Profile({navigation}) {
    return (
        <View style={styles.container}>
            <Text> Profile</Text>
            <Text>Akash Ur Rehman</Text>
            <View style={styles.rowcontainer}>
                <TouchableOpacity onPress={()=>{navigation.navigate("ProfileSetting")}}>
                    <Text>Show Profile</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.rowcontainer}>
                <MIcon name="account-circle" 
                    style={{ flex: 1, width: 50, height: 50, resizeMode: "cover" }}
                />
                <TouchableOpacity onPress={()=>{navigation.navigate("PersonalInformation")}}>
                    <Text>Personal Information</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.rowcontainer}>
                <MIcon name="account-settings" 
                    style={{ flex: 1, width: 50, height: 50, resizeMode: "cover" }}
                />
                <TouchableOpacity onPress={()=>{navigation.navigate("AccountSettings")}}>
                    <Text>Account  Settings</Text>
                </TouchableOpacity>
            </View>
            <Login />
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
    }
});

export default Profile;