import React, { useCallback, useEffect, useState } from "react";
import { RouteProp } from "@react-navigation/native";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import { RootStackParamList } from "../../navigation/AppNavigator";
import { AppDispatch, RootState } from "../../store/store";
import { fetchComments } from "../../store/slices/commentsSlice";
import CommentCard from "../../components/features/CommentCard/CommentCard";
import { styles } from "./styles";
import { Screen } from "../../components";
import { theme } from "../../utils/theme";
import { CommentProps } from "../../components/features/CommentCard/interface";
import IconButton from "../../components/common/IconButton/IconButton";

type PostDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  "PostDetailsScreen"
>;

const PostCardDetails: React.FC<{ route: PostDetailsScreenRouteProp }> = ({
  route,
}) => {
  const { post } = route.params;
  const dispatch = useDispatch<AppDispatch>();
  const comments = useSelector((state: RootState) => state.comments.comments);
  const users = useSelector((state: RootState) => state.users.Users);
  const commentStatus = useSelector(
    (state: RootState) => state.comments.status
  );
  const [showComments, setShowComments] = useState(true);
  const [postComments, setPostComments] = useState<CommentProps[]>([]);

  useEffect(() => {
    dispatch(fetchComments({ postId: post.id }));
  }, [dispatch, post.id]);

  useEffect(() => {
    const filteredComments = comments.filter(
      (comment) => comment.post_id === post.id
    );
    setPostComments(filteredComments);
  }, [comments, post.id]);

  const loadComments = useCallback(() => {
    dispatch(fetchComments({ postId: post.id }));
  }, [dispatch]);

  if (commentStatus === "failed") {
    return (
      <Screen style={styles.centered}>
        <Text style={styles.error}>
          Error loading posts. Please try again later.
        </Text>
        <TouchableOpacity onPress={loadComments} style={styles.refreshButton}>
          <MaterialIcons name="refresh" size={35} color="white" />
        </TouchableOpacity>
      </Screen>
    );
  }

  const user = users.find((user) => user.id === post.user_id);

  const toggleComments = () => setShowComments(!showComments);

  return (
    <Screen gradientColors={[theme.linear1, theme.linear2, theme.linear3]}>
      <View style={styles.card}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={require("../../assets/Avatar.png")}
          />
          <View style={styles.titleContainer}>
            <Text style={[styles.name]}>
              {user ? user.name : "Default name"}
            </Text>
            <Text style={styles.title}>{post.title}</Text>
          </View>
          <IconButton showComments={showComments} onPress={toggleComments} />
        </View>
        <Text style={styles.body}>{post.body}</Text>
        {showComments &&
          (commentStatus === "loading" ? (
            <ActivityIndicator size="large" />
          ) : postComments.length > 0 ? (
            <FlatList
              data={postComments}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <CommentCard comment={item} />}
            />
          ) : (
            <View style={styles.noCommentsContainer}>
              <Text style={styles.noComments}>No comments available</Text>
            </View>
          ))}
      </View>
    </Screen>
  );
};

export default PostCardDetails;
