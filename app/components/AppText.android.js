import React from "react";
import { StyleSheet, Text } from "react-native";

export default function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto",
    fontSize: 18,
  },
});
