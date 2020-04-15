import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import Colors from "../../constance/colors";
import {Spacing1} from "./spacing";



const TextField = props => {
  
  const [content, setContent]= useState("");

  return (<View>

    <Text style={styles.label}>{props.label}</Text>

    <Spacing1/>
    
    <TextInput
      placeholder={props.placeholder}
      style={styles.textInput}
      autoCapitalize = "none"
      autoCorrect = {false}
      value={content}
      onChangeText={(newValue)=>{
        setContent(newValue);
        props.onChange(newValue);
        }}
    />

  </View>)
};

const styles = StyleSheet.create({
  textInput: {
    height: 48,
    width: "100%",
    paddingHorizontal: 16,
    fontSize: 16,
    borderRadius:4,
    backgroundColor:Colors.grey1
  },
  label:{
    fontSize: 16,
    fontWeight:"bold"
  },
  spacing:{
    // backgroundColor:"blue",
    width:"100%",
    height:8
  }
});


export default TextField;