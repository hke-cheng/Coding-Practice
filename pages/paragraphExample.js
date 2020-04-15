import React from 'react';
import { StyleSheet, View } from 'react-native';

import { H0, H1, H2, H3, H4, B0, B1, B2, B3, B4} from "../components/basics/text";


const ParagraphExamples = props => {
  return (
    <View style={styles.container}>


      <H0>Put your title here</H0>

      <B3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Consectetur adipiscing elit ut aliquam purus sit amet. Erat pellentesque 
      adipiscing commodo elit at imperdiet dui. Felis bibendum ut tristique et egestas. 
      Risus sed vulputate odio ut enim blandit volutpat. 
      Vitae sapien pellentesque habitant morbi tristique senectus. 
      Velit sed ullamcorper morbi tincidunt. Nascetur ridiculus mus mauris 
      vitae ultricies leo. Scelerisque eu ultrices vitae auctor eu augue. 
      Quis vel eros donec ac odio.  </B3>

      <B3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Consectetur adipiscing elit ut aliquam purus sit amet. Erat pellentesque 
      adipiscing commodo elit at imperdiet dui. Felis bibendum ut tristique et egestas. 
      Risus sed vulputate odio ut enim blandit volutpat. 
      Vitae sapien pellentesque habitant morbi tristique senectus. 
      Velit sed ullamcorper morbi tincidunt. Nascetur ridiculus mus mauris 
      vitae ultricies leo. Scelerisque eu ultrices vitae auctor eu augue. 
      Quis vel eros donec ac odio.  </B3>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    paddingHorizontal:16,
    paddingVertical:24,
    backgroundColor: '#fff',

  },
});

export default ParagraphExamples;