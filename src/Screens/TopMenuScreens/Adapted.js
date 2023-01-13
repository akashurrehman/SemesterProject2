import react from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native'
import NewApi from '../TestScreens/NewApi';
function Adapted(){
    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>
                Adapted Cities
            </Text>
            <NewApi id='1377071' />
        </View>
    );
}
const styles= StyleSheet.create({
    textStyle:{
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",
        marginTop:10,
    },
    container:{
        flex:1,
        justifyContent:"center"
    },
});
export default Adapted;