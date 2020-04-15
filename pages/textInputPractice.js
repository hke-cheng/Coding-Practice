import React, { useState } from 'react';
import { StyleSheet, View ,Text} from 'react-native';

import TextField from "../components/basics/textField";
import {Spacing2} from "../components/basics/spacing";

const TextInputPractice = props => {
  const [name, setName] = useState("");

  const nameHandler = (value) =>{
    setName(value);
  }

  return (
    <View style={styles.container}>

      <TextField
        label="User Name"
        placeholder="Enter your name"
        onChange={nameHandler}
      />

      <Spacing2/>

      <TextField
        label="Email"
        placeholder="Enter your Email"
        onChange={nameHandler}
      />
       <Spacing2/>
       <TextField
        label="Email"
        placeholder="Enter your Email"
        onChange={nameHandler}
      />
      <Spacing2/>

      <Text>
        Display:{name}
      </Text>

    
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  }
});

export default TextInputPractice;