import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigation/AppNavigator";
import { styles } from "./styles";
import { PostProps } from "./interface";
import { UserProps } from "../../../store/slices/usersSlice";

type PostCardNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "PostDetailsScreen"
>;

interface PostCardProps {
  post: PostProps;
  user?: UserProps;
}
const PostCard: React.FC<PostCardProps> = ({ post, user }) => {
  const navigation = useNavigation<PostCardNavigationProp>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("PostDetailsScreen", { post })}
      style={styles.card}
    >
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={require("../../../assets/Avatar.png")}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.name}>{user ? user.name : "Default name"}</Text>
          <Text style={styles.title}>{post.title}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.body}>{post.body}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PostCard;
