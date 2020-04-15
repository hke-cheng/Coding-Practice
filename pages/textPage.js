import React from 'react';
import { StyleSheet, View} from 'react-native';

//Font
import { H0, H1, H2, H3, H4, B0, B1, B2, B3, B4} from "../components/basics/text";

const TextPage = ({ navigation }) => {
  return (
    <View style={styles.container}>

      {/* Header */}
      <H0>this kdfksdjfldksjfldksjflkdsjfldksjfldskjflkdsjflkdsjfkldsjfldksjfdlkjfdlskj</H0>
      <H0>H0 | Bold | 24px</H0>
      <H1>H1 | Bold | 20px</H1>
      <H2>H2 | Bold | 16px</H2>
      <H3>H3 | Bold | 14px</H3>
      <H4>H4 | Bold | 12px</H4>

      {/* Body */}
      <B0>B0 | Regular | 24px</B0>
      <B1>B1 | Regular | 20px</B1>
      <B2>B2 | Regular | 16px</B2>
      <B3>B3 | Regular | 14px</B3>
      <B4>B4 | Regular | 12px</B4>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default TextPage;
