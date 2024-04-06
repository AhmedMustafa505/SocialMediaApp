import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../utils/theme";

const { width, height } = Dimensions.get("window");
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 0.04 * width, 
      backgroundColor: theme.white, 

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
  card: {
    backgroundColor: theme.white,
    borderRadius: 0.02 * width, 
    shadowOpacity: 0.1, 
    shadowRadius: 0.01 * width,
    shadowColor:theme.dark, 
    shadowOffset: { height: 0.01 * width, width: 0 },
    elevation: 3,
    marginHorizontal: 0.04 * width, 
    marginVertical: 0.03 * height,
    padding: 0.04 * width,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    marginBottom: 0.02 * height, 
  },
  avatar: {
    width: 0.15 * width, 
    height: 0.15 * width,
    borderRadius: 0.075 * width, 
    marginRight: 0.04 * width, 
  },
  titleContainer:{
   alignItems: "flex-start",
   flexShrink: 1 
  },
  name: {
    fontSize: 0.031 * width, 
    fontWeight: '500', 
    color: theme.primaryDark,
    marginBottom: height * 0.01, 
  },
  noCommentsContainer:{
justifyContent:'center',
  },
  noComments:{
    fontSize: 0.04 * width, 
    fontWeight: '500', 
    color: theme.white,
    alignSelf: 'center',
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