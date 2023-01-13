import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";


class Category extends Component {
    render() {
        return (
            <View style={{ height: 170, width: 130, marginLeft: 20 }}>
                <View style={{ flex: 1 }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 2, width: null, height: null, resizeMode: 'cover',borderTopLeftRadius: 10, borderTopRightRadius: 10 }}   
                    />
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                    <Text>{this.props.name}</Text>
                    <Text>{this.props.date}</Text>
                    <Text>{this.props.rent}</Text>
                    
                </View>
            </View>
        );
    }
}
export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});