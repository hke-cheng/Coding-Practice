import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Navigator
import AppNavigator from "./navigation/appNavigator";


export default function App() {
  return (
   <AppNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
