import React, { useReducer } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import ColorCounter from "../components/basics/colorCounter";


const DEGREE = 15;


//define reducer: howt to change the states
const reducer = (state, action) => {
  //state === {red:number, green:number, blue:number};
  //action === { type: "red" || "green" || "blue", payload:15||-15 }

  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };

    case "change_green":
      return state.green + action.payload > 255 || state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };

    case "change_blue":
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };

    default:
      return state;
  }

}


const ReducerExercise = ({ navigation }) => {

  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  return (
    <View style={styles.container}>

      <ColorCounter
        color="Red"
        onIncrease={() => dispatch({ type: "change_red", payload: DEGREE })}
        onDecrease={() => dispatch({ type: "change_red", payload: -1 * DEGREE })}
      />

      <ColorCounter
        color="Blue"
        onIncrease={() => dispatch({ type: "change_blue", payload: DEGREE })}
        onDecrease={() => dispatch({ type: "change_blue", payload: -1 * DEGREE })}
      />

      <ColorCounter
        color="Green"
        onIncrease={() => dispatch({ type: "change_green", payload: DEGREE })}
        onDecrease={() => dispatch({ type: "change_green", payload: -1 * DEGREE })}
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