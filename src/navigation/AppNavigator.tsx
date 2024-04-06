import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HeaderBackButton } from "@react-navigation/elements";
import { MaterialIcons } from "@expo/vector-icons";

import { HomeScreen, PostDetailsScreen, SplashScreen } from "../screens";
import { PostProps } from "../components/features/PostCard/interface";
import { theme } from "../utils/theme";
import { View } from "react-native";

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
              backgroundColor: "#0E51B6",
            },
            headerTintColor: "#fff",
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
                  labelVisible={false} // This will remove the 'Back' text
                  backImage={() => (
                    <View
                      style={{
                        width: 42, // Set the width of the circle
                        height: 42, // Set the height of the circle
                        borderRadius: 21, // Half of width/height to make it a circle
                        backgroundColor: "#FBFCFE1A", // Background color of the circle
                        justifyContent: "center",
                        alignItems: "center",
                        margin: 2,
                      }}
                    >
                      <MaterialIcons name="arrow-back" size={21} color="#fff" />
                    </View>
                  )}
                />
              </View>
            ),
            headerTitle: "Post details",
            headerStyle: {
              backgroundColor: "#0E51B6",
            },
            headerTintColor: "#fff",
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

export default AppNavigator;
