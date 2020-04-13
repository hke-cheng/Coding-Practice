import React, { useReducer } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import ColorCounter from "../components/basics/colorCounter";


const DEGREE = 15;


//define reducer: howt to change the states
const reducer = (state, action) => {
  //state === {red:number, green:number, blue:number};
  //action === { colorToChange: "red" || "green" || "blue", amount:15||-15 }

  switch (action.colorTochange) {
    case "red":
      return { ...state, red: state.red + action.amount };
    case "green":
      return { ...state, green: state.green + action.amount };
    case "blue":
      return { ...state, blue: state.blue + action.amount };
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
        onIncrease={() => dispatch({ colorTochange: "red", amount: DEGREE })}
        onDecrease={() => dispatch({ colorTochange: "red", amount: -1 * DEGREE })}
      />

      <ColorCounter
        color="Blue"
        onIncrease={() => dispatch({ colorTochange: "blue", amount: DEGREE })}
        onDecrease={() => dispatch({ colorTochange: "blue", amount: -1 * DEGREE })}
      />

      <ColorCounter
        color="Green"
        onIncrease={() => dispatch({ colorTochange: "green", amount: DEGREE })}
        onDecrease={() => dispatch({ colorTochange: "green", amount: -1 * DEGREE })}
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