import React from 'react';
import { StyleSheet, Button, View } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Text Component"
        onPress={() => { navigation.navigate("TextPage") }} />
      <Button
        title="Exercise-2"
        onPress={() => { navigation.navigate("ExercisePage") }} />

      <Button
        title="Section 6: Reducer Exercise"
        onPress={() => { navigation.navigate("ReducerExercise") }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomePage;
