import React, { useState, } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import ColorCounter from "../components/basics/colorCounter";

const ReducerExercise = ({ navigation }) => {

  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);
  const DEGREE = 15;

  const setColor = (color, change) => {
    // color === "red","green","blue";
    //change === +15,-15

    if (color === "red") {
      if (red + change > 255 || red + change < 0) {
        return;
      } else {
        setRed(red + change);
      }
    }
  };


  return (
    <View style={styles.container}>

      <ColorCounter
        color="Red"
        onIncrease={() => setColor("red", DEGREE)}
        onDecrease={() => setColor("red", -1 * DEGREE)}
      />

      <ColorCounter
        color="Blue"
        onIncrease={() =>
          setBlue(blue + DEGREE)
        }
        onDecrease={() => setBlue(blue - DEGREE)}
      />

      <ColorCounter
        color="Green"
        onIncrease={() => setGreen(green + DEGREE)}
        onDecrease={() => setGreen(green - DEGREE)}
      />

      <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})` }} />




    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ReducerExercise;