import React, { useCallback, useEffect, useState } from "react";
import {
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { fetchPosts } from "../../store/slices/postsSlice";
import { AppDispatch, RootState } from "../../store/store";
import { RootStackParamList } from "../../navigation/AppNavigator";
import { styles } from "./styles";
import { Screen, PostCard } from "../../components/index";
import { theme } from "../../utils/theme";
import { fetchUsers } from "../../store/slices/usersSlice";
import { PostProps } from "../../components/features/PostCard/interface";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "HomeScreen"
>;

interface Props {
  navigation: HomeScreenNavigationProp;
}
interface PostItem {
  item: PostProps;
}

const HomeScreen: React.FC<Props> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector((state: RootState) => state.posts.posts);
  const users = useSelector((state: RootState) => state.users.Users);
  const postStatus = useSelector((state: RootState) => state.posts.status);
  const userStatus = useSelector((state: RootState) => state.users.status);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  useEffect(() => {
    if (userStatus === "idle") {
      dispatch(fetchUsers());
    }
  }, [userStatus, dispatch]);

  const loadPosts = useCallback(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (postStatus === "loading") {
    return (
      <Screen style={styles.centered}>
        <ActivityIndicator size="large" />
      </Screen>
    );
  }
  if (postStatus === "failed") {
    return (
      <Screen style={styles.centered}>
        <Text style={styles.error}>
          Error loading posts. Please try again later.
        </Text>
        <TouchableOpacity onPress={loadPosts} style={styles.refreshButton}>
          <MaterialIcons name="refresh" size={35} color="white" />
        </TouchableOpacity>
      </Screen>
    );
  }
  const renderPostCard = ({ item }: PostItem) => {
    const user = users.find((user) => user.id === item.user_id);
    return user ? (
      <PostCard post={item} user={user} />
    ) : (
      <PostCard post={item} />
    );
  };

  return (
    <Screen gradientColors={[theme.linear1, theme.linear2, theme.linear3]}>
      <FlatList
        data={posts}
        renderItem={renderPostCard}
        keyExtractor={(item) => item.id.toString()}
      />
    </Screen>
  );
};

export default HomeScreen;
