import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { CommentProps } from "./interface";

interface CommentCardProps {
  comment: CommentProps;
}

const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
  return (
    <View style={styles.card}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={require("../../../assets/Avatar.png")}
        />
        <Text style={styles.name}>{comment.name}</Text>
      </View>
      <Text style={styles.body}>{comment.body}</Text>
    </View>
  );
};

export default CommentCard;
