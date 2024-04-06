import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../../utils/theme";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fafafa',
    borderRadius: 0.02 * width, 
    shadowOpacity: 0.1, 
    shadowRadius: 0.01 * width,
    shadowColor:theme.dark, 
    shadowOffset: { height: 0.01 * width, width: 0 },
    elevation: 3,
    marginHorizontal: 0.04 * width, 
    marginVertical: 0.015 * height,
    padding: 0.04 * width,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.02,
   
  },
  avatar: {
    width: width * 0.1,
    height: width * 0.1, 
    borderRadius: (width * 0.1) / 2,
    marginRight: width * 0.03, 
  },
titleContainer:{
   alignItems: "flex-start",
    flexShrink: 1 
},
  title: {
    fontSize: width *  0.036,
    fontWeight: '600',
    color: theme.dark,
    marginBottom: height * 0.01, 

  },
  body: {
    fontSize: width * 0.031,
    color: theme.text, 
    fontWeight:'500'
  },
  name: {
    fontSize: 0.031 * width, 
    fontWeight: '500', 
    color: theme.primaryDark,
    marginBottom: height * 0.01, 
  }
});
