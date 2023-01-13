import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import NewApi from '../TestScreens/NewApi';

function Trending() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Trending Cities</Text>
            <NewApi id='1377071'/>
        </View>
    );
}
const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default Trending;