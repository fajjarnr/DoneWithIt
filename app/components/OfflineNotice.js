import React from "react";
import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";
import Text from "./Text";
import { useNetInfo } from "@react-native-community/netinfo";

export default function OfflineNotice() {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknow" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    );

  return null;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "100%",
    zIndex: 1,
    position: "absolute",
    top: Constants.statusBarHeight,
  },
  text: {
    color: colors.white,
  },
});
