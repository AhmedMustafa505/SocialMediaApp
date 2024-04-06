import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HeaderBackButton } from "@react-navigation/elements";
import { MaterialIcons } from "@expo/vector-icons";

import { HomeScreen, PostDetailsScreen, SplashScreen } from "../screens";
import { PostProps } from "../components/features/PostCard/interface";
import { Dimensions, StyleSheet, View } from "react-native";
import { theme } from "../utils/theme";

export type RootStackParamList = {
  SplashScreen: undefined;
  HomeScreen: undefined;
  PostDetailsScreen: { post: PostProps };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerTitle: "Posts",
            headerStyle: {
              backgroundColor: theme.linear1,
            },
            headerTintColor: theme.white,
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="PostDetailsScreen"
          component={PostDetailsScreen}
          options={({ navigation }) => ({
            headerLeft: (props) => (
              <View>
                <HeaderBackButton
                  {...props}
                  onPress={() => navigation.goBack()}
                  labelVisible={false}
                  backImage={() => (
                    <View style={{}}>
                      <MaterialIcons name="arrow-back" size={21} color="#fff" />
                    </View>
                  )}
                />
              </View>
            ),
            headerTitle: "Post details",
            headerStyle: {
              backgroundColor: theme.linear1,
            },
            headerTintColor: theme.white,
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
            headerShadowVisible: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  backButtonContainer: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: 21,
    backgroundColor: "#FBFCFE1A",
    justifyContent: "center",
    alignItems: "center",
    margin: height * 0.01,
  },
});

export default AppNavigator;
