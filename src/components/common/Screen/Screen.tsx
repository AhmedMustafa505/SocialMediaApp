import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { ScreenProps } from "./interface";
import { LinearGradient } from "expo-linear-gradient";

const Screen: React.FC<ScreenProps> = ({
  children,
  style,
  statusBarStyle = "light-content",
  statusBarHidden = false,
  gradientColors = ["#FFFFFF", "#FFFFFF"],
}) => {
  return (
    <>
      <StatusBar barStyle={statusBarStyle} hidden={statusBarHidden} />
      <LinearGradient colors={gradientColors} style={[styles.wrapper, style]}>
        <SafeAreaView style={[{ flex: 1 }, style]}>{children}</SafeAreaView>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 20,
  },
});

export default Screen;
