import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class TopMenu extends Component {
    render() {
        return (
            <View style={{ height: 100, width: 100 }}>
                <View style={styles.container}>
                    <View style={{ flex: 1 }}>
                        <Image source={this.props.imageUri}
                            style={{ width: 25, height: 25, resizeMode: "cover",marginTop:10}}
                        />
                    </View>
                    <View style={{ flex: 1, paddingLeft: 10, paddingTop: 0 }}>
                        <Text style={styles.iconText}>{this.props.Name}</Text>
                    </View>
                </View>
            </View>
        );
    }
}
export default TopMenu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconText:{
        fontSize: 16,
        opacity:0.5,
        fontWeight: 'bold',
        width: 100,
        textAlign: 'center'
    }
});