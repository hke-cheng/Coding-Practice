import React from 'react';
import { StyleSheet, Button, View } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Text Component"
        onPress={() => { navigation.navigate("TextPage") }} />

      <Button
        title=" Paragraph Example"
        onPress={() => { navigation.navigate("ParagraphExample") }} />
        
      <Button
        title="Exercise-2"
        onPress={() => { navigation.navigate("ExercisePage") }} />

      <Button
        title="Section 6: Reducer Practice"
        onPress={() => { navigation.navigate("ReducerExercise") }} />

      <Button
        title="Section 6.1 : TextInput Practice"
        onPress={() => { navigation.navigate("TextInputPractice") }} />

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
