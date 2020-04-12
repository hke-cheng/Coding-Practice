import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ExercisePage = props => {
  return (
    <View style={styles.container}>
      <Text>Put exercise content here</Text>
    </View>
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

export default ExercisePage;