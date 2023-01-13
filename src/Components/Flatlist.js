import { Stylesheet } from 'react-native'
import React from 'react'
import { ScrollView, Text, View, StyleSheet, FlatList } from 'react-native'

const Flatlist = () => {
    const friends = [
        { name: 'Friend #1', age: 20 },
        { name: 'Friend #2', age: 45 },
        { name: 'Friend #3', age: 32 },
        { name: 'Friend #4', age: 27 },
        { name: 'Friend #5', age: 53 },
        { name: 'Friend #6', age: 30 },
        { name: 'Friend #7', age: 21 },
        { name: 'Friend #8', age: 22 },
        { name: 'Friend #9', age: 25 },
    ]
    return (
        <View style={styles.container}>
            <ScrollView Vertical>
                <FlatList
                    keyExtractor={(friend) => friend.name}
                    data={friends}
                    horizontal={false}
                    renderItem={({ item }) => {
                        return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
                    }}
                />
            </ScrollView>
        </View>
    )
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

export default Flatlist;