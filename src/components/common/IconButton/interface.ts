import { ViewStyle } from "react-native";

export interface IconButtonProps {
  style?: ViewStyle;
  onPress: () => void,
  showComments: boolean,
  }