import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {

  //color === "Red","Blue","Green"
  return <View style={styles.center}>

    <Text>{color}</Text>

    <View>

      <Button
        title={`Increase ${color}`}
        onPress={() => { 
          onIncrease()
        }}
      />

      <Button title={`Decrease ${color}`}
        onPress={() => {
          onDecrease()
        }}
      />
    </View>

  </View>
}

const styles = StyleSheet.create({
  center: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ColorCounter;
