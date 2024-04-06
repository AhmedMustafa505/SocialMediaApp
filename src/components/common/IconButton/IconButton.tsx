import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { IconButtonProps } from "./interface";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { theme } from "../../../utils/theme";

const IconButton: React.FC<IconButtonProps> = ({
  style,
  onPress,
  showComments,
}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <MaterialCommunityIcons
        name={showComments ? "chevron-up" : "chevron-down"}
        size={24}
        color={theme.basic}
      />
    </TouchableOpacity>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.background,
    borderRadius: 0.1 * width,
    width: 0.1 * width,
    height: 0.1 * width,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default IconButton;
