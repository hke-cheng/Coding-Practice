import React from "react";
import { View, StyleSheet } from "react-native";

export const Spacing1 = props => {
  return <View style={styles.spacing1} />
}

export const Spacing2 = props => {
  return <View style={styles.spacing2} />
}


const styles = StyleSheet.create({
  spacing1: {
    // backgroundColor:"blue",
    width: "100%",
    height: 8
  },
  spacing2: {
    // backgroundColor:"blue",
    width: "100%",
    height:16
  }
});

