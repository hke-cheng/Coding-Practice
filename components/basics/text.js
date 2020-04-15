import React from "react";
import { Text, StyleSheet } from "react-native";

//Header
export const H0 = props => {
  return <Text {...props} style={styles.H0}>{props.children}</Text>
};

export const H1 = props => {
  return <Text {...props} style={styles.H1}>{props.children}</Text>
};

export const H2 = props => {
  return <Text {...props} style={styles.H2}>{props.children}</Text>
};

export const H3 = props => {
  return <Text {...props} style={styles.H3}>{props.children}</Text>
};

export const H4 = props => {
  return <Text {...props} style={styles.H4}>{props.children}</Text>
};

// Body

export const B0 = props => {
  return <Text {...props} style={styles.B0}>{props.children}</Text>
};

export const B1 = props => {
  return <Text {...props} style={styles.B1}>{props.children}</Text>
};

export const B2 = props => {
  return <Text {...props} style={styles.B2}>{props.children}</Text>
};

export const B3 = props => {
  return <Text {...props} style={styles.B3}>{props.children}</Text>
};

export const B4 = props => {
  return <Text {...props} style={styles.B4}>{props.children}</Text>
};





const LETTERSPACING = 0.03;
const LINEHEIGHT = 1.4;
const PARAGRAHSAPCING = 1;


const styles = StyleSheet.create({
  //Header
  H0: { fontSize: 24, fontWeight: "bold", letterSpacing: 24 * LETTERSPACING, lineHeight: 24 * LINEHEIGHT,},
  H1: { fontSize: 20, fontWeight: "bold", letterSpacing: 20 * LETTERSPACING, lineHeight: 20 * LINEHEIGHT,},
  H2: { fontSize: 16, fontWeight: "bold", letterSpacing: 16 * LETTERSPACING, lineHeight: 16 * LINEHEIGHT,},
  H3: { fontSize: 14, fontWeight: "bold", letterSpacing: 14 * LETTERSPACING, lineHeight: 14 * LINEHEIGHT,},
  H4: { fontSize: 12, fontWeight: "bold", letterSpacing: 12 * LETTERSPACING, lineHeight: 12 * LINEHEIGHT,},

  // Body
  B0: { fontSize: 24, fontWeight: "normal", letterSpacing: 24 * LETTERSPACING, lineHeight: 24 * LINEHEIGHT, marginTop: 14 * PARAGRAHSAPCING },
  B1: { fontSize: 20, fontWeight: "normal", letterSpacing: 20 * LETTERSPACING, lineHeight: 20 * LINEHEIGHT, marginTop: 14 * PARAGRAHSAPCING },
  B2: { fontSize: 16, fontWeight: "normal", letterSpacing: 16 * LETTERSPACING, lineHeight: 16 * LINEHEIGHT, marginTop: 14 * PARAGRAHSAPCING },
  B3: { fontSize: 14, fontWeight: "normal", letterSpacing: 14 * LETTERSPACING, lineHeight: 14 * LINEHEIGHT, marginTop: 14 * PARAGRAHSAPCING },
  B4: { fontSize: 12, fontWeight: "normal", letterSpacing: 12 * LETTERSPACING, lineHeight: 12 * LINEHEIGHT, marginTop: 12 * PARAGRAHSAPCING },


});