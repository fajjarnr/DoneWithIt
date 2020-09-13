import React from "react";
import { StyleSheet, Text } from "react-native";

export default function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "gold",
    fontFamily: "Roboto",
    fontSize: 20,
  },
});
