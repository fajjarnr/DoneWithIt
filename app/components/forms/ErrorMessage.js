import React from "react";
import { StyleSheet } from "react-native";
import AppText from "../Text";

export default function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null; //jika visible false atau tidak error maka null
  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});
