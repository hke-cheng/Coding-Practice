import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

const TextPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>This is Text Page</Text>
      <Button 
      title="exercise" 
      onPress={()=>{navigation.navigate("ExercisePage")}}
      />
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

export default TextPage;
