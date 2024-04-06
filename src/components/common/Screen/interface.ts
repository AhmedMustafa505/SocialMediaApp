import { StatusBarStyle, ViewStyle } from "react-native";

export interface ScreenProps {
  children: React.ReactNode;
  style?: ViewStyle;
  statusBarStyle?: StatusBarStyle;
  statusBarHidden?: boolean;
  gradientColors?: string[];
  }