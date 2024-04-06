import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../utils/theme";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.white,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  refreshButton: {
    marginTop: 0.03 * height, 
    backgroundColor: theme.basic,
    padding: 0.03 * width, 
    borderRadius: 0.08 * Math.min(width, height),
    alignItems: "center",
    justifyContent: "center", 
  },
  error:{
    fontSize: 0.04 * width, 
    fontWeight: '500', 
    color: theme.primaryDark,
    alignSelf: 'center',
    marginLeft: 0.04 * width,
  }
});
