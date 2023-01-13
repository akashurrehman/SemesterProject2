import React,{useState,useEffect} from "react"
import {Text,TextInput, StyleSheet,ScrollView, View,FlatList, Button, TouchableOpacity } from 'react-native'

const LabAssignment4=({})=>
{
	const [color, setcolor]=useState('#fff9f9');
    const [padding, setpadding]=useState('15%');
    const [backColor, setbackColor]=useState('#000000');
    const [align, setalign]=useState('center');   

    useEffect(() => {
        console.log("color",color);
        console.log("padding",padding);
        console.log("backColor",backColor);
        console.log("align",align);
    }, [color,padding,backColor,align]);
	return(
	<ScrollView>
	 <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add color"
          value={color}
          onChangeText={ (color) => {setcolor(color)}}
          style={styles.input}
        />
        <TextInput
          placeholder="Add padding"
          value={padding}
          onChangeText={ (color) => {setpadding(color)}}
          style={styles.input}
        />
        <TextInput
          placeholder="Add background color"
          value={backColor}
          onChangeText={ (color) => {setbackColor(color)}}
          style={styles.input}
        />
        <TextInput
          placeholder="Add Align"
          value={align}
          onChangeText={ (align) => {setalign(align)}}
          style={styles.input}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{color:`"${color}"`,padding:`"${padding}"`,backgroundColor:`"${backColor}"`,alignItems:`"${align}"`}}
        >
          <Text>Change me!</Text>
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
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
})

export default LabAssignment4;